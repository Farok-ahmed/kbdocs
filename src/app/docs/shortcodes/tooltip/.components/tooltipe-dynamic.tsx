import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const TooltipeDynamic = ({
  children,
  content,
}: {
  children: React.ReactNode;
  content: React.ReactNode;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const tooltipVariants = {
    hidden: { opacity: 0, y: 15, scale: 0 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };
  return (
    <span
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={tooltipVariants}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
              position: "absolute",
              filter: "drop-shadow(0px 5px 10px rgba(0,0,0,0.2))",
              top: "32px",
            }}
          >
            <div>{content}</div>
            <div className="tooltipster-arrow" style={{ top: "67px" }}>
              <div className="tooltipster-arrow-uncropped">
                <div className="tooltipster-arrow-border"></div>
                <div className="tooltipster-arrow-background"></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
};

export default TooltipeDynamic;
