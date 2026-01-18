import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import Block3D from '../components/ui/Block3D';
import { useTranslation } from '../hooks/useTranslation';

function Contact() {
  const { t } = useTranslation();

  return (
    <div className="bg-silver-black text-white min-vh-100" style={{ paddingTop: '80px', paddingBottom: '2rem' }}>
      <Container>
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center py-5 mb-5"
        >
          <h1 className="display-3 fw-bold mb-4 text-fuschia-pink">{t('contact.title')}</h1>
          <p className="lead text-light">
            {t('contact.subtitle')}
          </p>
        </motion.section>

        <Row className="g-4 justify-content-center">
          <Col md={8} lg={6}>
            <Block3D delay={0.2} glow>
              <div
                className="p-5"
                style={{
                  backgroundColor: '#4A5568',
                  borderRadius: '1rem',
                }}
              >
                <h2 className="text-fuschia-pink fw-bold mb-4 text-center">{t('contact.info.title')}</h2>
                
                <div className="mb-4">
                  <h4 className="text-light mb-2">{t('contact.info.name')}</h4>
                  <p className="text-light">Adela Simkova</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-light mb-2">{t('contact.info.email')}</h4>
                  <p className="text-light">
                    <a
                      href="mailto:simkova54321@gmail.com"
                      className="text-fuschia-pink text-decoration-none"
                    >
                      simkova54321@gmail.com
                    </a>
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="text-light mb-3">{t('contact.info.connect')}</h4>
                  <div className="d-flex gap-3 justify-content-center">
                    <motion.a
                      href="https://www.linkedin.com/in/adela-simkova"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-light"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      LinkedIn
                    </motion.a>
                    <motion.a
                      href="https://github.com/Karcoolka"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-light"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      GitHub
                    </motion.a>
                  </div>
                </div>

                <div className="text-center mt-4">
                  <p className="text-light mb-0">
                    {t('contact.info.message')}
                  </p>
                </div>
              </div>
            </Block3D>
          </Col>
        </Row>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center py-5 mt-5"
        >
          <p className="text-light">
            {t('contact.info.footer')}
          </p>
        </motion.section>
      </Container>
    </div>
  );
}

export default Contact;