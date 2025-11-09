export interface List {
  name: string;
  emoji: string;
}

export interface Workspace {
  name: string;
  emoji: string;
}

export interface Todo {
  text: string;
  list: string;
  workspace: string;
}

export interface AppState {
  lists: List[];
  workspaces: Workspace[];
  todos: Todo[];
  editIndex: number | null;
  editText: string;
  dropdownIndex: number | null;
  isListModalOpen: boolean;
  isWorkspaceModalOpen: boolean;
  selectedList: string;
  selectedWorkspace: string;
  todoText: string;
  modalName: string;
  modalEmoji: string;
  modalType: "List" | "Workspace" | null;
  addList: (name: string, emoji: string) => void;
  addWorkspace: (name: string, emoji: string) => void;
  addTodo: (todo: Todo) => void;
  updateTodo: (index: number, updatedTodo: Todo) => void;
  deleteTodo: (index: number) => void;
  handleEdit: (index: number) => void;
  handleUpdate: (index: number) => void;
  handleDropdownClick: (index: number) => void;
  setEditText: (text: string) => void;
  setEditIndex: (index: number | null) => void;
  openListModal: () => void;
  closeListModal: () => void;
  openWorkspaceModal: () => void;
  closeWorkspaceModal: () => void;
  setSelectedList: (list: string) => void;
  setSelectedWorkspace: (workspace: string) => void;
  setTodoText: (text: string) => void;
  handleAddTodo: () => void;
  setModalName: (name: string) => void;
  setModalEmoji: (emoji: string) => void;
  setModalType: (type: "List" | "Workspace") => void;
  handleSaveModal: () => void;
}
