import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import '../../styles/mixins.scss';

interface Block3DProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  glow?: boolean;
}

function Block3D({ children, className = '', delay = 0, glow = false }: Block3DProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        scale: 1.05,
        y: -10,
        rotateX: 2,
        rotateY: 2,
      }}
      style={{
        borderRadius: '1rem',
        transformStyle: 'preserve-3d',
        perspective: '1000px',
        boxShadow: glow 
          ? '0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 20, 147, 0.3)'
          : '0 10px 30px rgba(0, 0, 0, 0.3)',
        transition: 'all 0.3s ease',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default Block3D;