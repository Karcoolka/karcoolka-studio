import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import PortfolioCard from '../components/ui/PortfolioCard';
import { useTranslation } from '../hooks/useTranslation';

function Portfolio() {
  const { items } = useSelector((state: RootState) => state.portfolio);
  const { t } = useTranslation();

  // Map portfolio items with translated descriptions
  const translatedItems = items.map((item) => {
    const translatedKey = item.id === '1' ? 'portfolio.project1' : 'portfolio.project2';
    return {
      ...item,
      description: t(`${translatedKey}.desc`),
    };
  });

  return (
    <div className="bg-silver-black text-white min-vh-100" style={{ paddingTop: '80px', paddingBottom: '2rem' }}>
      <Container>
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center py-5 mb-5"
        >
          <h1 className="display-3 fw-bold mb-4 text-fuschia-pink">{t('portfolio.title')}</h1>
          <p className="lead text-light">
            {t('portfolio.subtitle')}
          </p>
        </motion.section>

        <Row className="g-4">
          {translatedItems.map((item, index) => (
            <Col key={item.id} md={6}>
              <PortfolioCard item={item} delay={0.2 * index} />
            </Col>
          ))}
        </Row>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center py-5 mt-5"
        >
          <p className="text-light mb-4">
            {t('portfolio.cta.content')}
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
                {t('portfolio.cta.button')}
              </button>
            </motion.div>
          </Link>
        </motion.section>
      </Container>
    </div>
  );
}

export default Portfolio;