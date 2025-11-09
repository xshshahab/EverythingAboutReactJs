import { create } from "zustand";
import type { AppState } from "./types/storeType";

export const useStore = create<AppState>((set) => ({
  lists: [],
  workspaces: [],
  todos: [],
  editIndex: null,
  editText: "",
  dropdownIndex: null,
  isListModalOpen: false,
  isWorkspaceModalOpen: false,
  selectedList: "",
  selectedWorkspace: "",
  todoText: "",
  modalName: "",
  modalEmoji: "",
  modalType: null,
  addList: (name, emoji) =>
    set((state) => ({
      lists: [...state.lists, { name, emoji }],
    })),
  addWorkspace: (name, emoji) =>
    set((state) => ({
      workspaces: [...state.workspaces, { name, emoji }],
    })),
  addTodo: (todo) =>
    set((state) => ({
      todos: [...state.todos, todo],
    })),
  updateTodo: (index, updatedTodo) =>
    set((state) => {
      const newTodos = [...state.todos];
      newTodos[index] = updatedTodo;
      return {
        todos: newTodos,
        editIndex: null,
        editText: "",
      };
    }),
  deleteTodo: (index) =>
    set((state) => ({
      todos: state.todos.filter((_, i) => i !== index),
      dropdownIndex: null,
    })),
  handleEdit: (index) =>
    set((state) => ({
      editIndex: index,
      editText: state.todos[index].text,
      dropdownIndex: null,
    })),
  handleUpdate: (index) =>
    set((state) => {
      const updatedTodo = {
        ...state.todos[index],
        text: state.editText,
      };
      const newTodos = [...state.todos];
      newTodos[index] = updatedTodo;
      return {
        todos: newTodos,
        editIndex: null,
        editText: "",
      };
    }),
  handleDropdownClick: (index) =>
    set((state) => ({
      dropdownIndex: index === state.dropdownIndex ? null : index,
    })),
  setEditText: (text) => set({ editText: text }),
  setEditIndex: (index) => set({ editIndex: index }),
  openListModal: () => set({ isListModalOpen: true, modalType: "List" }),
  closeListModal: () =>
    set({ isListModalOpen: false, modalName: "", modalEmoji: "" }),
  openWorkspaceModal: () =>
    set({ isWorkspaceModalOpen: true, modalType: "Workspace" }),
  closeWorkspaceModal: () =>
    set({ isWorkspaceModalOpen: false, modalName: "", modalEmoji: "" }),
  setSelectedList: (list) => set({ selectedList: list }),
  setSelectedWorkspace: (workspace) => set({ selectedWorkspace: workspace }),
  setTodoText: (text) => set({ todoText: text }),
  handleAddTodo: () =>
    set((state) => {
      const { todoText, selectedList, selectedWorkspace } = state;
      if (todoText.trim() === "") {
        alert("Todo cannot be empty");
        return state;
      }
      const newTodo = {
        text: todoText,
        list: selectedList,
        workspace: selectedWorkspace,
      };
      return {
        todos: [...state.todos, newTodo],
        todoText: "",
        selectedList: "",
        selectedWorkspace: "",
      };
    }),
  setModalName: (name) => set({ modalName: name }),
  setModalEmoji: (emoji) => set({ modalEmoji: emoji }),
  setModalType: (type) => set({ modalType: type }),
  handleSaveModal: () =>
    set((state) => {
      const { modalName, modalEmoji, modalType } = state;
      if (modalName.trim() === "") return state;

      if (modalType === "List") {
        state.addList(modalName, modalEmoji);
      } else if (modalType === "Workspace") {
        state.addWorkspace(modalName, modalEmoji);
      }

      return {
        modalName: "",
        modalEmoji: "",
        modalType: null,
        isListModalOpen: false,
        isWorkspaceModalOpen: false,
      };
    }),
}));
