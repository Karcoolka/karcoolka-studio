import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-silver-black border-t border-technical-grey py-4 mt-5"
      style={{ backgroundColor: '#1A202C' }}
    >
      <Container>
        <Row>
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <h5 className="text-fuschia-pink mb-2">Karcoolka Studio</h5>
            <p className="text-light mb-1">Adela Simkova</p>
            <p className="text-light mb-0">
              <a href="mailto:simkova54321@gmail.com" className="text-light text-decoration-none">
                simkova54321@gmail.com
              </a>
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <div className="mb-2">
              <a
                href="https://www.linkedin.com/in/adela-simkova"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light text-decoration-none me-3"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Karcoolka"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light text-decoration-none"
              >
                GitHub
              </a>
            </div>
            <p className="text-light mb-0">&copy; {currentYear} Karcoolka Studio. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </motion.footer>
  );
}

export default Footer;