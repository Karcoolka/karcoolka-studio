import { motion } from 'framer-motion';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Block3D from '../components/ui/Block3D';
import { useTranslation } from '../hooks/useTranslation';

function Home() {
  const { t } = useTranslation();
  return (
    <div className="bg-silver-black text-white min-vh-100" style={{ paddingTop: '80px', paddingBottom: '2rem' }}>
      <Container>
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center py-5 mb-5"
        >
          <h1 className="display-3 fw-bold mb-4 text-fuschia-pink">
            {t('home.hero.title')}
          </h1>
          <p className="lead mb-4 text-light">
            {t('home.hero.subtitle')}
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Link to="/portfolio">
              <Button
                size="lg"
                className="me-3 mb-3"
                style={{ backgroundColor: '#FF1493', borderColor: '#FF1493' }}
              >
                {t('home.button.portfolio')}
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline-light"
                className="mb-3"
              >
                {t('home.button.contact')}
              </Button>
            </Link>
          </motion.div>
        </motion.section>

        {/* Services Overview */}
        <Row className="g-4 mb-5">
          <Col md={4}>
            <Block3D delay={0.2} glow>
              <div
                className="p-4 h-100 text-center"
                style={{
                  backgroundColor: '#4A5568',
                  borderRadius: '1rem',
                  minHeight: '250px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <h3 className="text-fuschia-pink fw-bold mb-3">{t('home.services.web')}</h3>
                <p className="text-light">
                  {t('home.services.web.desc')}
                </p>
              </div>
            </Block3D>
          </Col>
          <Col md={4}>
            <Block3D delay={0.4} glow>
              <div
                className="p-4 h-100 text-center"
                style={{
                  backgroundColor: '#4A5568',
                  borderRadius: '1rem',
                  minHeight: '250px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <h3 className="text-fuschia-pink fw-bold mb-3">{t('home.services.apps')}</h3>
                <p className="text-light">
                  {t('home.services.apps.desc')}
                </p>
              </div>
            </Block3D>
          </Col>
          <Col md={4}>
            <Block3D delay={0.6} glow>
              <div
                className="p-4 h-100 text-center"
                style={{
                  backgroundColor: '#4A5568',
                  borderRadius: '1rem',
                  minHeight: '250px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <h3 className="text-fuschia-pink fw-bold mb-3">{t('home.services.creations')}</h3>
                <p className="text-light">
                  {t('home.services.creations.desc')}
                </p>
              </div>
            </Block3D>
          </Col>
        </Row>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center py-5"
        >
          <h2 className="mb-4 text-fuschia-pink">{t('home.cta.title')}</h2>
          <Link to="/contact">
            <Button
              size="lg"
              style={{ backgroundColor: '#FF1493', borderColor: '#FF1493' }}
            >
              {t('home.cta.button')}
            </Button>
          </Link>
        </motion.section>
      </Container>
    </div>
  );
}

export default Home;