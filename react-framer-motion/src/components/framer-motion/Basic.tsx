import { motion } from "framer-motion";

const Basic = () => {
  return (
    <div>
      <motion.div
        animate={{ x: 100 }}
        className="rounded-full size-32 bg-amber-400"
      />
      <motion.div
        animate={{ y: 100 }}
        className="bg-red-400 rounded-full size-32"
      />
      <motion.div
        animate={{ translateX: 150 }}
        className="bg-green-400 rounded-full size-32"
      />
      <motion.div
        animate={{ translateY: 150 }}
        className="bg-pink-400 rounded-full size-32"
      />
      <motion.div animate={{ rotateX: 50 }} className="bg-violet-800 size-32" />
      <motion.div animate={{ rotateY: 50 }} className="bg-gray-100 size-32" />
      <motion.div animate={{ rotate: 50 }} className="bg-slate-500 size-32" />
      <motion.div animate={{ scale: 2 }} className="bg-cyan-500 size-12" />
      <motion.div animate={{ skewX: 20 }} className="bg-blue-500 size-12" />
      <motion.div animate={{ skewY: 20 }} className="bg-sky-500 size-12" />
    </div>
  );
};

export default Basic;
