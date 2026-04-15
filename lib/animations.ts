// Premium smooth animations for a 4K motion blur effect
// Uses longer durations, sophisticated easing, and blur effects

export const smoothTransition = {
  duration: 0.9,
  ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for ultra-smooth feel
};

export const smoothSpring = {
  type: "spring" as const,
  stiffness: 50,
  damping: 20,
  mass: 1,
};

// Fade up animation - the main section reveal animation
export const fadeInUp = {
  initial: {
    opacity: 0,
    y: 60,
    filter: "blur(10px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
  transition: {
    duration: 1,
    ease: [0.22, 1, 0.36, 1],
  },
};

// For viewport-triggered animations
export const fadeInUpView = {
  initial: {
    opacity: 0,
    y: 50,
    filter: "blur(8px)",
  },
  whileInView: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
  viewport: { once: true, margin: "-50px" },
  transition: {
    duration: 0.9,
    ease: [0.22, 1, 0.36, 1],
  },
};

// Subtle fade for smaller elements
export const fadeInSubtle = {
  initial: {
    opacity: 0,
    y: 30,
    filter: "blur(6px)",
  },
  whileInView: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
  viewport: { once: true },
  transition: {
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1],
  },
};

// Scale fade for cards and interactive elements
export const scaleFadeIn = {
  initial: {
    opacity: 0,
    scale: 0.95,
    filter: "blur(8px)",
  },
  whileInView: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
  },
  viewport: { once: true },
  transition: {
    duration: 0.85,
    ease: [0.22, 1, 0.36, 1],
  },
};

// Stagger children animation
export const staggerContainer = {
  initial: {},
  whileInView: {},
  viewport: { once: true },
  transition: {
    staggerChildren: 0.12,
    delayChildren: 0.1,
  },
};

export const staggerItem = {
  initial: {
    opacity: 0,
    y: 40,
    filter: "blur(8px)",
  },
  whileInView: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
  transition: {
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1],
  },
};

// Create stagger delay for items
export const getStaggerDelay = (index: number, baseDelay = 0.1) => ({
  delay: index * baseDelay + 0.15,
});

// Smooth transition preset for motion components
export const smoothViewTransition = {
  duration: 0.9,
  ease: [0.22, 1, 0.36, 1],
};

// For elements that slide from sides
export const slideInFromLeft = {
  initial: {
    opacity: 0,
    x: -60,
    filter: "blur(8px)",
  },
  whileInView: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
  },
  viewport: { once: true },
  transition: smoothViewTransition,
};

export const slideInFromRight = {
  initial: {
    opacity: 0,
    x: 60,
    filter: "blur(8px)",
  },
  whileInView: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
  },
  viewport: { once: true },
  transition: smoothViewTransition,
};

// Badge/tag animation
export const badgeFadeIn = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.95,
    filter: "blur(4px)",
  },
  whileInView: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
  },
  viewport: { once: true },
  transition: {
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1],
  },
};

// Heading animation
export const headingFadeIn = {
  initial: {
    opacity: 0,
    y: 40,
    filter: "blur(10px)",
  },
  whileInView: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
  viewport: { once: true },
  transition: {
    duration: 1,
    ease: [0.22, 1, 0.36, 1],
  },
};

// Paragraph/text animation
export const textFadeIn = {
  initial: {
    opacity: 0,
    y: 25,
    filter: "blur(6px)",
  },
  whileInView: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
  viewport: { once: true },
  transition: {
    duration: 0.85,
    ease: [0.22, 1, 0.36, 1],
    delay: 0.15,
  },
};

// Card animation with hover state
export const cardAnimation = {
  initial: {
    opacity: 0,
    y: 50,
    filter: "blur(10px)",
  },
  whileInView: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
  viewport: { once: true },
  transition: {
    duration: 0.9,
    ease: [0.22, 1, 0.36, 1],
  },
};

// Image reveal animation
export const imageReveal = {
  initial: {
    opacity: 0,
    scale: 1.05,
    filter: "blur(15px)",
  },
  whileInView: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
  },
  viewport: { once: true },
  transition: {
    duration: 1.1,
    ease: [0.22, 1, 0.36, 1],
  },
};
