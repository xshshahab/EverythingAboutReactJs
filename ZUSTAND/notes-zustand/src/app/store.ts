import { create } from "zustand";
import type { NotesState } from "./types/notes";

export const useNotesStore = create<NotesState>((set) => ({
  notes: [],
  search: "",
  editorContent: "",
  noteColor: "#fff",
  currentNoteIndex: null,
  setNotes: (updatedNotes) => set(() => ({ notes: updatedNotes })),
  setSearch: (searchValue) => set(() => ({ search: searchValue })),
  setEditorContent: (content) => set(() => ({ editorContent: content })),
  setNoteColor: (color) => set(() => ({ noteColor: color })),
  setCurrentNoteIndex: (index) => set(() => ({ currentNoteIndex: index })),
  addOrUpdateNote: () =>
    set((state) => {
      const { editorContent, noteColor, currentNoteIndex, notes } = state;

      if (editorContent.trim()) {
        if (currentNoteIndex !== null) {
          const updatedNotes = [...notes];
          updatedNotes[currentNoteIndex] = {
            text: editorContent,
            color: noteColor,
          };
          return {
            notes: updatedNotes,
            editorContent: "",
            noteColor: "#fff",
            currentNoteIndex: null,
          };
        } else {
          return {
            notes: [...notes, { text: editorContent, color: noteColor }],
            editorContent: "",
            noteColor: "#fff",
            currentNoteIndex: null,
          };
        }
      }
      return state;
    }),
  selectNote: (index) =>
    set((state) => ({
      currentNoteIndex: index,
      editorContent: state.notes[index].text,
      noteColor: state.notes[index].color,
    })),
}));
