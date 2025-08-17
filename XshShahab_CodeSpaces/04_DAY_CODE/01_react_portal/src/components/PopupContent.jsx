import { createPortal } from "react-dom";

const PopupContent = ({ copied }) => {
  return createPortal(
    <section style={{ position: "absolute", bottom: 10, right: 0 }}>
      {copied && (
        <div
          style={{
            backgroundColor: "#333",
            padding: "10px 20px",
            borderRadius: "5px",
          }}
        >
          Copied to clipboard!
        </div>
      )}
    </section>,
    document.querySelector("#popup-content")
  );
};

export default PopupContent;
