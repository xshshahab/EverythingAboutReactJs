import { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div>
      <h1>Timer: {count}seconds</h1>
      <button onClick={() => clearInterval(timerRef.current)}>
        Stop timer
      </button>
    </div>
  );
};

export default Timer;
