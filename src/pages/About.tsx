import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import Block3D from '../components/ui/Block3D';
import { useTranslation } from '../hooks/useTranslation';

function About() {
  const { t } = useTranslation();

  const skills = [
    t('about.skills.tech1'),
    t('about.skills.tech2'),
    t('about.skills.tech3'),
    t('about.skills.tech4'),
    t('about.skills.tech5'),
    t('about.skills.tech6'),
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
          <h1 className="display-3 fw-bold mb-4 text-fuschia-pink">{t('about.title')}</h1>
          <p className="lead text-light max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.section>

        <Row className="g-4 mb-5">
          <Col md={6}>
            <Block3D delay={0.2} glow>
              <div
                className="p-4 h-100"
                style={{
                  backgroundColor: '#4A5568',
                  borderRadius: '1rem',
                  minHeight: '300px',
                }}
              >
                <h2 className="text-fuschia-pink fw-bold mb-4">{t('about.who.title')}</h2>
                <p className="text-light mb-3">
                  {t('about.who.content')}
                </p>
                <p className="text-light">
                  {t('about.who.content2')}
                </p>
              </div>
            </Block3D>
          </Col>
          <Col md={6}>
            <Block3D delay={0.4} glow>
              <div
                className="p-4 h-100"
                style={{
                  backgroundColor: '#4A5568',
                  borderRadius: '1rem',
                  minHeight: '300px',
                }}
              >
                <h2 className="text-fuschia-pink fw-bold mb-4">{t('about.approach.title')}</h2>
                <p className="text-light mb-3">
                  {t('about.approach.content')}
                </p>
                <p className="text-light">
                  {t('about.approach.content2')}
                </p>
              </div>
            </Block3D>
          </Col>
        </Row>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-5"
        >
          <h2 className="text-center text-fuschia-pink mb-4">{t('about.skills.title')}</h2>
          <Row className="g-3">
            {skills.map((skill, index) => (
              <Col key={skill} md={4} sm={6}>
                <Block3D delay={0.1 * index}>
                  <div
                    className="p-3 text-center"
                    style={{
                      backgroundColor: '#4A5568',
                      borderRadius: '1rem',
                    }}
                  >
                    <p className="text-light mb-0 fw-bold">{skill}</p>
                  </div>
                </Block3D>
              </Col>
            ))}
          </Row>
        </motion.section>
      </Container>
    </div>
  );
}

export default About;