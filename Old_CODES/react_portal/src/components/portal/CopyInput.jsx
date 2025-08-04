import React, { useState } from "react";
import PopupContent from "./PopupContent";

const CopyInput = () => {
    const [inputValue, setInputValue] = useState("");
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(inputValue).then(() => {
            setCopied(true);

            setTimeout(() => {
                setCopied(false);
            }, 1000);
        });
        setInputValue("");
    };

    return (
        <>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", margin: "20px" }}>
                <input
                    placeholder="Write to Copy anything..."
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    style={{
                        padding: "8px",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        fontSize: "16px",
                        background: "transparent",
                        color: "orange"
                    }}
                />
                <button
                    onClick={handleCopy}
                    style={{
                        backgroundColor: "orange",
                        color: "white",
                        border: "none",
                        padding: "10px 15px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "16px",
                    }}
                >
                    {copied ? "Copied!" : "Copy"}
                </button>

            </div>
            <div style={{ padding: "10px 20px" }}>
                <PopupContent copied={copied} />
            </div>
        </>
    );
};

export default CopyInput;
