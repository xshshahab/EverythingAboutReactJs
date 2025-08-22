import React from "react";

const Modal: React.FC = () => {
  const openModal = () => {
    const modal = document.getElementById("my_modal_2") as HTMLDialogElement;
    modal?.showModal();
  };

  return (
    <div>
      {/* Open the modal using dialog API */}
      <button className="btn" onClick={openModal}>
        open modal
      </button>

      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Modal;
