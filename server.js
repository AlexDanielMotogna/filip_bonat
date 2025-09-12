const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { PrismaClient } = require('@prisma/client')
const nodemailer = require('nodemailer')
require('dotenv').config()

const app = express()
const prisma = new PrismaClient()

// Middleware
app.use(cors())
app.use(bodyParser.json({ limit: '50mb' }))

// Email transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
})

// Anfrage submission endpoint
app.post('/api/anfrage', async (req, res) => {
  try {
    const { 
      name, 
      email, 
      phone, 
      message, 
      unterlagen, 
      uploadedFiles 
    } = req.body

    // Validate input
    if (!name || !email || !unterlagen) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    // Save submission to database
    const savedSubmission = await prisma.anfrageSubmission.create({
      data: {
        name,
        email,
        phone: phone || null,
        message: message || '',
        unterlagen
      }
    })

    // Prepare email
    const mailOptions = {
      from: process.env.SMTP_FROM || 'noreply@filipbonat.com',
      to: 'alexdanielmotogna@gmail.com',
      subject: `Neue Anfrage - ${unterlagen}`,
      html: `
        <h1>Neue Anfrage Eingereicht</h1>
        <p><strong>Unterlagen:</strong> ${unterlagen}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || 'Nicht angegeben'}</p>
        <p><strong>Nachricht:</strong> ${message || 'Keine Nachricht'}</p>
        ${uploadedFiles ? `
          <h2>Hochgeladene Dateien:</h2>
          <ul>
            ${uploadedFiles.map(file => `<li>${file.name}</li>`).join('')}
          </ul>
        ` : ''}
      `
    }

    // Send email
    await transporter.sendMail(mailOptions)

    // Respond with success
    res.status(201).json(savedSubmission)
  } catch (error) {
    console.error('Submission error:', error)
    res.status(500).json({ error: 'Failed to submit anfrage', details: error.message })
  } finally {
    await prisma.$disconnect()
  }
})

// Start server
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
