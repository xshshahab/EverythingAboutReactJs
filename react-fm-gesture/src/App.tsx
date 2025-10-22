import React from "react";
import { motion } from "framer-motion";

const App: React.FC = () => {
  return (
    <div className="app">
      <motion.div
        className="box"
        whileHover={{ scale: 1.2, rotate: 10 }}
        transition={{ type: "spring", stiffness: 300 }}
      />
      <motion.div
        className="box"
        whileTap={{
          scale: 0.8,
          backgroundColor: "crimson",
          borderRadius: "50%",
        }}
        transition={{ type: "spring", stiffness: 300 }}
      />
      <motion.div
        className="box"
        drag
        dragConstraints={{
          top: -50,
          bottom: -50,
          left: 50,
          right: 50,
        }}
        transition={{ type: "spring", stiffness: 300 }}
      />
    </div>
  );
};

export default App;
