import { motion, useInView } from 'framer-motion';
import { ReactNode, useRef, useEffect } from 'react';

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  onVisible?: () => void;
}

const AnimateOnScroll = ({ children, className = '', delay = 0, onVisible }: AnimateOnScrollProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  
  useEffect(() => {
    if (isInView && onVisible) {
      onVisible();
    }
  }, [isInView, onVisible]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScroll;
