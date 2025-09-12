import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import axios from 'axios'

interface AnfrageModalProps {
  unterlagen: string[]
  onClose: () => void
}

const AnfrageModal: React.FC<AnfrageModalProps> = ({ unterlagen, onClose }) => {
  const { t } = useTranslation()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    uploadedDocs: {} as Record<string, { file: File; base64: string } | null>
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFileUpload = async (unterlage: string, file: File | null) => {
    if (file) {
      try {
        const base64 = await fileToBase64(file)
        setFormData((prev) => ({
          ...prev,
          uploadedDocs: {
            ...prev.uploadedDocs,
            [unterlage]: { file, base64 }
          }
        }))
      } catch (error) {
        console.error('Error converting file to base64:', error)
      }
    } else {
      setFormData((prev) => {
        const { [unterlage]: _, ...remainingDocs } = prev.uploadedDocs
        return {
          ...prev,
          uploadedDocs: remainingDocs
        }
      })
    }
  }

  // Convert file to base64
  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result as string)
      reader.onerror = (error) => reject(error)
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      // Prepare submission data
      const submissionData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        unterlagen: Object.keys(formData.uploadedDocs).join(', '), // List of uploaded document names
        uploadedFiles: Object.entries(formData.uploadedDocs).map(([name, doc]) => ({
          name,
          base64: doc?.base64 || ''
        }))
      }

      // Submit the form via API
      const response = await axios.post('/api/anfrage', submissionData)

      // Reset form and close modal on success
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        uploadedDocs: {}
      })
      onClose()
    } catch (error) {
      // Handle submission error
      const errorMessage = axios.isAxiosError(error)
        ? error.response?.data?.error || 'An unexpected error occurred'
        : 'An unexpected error occurred'

      setSubmitError(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="contact-modal-overlay">
      <div className="contact-modal">
        {/* Header */}
        <div className="modal-header">
          <div className="header-content">
            <h2>{t('anfrage.title')}</h2>
            <p>{t('anfrage.subtitle')}</p>
          </div>
          <button onClick={onClose} className="close-btn">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="modal-body">
          {/* Error Message */}
          {submitError && (
            <div className="error-message">
              {submitError}
            </div>
          )}

          {/* Personal Info */}
          <div className="form-section">
            <h3>{t('anfrage.personalInfo')}</h3>

            <div className="form-group">
              <label>{t('form.name')} *</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>{t('form.email')} *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label>{t('form.phone')}</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
            </div>
          </div>

          {/* Documents Upload */}
          <div className="form-section">
            <h3>{t('anfrage.documents')}</h3>
            <p className="section-description">{t('anfrage.documentsHint')}</p>

            <div className="upload-list">
              {unterlagen.map((unterlage, index) => {
                const fileUploaded = formData.uploadedDocs[unterlage]
                return (
                  <div key={index} className="upload-item">
                    <span className="upload-label">{unterlage}</span>

                    <div className="upload-wrapper">
                      {/* Input file oculto */}
                      <input
                        id={`file-${index}`}
                        type="file"
                        style={{ display: 'none' }}
                        onChange={(e) => handleFileUpload(unterlage, e.target.files?.[0] || null)}
                      />

                      {/* Botón visible */}
                      <label htmlFor={`file-${index}`} className="file-upload-btn">
                        📂 {t('Hochladen')}
                      </label>

                      {/* Nombre del archivo si existe */}
                      <span className="file-name">
                        {fileUploaded ? fileUploaded.file.name : t('Keine Datei')}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Message */}
          <div className="form-section">
            <div className="form-group">
              <label>{t('form.message')}</label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="form-textarea"
                placeholder={t('form.messagePlaceholder') || ''}
              />
            </div>
          </div>

          {/* Actions */}
          <div className="form-actions">
            <button
              type="submit"
              className="btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? t('form.submitting') : t('form.submit')}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="btn-secondary"
              disabled={isSubmitting}
            >
              {t('form.cancel')}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AnfrageModal
