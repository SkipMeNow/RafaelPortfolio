import { motion } from "framer-motion";
import { motionVariants } from "../utils/animationVariants";

export const AnimatedPage = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    variants={motionVariants.fade}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration: 0.5, ease: "easeInOut" }}
  >
        {children} {" "}
  </motion.div>
);
