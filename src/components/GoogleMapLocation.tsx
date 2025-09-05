import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo1 from '../assets/img/logo/logo1.png';
import { currentYear } from '@/helper/constants';

const GoogleMapLocation: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
      <iframe
        title="Ubicación en Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2522.857282073624!2d13.40495431574613!3d52.5200061798126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c1b8e6e5b1%3A0x421b1e0b1e0b1e0b!2sBerlin!5e0!3m2!1ses!2sde!4v1693840000000!5m2!1ses!2sde"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div>
        <Col lg={12}>
          <div className="space50" />
          <div className="footer-area">
            <div className="btn-area1">
              <Link to="/">
                <img src={Logo1} alt="" />
              </Link>
            </div>
            <p>© {currentYear} Filip Bonat. Alle Rechte vorbehalten.</p>
          </div>
        </Col>
      </div>
    </div>

  );
};

export default GoogleMapLocation;
