import React from 'react';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer() {
  return (
    <Row className="Footer no-gutters">
      <Col xs={12} sm={6} md={4} className="social foot">
        <a
          href="https://twitter.com/fursquared"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a
          href="https://www.facebook.com/fursquared"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faFacebookF} size="2x" />
        </a>
      </Col>
      <Col xs={12} sm={6} md={4} className="legal foot">
        Copyright &copy; Fur Squared {new Date().getFullYear()}
      </Col>
      <Col xs={12} sm={6} md={4} />
    </Row>
  );
}

export default Footer;
