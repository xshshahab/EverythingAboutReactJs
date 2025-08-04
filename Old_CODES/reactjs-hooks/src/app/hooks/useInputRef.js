import { useRef, useState } from "react";

const useInputRef = () => {
  const [inputVal, setInputVal] = useState("");
  const [items, setItems] = useState([]);
  const inputElement = useRef(null);

  const focusInput = () => {
    inputElement.current.focus();
    inputElement.current.value = "XshShahab";
    setInputVal("XshShahab");
  };

  const handleReset = () => {
    setInputVal("");
    inputElement.current.value = "";
    inputElement.current.focus();
  };

  const handleAdd = () => {
    if (inputVal.trim() === "") return;
    setItems([...items, inputVal]);
    setInputVal("");
    inputElement.current.value = "";
    inputElement.current.focus();
  };

  const handleDelete = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return {
    inputVal,
    setInputVal,
    items,
    inputElement,
    focusInput,
    handleReset,
    handleAdd,
    handleDelete,
  };
};

export default useInputRef;
