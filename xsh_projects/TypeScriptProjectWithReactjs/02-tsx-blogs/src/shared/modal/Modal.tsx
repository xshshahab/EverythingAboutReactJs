import React from "react";

const Modal: React.FC<{ children: React.ReactNode; onClose: () => void }> = ({
  children,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative p-4 bg-white rounded-lg shadow">
        {children}
        <button
          onClick={onClose}
          className="absolute text-gray-500 top-2 right-2"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default Modal;
