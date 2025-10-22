import { motion } from "framer-motion";
import { useState } from "react";

const variants = {
  front: { rotateY: 0 },
  back: { rotateY: 180 },
};

const FlippingCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      onClick={() => setIsFlipped(!isFlipped)}
      className="perspective-100"
    >
      <motion.div
        variants={variants}
        initial="front"
        animate={isFlipped ? "back" : "front"}
        transition={{ duration: 0.6 }}
        className="w-64 h-40 overflow-hidden bg-white rounded-lg shadow-lg transform-style-preserve-3d"
      >
        <div className="absolute inset-0 flex items-center justify-center text-xl font-bold bg-white">
          Front Side
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-xl font-bold bg-blue-500 rotate-y-180">
          Back Side
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FlippingCard;
