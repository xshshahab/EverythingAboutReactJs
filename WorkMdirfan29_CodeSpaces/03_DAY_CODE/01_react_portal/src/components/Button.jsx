import { useState } from "react";
import Modal from "./Modal";

const Button = () => {
  const [btn, setBtn] = useState(false);

  const handleClick = () => {
    console.log("Clicked Hua");
    setBtn(true);
    setTimeout(() => {
      setBtn(false);
    }, 10000);
  };

  return (
    <>
      <button
        className="p-2.5  px-4 bg-slate-700 text-slate-50 rounded-md"
        onClick={handleClick}
      >
        Click Me
      </button>

      {btn && <Modal />}
    </>
  );
};

export default Button;
