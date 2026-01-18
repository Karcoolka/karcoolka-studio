import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Block3D from '../components/ui/Block3D';
import { useTranslation } from '../hooks/useTranslation';

function Services() {
  const { t } = useTranslation();

  const services = [
    {
      title: t('services.webservices.title'),
      description: t('services.webservices.desc'),
      features: [
        t('services.webservices.f1'),
        t('services.webservices.f2'),
        t('services.webservices.f3'),
        t('services.webservices.f4'),
      ],
    },
    {
      title: t('services.webapps.title'),
      description: t('services.webapps.desc'),
      features: [
        t('services.webapps.f1'),
        t('services.webapps.f2'),
        t('services.webapps.f3'),
        t('services.webapps.f4'),
      ],
    },
    {
      title: t('services.creations.title'),
      description: t('services.creations.desc'),
      features: [
        t('services.creations.f1'),
        t('services.creations.f2'),
        t('services.creations.f3'),
        t('services.creations.f4'),
      ],
    },
  ];

  return (
    <div className="bg-silver-black text-white min-vh-100" style={{ paddingTop: '80px', paddingBottom: '2rem' }}>
      <Container>
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center py-5 mb-5"
        >
          <h1 className="display-3 fw-bold mb-4 text-fuschia-pink">{t('services.title')}</h1>
          <p className="lead text-light">
            {t('services.subtitle')}
          </p>
        </motion.section>

        <Row className="g-4 mb-5">
          {services.map((service, index) => (
            <Col key={service.title} md={4}>
              <Block3D delay={0.2 * index} glow>
                <div
                  className="p-4 h-100"
                  style={{
                    backgroundColor: '#4A5568',
                    borderRadius: '1rem',
                    minHeight: '400px',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <h2 className="text-fuschia-pink fw-bold mb-3">{service.title}</h2>
                  <p className="text-light mb-4 flex-grow-1">{service.description}</p>
                  <div>
                    <h4 className="text-light mb-3">{t('services.features')}</h4>
                    <ul className="text-light">
                      {service.features.map((feature) => (
                        <li key={feature} className="mb-2">
                          <span className="text-fuschia-pink">✓</span> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Block3D>
            </Col>
          ))}
        </Row>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center py-5"
        >
          <Block3D glow>
            <div
              className="p-5"
              style={{
                backgroundColor: '#4A5568',
                borderRadius: '1rem',
              }}
            >
              <h2 className="text-fuschia-pink fw-bold mb-3">{t('services.cta.title')}</h2>
              <p className="text-light mb-4">
                {t('services.cta.content')}
              </p>
              <Link to="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    className="btn btn-primary btn-lg text-decoration-none"
                    style={{ backgroundColor: '#FF1493', borderColor: '#FF1493' }}
                  >
                    {t('services.cta.button')}
                  </button>
                </motion.div>
              </Link>
            </div>
          </Block3D>
        </motion.section>
      </Container>
    </div>
  );
}

export default Services;