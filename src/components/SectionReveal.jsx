import { motion } from 'framer-motion';

export default function SectionReveal({ children, className = '', delay = 0, id }) {
  return (
    <motion.div
      id={id}
      className={className}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.75, ease: [0.23, 1.23, 0.68, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
