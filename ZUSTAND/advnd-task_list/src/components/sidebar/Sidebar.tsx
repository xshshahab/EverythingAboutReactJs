import { useStore } from "../../app/store";
import { Plus } from "lucide-react";

const Sidebar = () => {
  const { lists, workspaces, openListModal, openWorkspaceModal } = useStore();

  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-6 flex flex-col">
      <h3 className="text-lg font-semibold mb-3">Lists</h3>

      <ul className="space-y-2">
        {lists.map((list, index) => (
          <li
            key={index}
            className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer flex items-center gap-2"
          >
            <span>{list.emoji}</span> {list.name}
          </li>
        ))}
      </ul>

      <button
        onClick={openListModal}
        className="mt-4 px-4 py-2 bg-black text-white rounded-lg flex items-center justify-center gap-1"
      >
        <Plus size={16} /> New List
      </button>

      <h3 className="text-lg font-semibold mt-8 mb-3">Workspaces</h3>

      <ul className="space-y-2">
        {workspaces.map((workspace, index) => (
          <li
            key={index}
            className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer flex items-center gap-2"
          >
            <span>{workspace.emoji}</span> {workspace.name}
          </li>
        ))}
      </ul>

      <button
        onClick={openWorkspaceModal}
        className="mt-4 px-4 py-2 bg-black text-white rounded-lg flex items-center justify-center gap-1"
      >
        <Plus size={16} /> New Workspace
      </button>
    </aside>
  );
};

export default Sidebar;
