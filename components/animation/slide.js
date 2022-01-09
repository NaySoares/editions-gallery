import { motion } from "framer-motion";

const Hvariants = {
  hidden: { opacity: 0, x: -20, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -20, y: 0 },
};

const Vvariants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 },
};

export const HorizontalSlide = ({ children, delay = 0.4 }) => (
  <motion.h2
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={Hvariants}
    transition={{ duration: delay, type: "easeInOut" }}
    style={{ position: "relative" }}
  >
    {children}
  </motion.h2>
);

export const VerticalSlide = ({ children, delay = 0.4 }) => (
  <motion.article
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={Vvariants}
    transition={{ duration: delay, type: "easeInOut" }}
    style={{ position: "relative" }}
  >
    {children}
  </motion.article>
);