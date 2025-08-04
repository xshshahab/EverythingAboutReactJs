import React from "react";
import { createPortal } from "react-dom";

const PopupContent = ({ copied }) => {
    return createPortal(
        <section>
            {copied && (
                <div
                    style={{
                        position: "absolute",
                        top: "1rem",
                        right: "2rem",
                        backgroundColor: "#101010",
                        color: "orange",
                        padding: "10px 20px",
                        borderRadius: "5px",
                        fontSize: "16px",
                        fontWeight: "bold",
                        display: "flex",
                        gap: "8px",
                        border: "1px solid orangered"
                    }}
                >
                    ✔ Copied to clipboard
                </div>
            )}
        </section>,
        document.getElementById("popup-content")
    );
};

export default PopupContent;
