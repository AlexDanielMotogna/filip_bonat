import React, { useState } from 'react';
import { Modal, Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import {
  parseATNumber,
  formatCurrency,
  calculateMonthlyPayment,
} from "../utils/kreditUtils";

interface KreditrechnerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const KreditrechnerModal: React.FC<KreditrechnerModalProps> = ({ isOpen, onClose }) => {
  const [kreditbetrag, setKreditbetrag] = useState<number>(75000);
  const [laufzeit, setLaufzeit] = useState<number>(60);
  const [zinssatz, setZinssatz] = useState<number>(5);
  const [kreditkosten, setKreditkosten] = useState<number>(3);
  const { t } = useTranslation();
  const kreditbetragInkl = kreditbetrag * (1 + kreditkosten / 100);
  const monatlicheRate = calculateMonthlyPayment(kreditbetragInkl, laufzeit, zinssatz);
  const gesamtrueckzahlung = monatlicheRate * laufzeit;
  const zinsen = gesamtrueckzahlung - kreditbetragInkl;

  const handleSliderChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<number>>
  ) => {
    setter(Number(e.target.value));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setter: React.Dispatch<React.SetStateAction<number>>
  ) => {
    const rawValue = e.target.value.replace(/[^\d.,]/g, '').replace(',', '.');
    const value = Number(rawValue);
    if (!isNaN(value)) {
      setter(value);
    }
  };

  return (
    <Modal show={isOpen} onHide={onClose} size="lg" centered>
      <Modal.Header closeButton style={{ background: '#4AC082', color: 'white' }}>
        <Modal.Title className="w-100 text-center">{t("kreditrechner")}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-4">
        <Container>
          {/* Kreditbetrag */}
          <Row className="mb-4">
            <Col sm={3}>
              <label htmlFor="kreditbetrag">{t("Kreditbetrag")}</label>
            </Col>
            <Col sm={3}>
              <div className="input-group">
                <span className="input-group-text">€</span>
                <Form.Control
                  id="kreditbetrag"
                  type="text"
                  value={kreditbetrag === null ? "" : kreditbetrag.toLocaleString("de-DE")}
                  onChange={(e) => {
                    const parsed = parseATNumber(e.target.value);
                    if (!isNaN(parsed)) setKreditbetrag(parsed);
                  }}
                />
              </div>
            </Col>
            <Col sm={6}>
              <Form.Range
                value={kreditbetrag}
                onChange={(e) => handleSliderChange(e, setKreditbetrag)}
                min="1000"
                max="1500000"
                step="1000"
                className="form-range"
              />
            </Col>
          </Row>

          {/* Laufzeit */}
          <Row className="mb-4">
            <Col sm={3}>
              <label htmlFor="laufzeit">{t("Laufzeit in Monaten")}</label>
            </Col>
            <Col sm={3}>
              <div className="input-group">
                <span className="input-group-text">M</span>
                <Form.Control
                  id="laufzeit"
                  type="text"
                  value={laufzeit.toString()}
                  onChange={(e) => handleInputChange(e, setLaufzeit)}
                />
              </div>
            </Col>
            <Col sm={6}>
              <Form.Range
                value={laufzeit}
                onChange={(e) => handleSliderChange(e, setLaufzeit)}
                min="12"
                max="120"
                step="1"
                className="form-range"
              />
            </Col>
          </Row>

          {/* Zinssatz */}
          <Row className="mb-4">
            <Col sm={3}>
              <label htmlFor="zinssatz">{t("Zinssatz")}</label>
            </Col>
            <Col sm={3}>
              <div className="input-group">
                <span className="input-group-text">%</span>
                <Form.Control
                  id="zinssatz"
                  type="text"
                  value={zinssatz.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  onChange={(e) => {
                    const parsed = parseATNumber(e.target.value);
                    if (!isNaN(parsed)) setZinssatz(parsed);
                  }}
                />
              </div>
            </Col>
            <Col sm={6}>
              <Form.Range
                value={zinssatz}
                onChange={(e) => handleSliderChange(e, setZinssatz)}
                min="1"
                max="15"
                step="0.1"
                className="form-range"
              />
            </Col>
          </Row>

          {/* Kreditkosten */}
          <Row className="mb-4">
            <Col sm={3}>
              <label htmlFor="kreditkosten">{t("Kreditkosten")}</label>
            </Col>
            <Col sm={3}>
              <div className="input-group">
                <span className="input-group-text">%</span>
                <Form.Control
                  id="kreditkosten"
                  type="text"
                  value={kreditkosten === 0 ? "" : kreditkosten.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  onChange={(e) => {
                    const parsed = parseATNumber(e.target.value);
                    if (!isNaN(parsed)) setKreditkosten(parsed);
                  }}
                />
              </div>
            </Col>
            <Col sm={6}>
              <Form.Range
                value={kreditkosten}
                onChange={(e) => handleSliderChange(e, setKreditkosten)}
                min="0"
                max="10"
                step="0.1"
                className="form-range"
              />
            </Col>
          </Row>

          {/* Results */}
          <Row className="mt-5 bg-light p-4 rounded">
            <Col md={4} className="text-center mb-3">
              <p className="text-muted mb-1">{t("Monatliche Rate")}</p>
              <h3 className="fw-bold">{formatCurrency(monatlicheRate)}</h3>
            </Col>
            <Col md={4} className="text-center mb-3">
              <p className="text-muted mb-1">{t("Gesamtrückzahlung")}</p>
              <h3 className="fw-bold">{formatCurrency(gesamtrueckzahlung)}</h3>
            </Col>
            <Col md={4} className="text-center mb-3">
              <p className="text-muted mb-1">{t("Davon Zinsen")}</p>
              <h3 className="fw-bold">{formatCurrency(zinsen)}</h3>
            </Col>
            <Col xs={12} className="text-center mt-2">
              <small>{t("Kreditbetrag inkl. Kreditkosten")} {formatCurrency(kreditbetragInkl)}</small>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button
          onClick={onClose}
          style={{
            backgroundColor: '#4AC082',
            border: 'none',
            padding: '10px 30px',
            borderRadius: '30px',
            fontSize: '18px',
            fontWeight: '600'
          }}
          className="w-100"
        >
          {t("request_cta")}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default KreditrechnerModal;
