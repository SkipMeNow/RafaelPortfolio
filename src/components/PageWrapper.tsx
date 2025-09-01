// PageWrapper.tsx
import { motion } from "framer-motion";
import { usePageAnimation } from "../contexts/PageAnimationContext";

export const PageWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { variant, onStart, onComplete } = usePageAnimation();

  return (
    <motion.div
      variants={variant}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5, ease: "easeInOut" }}
      onAnimationStart={onStart}
      onAnimationComplete={onComplete}
    >
      {children}
    </motion.div>
  );
};
