import React from 'react';
import { motion } from 'framer-motion';
import { ANIMATION_CONFIG } from './AnimationConfig';

// Animation variants for text reveal
const textVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

// Container variants for staggered children
const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Delay between each child
      delayChildren: 0.2,   // Initial delay before starting
    },
  },
};

export const AnimatedText = ({ children, delay = 0, variant = 'fadeInUp' }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={ANIMATION_CONFIG[variant]}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedContainer = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={ANIMATION_CONFIG.container}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedChart = ({ children, delay = ANIMATION_CONFIG.CONTENT_START_DELAY }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={ANIMATION_CONFIG.chart}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedBox = ({ children, delay = ANIMATION_CONFIG.CONTENT_START_DELAY }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={ANIMATION_CONFIG.fadeIn}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};
