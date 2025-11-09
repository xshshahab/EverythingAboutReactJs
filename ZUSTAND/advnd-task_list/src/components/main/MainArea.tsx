import { useStore } from "../../app/store";
import { Plus } from "lucide-react";

const MainArea = () => {
  const {
    lists,
    workspaces,
    selectedList,
    selectedWorkspace,
    todoText,
    setTodoText,
    setSelectedList,
    setSelectedWorkspace,
    handleAddTodo,
  } = useStore();

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <input
        type="text"
        placeholder="Add a new todo..."
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        className="border rounded-lg p-3 w-full mb-4"
      />

      <div className="flex items-center gap-4">
        <select
          value={selectedList}
          onChange={(e) => setSelectedList(e.target.value)}
          className="border rounded-lg p-2"
        >
          <option value="" disabled>
            Select List
          </option>
          {lists.map((list, i) => (
            <option key={i} value={list.name}>
              {list.emoji} {list.name}
            </option>
          ))}
        </select>

        <select
          value={selectedWorkspace}
          onChange={(e) => setSelectedWorkspace(e.target.value)}
          className="border rounded-lg p-2"
        >
          <option value="" disabled>
            Select Workspace
          </option>
          {workspaces.map((workspace, i) => (
            <option key={i} value={workspace.name}>
              {workspace.emoji} {workspace.name}
            </option>
          ))}
        </select>

        <button
          onClick={handleAddTodo}
          className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-1"
        >
          <Plus size={16} /> Add
        </button>
      </div>
    </div>
  );
};

export default MainArea;
