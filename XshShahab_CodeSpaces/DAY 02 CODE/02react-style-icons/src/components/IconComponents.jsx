import { FaDev } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { MdOutlineAutoMode } from "react-icons/md";

const IconComponents = () => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <FaDev style={{ fontSize: "30px" }} />
      <FaCode size={20} color="gold" />
      <MdOutlineAutoMode size={20} color="pink" />
    </div>
  );
};

export default IconComponents;
