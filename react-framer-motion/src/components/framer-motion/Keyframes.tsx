import { motion } from "framer-motion";

const Keyframes = () => {
  return (
    <div className="flex items-center gap-2">
      <motion.div
        className="bg-indigo-400 size-32"
        animate={{
          // scale: [1,2,3,2,1]
          rotate: [0, 0, 270, 270, 0],
        }}
        transition={{ duration: 5 }}
      />
      <motion.div
        className="bg-indigo-400 size-32"
        animate={{
          scale: [1, 2, 3, 3, 4, 3, 2, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{ duration: 5 }}
      />
    </div>
  );
};

export default Keyframes;
