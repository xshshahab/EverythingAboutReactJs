import Sidebar from "./components/sidebar/Sidebar";
import MainArea from "./components/main/MainArea";
import { useStore } from "./app/store";
import { Edit, EllipsisVertical, X } from "lucide-react";
import Modal from "./components/Modal";

const App = () => {
  const {
    todos,
    editIndex,
    setEditIndex,
    editText,
    dropdownIndex,
    handleEdit,
    handleUpdate,
    handleDropdownClick,
    deleteTodo,
    setEditText,
  } = useStore();

  return (
    <div className="flex h-screen bg-[#fafafa] text-[#111]">
      <Sidebar />

      <div className="flex-1 p-10 overflow-y-auto">
        <MainArea />

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-6">Your Todos</h2>

          <ul className="space-y-3">
            {todos.map((todo, index) => (
              <li key={index}>
                {editIndex === index ? (
                  <div className="flex items-center gap-3">
                    <input
                      type="text"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      className="border border-gray-300 rounded-lg px-3 py-2 w-64 focus:outline-none"
                    />

                    <button
                      onClick={() => handleUpdate(index)}
                      className="px-4 py-2 bg-black text-white rounded-lg flex items-center gap-1"
                    >
                      <Edit size={16} /> Update
                    </button>

                    <button
                      onClick={() => setEditIndex(null)}
                      className="px-4 py-2 bg-gray-200 text-black rounded-lg flex items-center gap-1"
                    >
                      <X size={16} /> Cancel
                    </button>
                  </div>
                ) : (
                  <div className="bg-white shadow-sm rounded-xl p-4 flex justify-between items-center border border-gray-100 relative">
                    <div>
                      <strong className="text-lg">{todo.text}</strong>
                      <p className="text-gray-500 text-xs mt-1">
                        List: {todo.list} • Workspace: {todo.workspace}
                      </p>
                    </div>

                    <EllipsisVertical
                      className="cursor-pointer"
                      onClick={() => handleDropdownClick(index)}
                    />

                    {dropdownIndex === index && (
                      <div className="absolute z-20 right-4 top-12 bg-white border shadow-lg rounded-lg w-32 text-sm animate-fadeIn">
                        <button
                          onClick={() => handleEdit(index)}
                          className="px-4 py-2 w-full text-left hover:bg-gray-100"
                        >
                          Update
                        </button>
                        <button
                          onClick={() => deleteTodo(index)}
                          className="px-4 py-2 w-full text-left text-red-500 hover:bg-gray-100"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Modal />
    </div>
  );
};

export default App;
