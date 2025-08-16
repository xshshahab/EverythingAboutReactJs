import { createPortal } from "react-dom";

const Modal = () => {
  const rootModal = document.querySelector("#modals");
  if (!rootModal) return null;

  return createPortal(
    <section className="absolute text-orange-300 bg-zinc-600 top-1/2 left-1/2 ">
      Modal Hu main
    </section>,
    rootModal
  );
};

export default Modal;
