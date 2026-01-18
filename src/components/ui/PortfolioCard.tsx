import { motion } from 'framer-motion';
import type { PortfolioItem } from '../../data/portfolio';
import Block3D from './Block3D';
import { Card } from 'react-bootstrap';
import { useTranslation } from '../../hooks/useTranslation';

interface PortfolioCardProps {
  item: PortfolioItem;
  delay?: number;
}

function PortfolioCard({ item, delay = 0 }: PortfolioCardProps) {
  const { t } = useTranslation();
  return (
    <Block3D delay={delay} glow>
      <Card
        className="h-100 bg-technical-grey border-0 text-white"
        style={{ backgroundColor: '#4A5568' }}
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <Card.Img
            variant="top"
            src={item.screenshot}
            alt={item.title}
            style={{
              height: '250px',
              objectFit: 'cover',
              borderTopLeftRadius: '1rem',
              borderTopRightRadius: '1rem',
            }}
            onError={(e) => {
              // Fallback if screenshot doesn't exist
              e.currentTarget.src = '/vite.svg';
            }}
          />
        </motion.div>
        <Card.Body className="d-flex flex-column">
          <Card.Title className="text-fuschia-pink fw-bold mb-3">
            {item.title}
          </Card.Title>
          <Card.Text className="text-light flex-grow-1 mb-3">
            {item.description}
          </Card.Text>
          <div className="mb-3">
            {item.technologies.map((tech) => (
              <span
                key={tech}
                className="badge bg-silver-black text-light me-2 mb-2"
                style={{ backgroundColor: '#1A202C' }}
              >
                {tech}
              </span>
            ))}
          </div>
          <motion.a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ backgroundColor: '#FF1493', borderColor: '#FF1493' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('portfolio.visit')}
          </motion.a>
        </Card.Body>
      </Card>
    </Block3D>
  );
}

export default PortfolioCard;