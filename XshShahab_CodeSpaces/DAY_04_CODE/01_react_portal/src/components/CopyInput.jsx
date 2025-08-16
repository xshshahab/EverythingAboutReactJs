import { useState } from "react";
import PopupContent from "./PopupContent";

const CopyInput = () => {
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(input).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
    setInput("");
  };

  return (
    <div>
      <input
        placeholder="Write whatever you want"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleCopy}>Copy</button>

      <PopupContent copied={copied} />
    </div>
  );
};

export default CopyInput;
