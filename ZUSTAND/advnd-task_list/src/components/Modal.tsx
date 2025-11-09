import { useStore } from "../app/store";
import { X } from "lucide-react";

const Modal = () => {
  const {
    isListModalOpen,
    isWorkspaceModalOpen,
    modalName,
    modalType,
    modalEmoji,
    setModalName,
    setModalEmoji,
    handleSaveModal,
    closeListModal,
    closeWorkspaceModal,
  } = useStore();

  const close = () => {
    modalType === "List" ? closeListModal() : closeWorkspaceModal();
  };

  if (!isListModalOpen && !isWorkspaceModalOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white p-6 rounded-xl w-80 shadow-lg animate-fadeIn">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Create {modalType}</h2>
          <button onClick={close}>
            <X />
          </button>
        </div>

        <input
          type="text"
          placeholder={`Enter ${modalType} name`}
          value={modalName}
          onChange={(e) => setModalName(e.target.value)}
          className="border w-full rounded-lg px-3 py-2 mb-3"
        />

        <input
          type="text"
          placeholder="Emoji (optional)"
          value={modalEmoji}
          onChange={(e) => setModalEmoji(e.target.value)}
          className="border w-full rounded-lg px-3 py-2 mb-3"
        />

        <button
          onClick={handleSaveModal}
          className="w-full py-2 bg-black text-white rounded-lg"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Modal;
