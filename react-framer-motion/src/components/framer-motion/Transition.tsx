import { motion } from "framer-motion";

const Transition = () => {
  return (
    <div>
      <motion.div
        className="rounded-full size-32 bg-fuchsia-400"
        initial={{ x: 0 }}
        animate={{ x: 150 }}
        // transition={{ delay: 2 }}
        // transition={{ delay: 5 }}
        // transition={{ duration: 2 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </div>
  );
};

export default Transition;
