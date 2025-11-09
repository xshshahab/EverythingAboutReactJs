import React from "react";

import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { useNotesStore } from "./app/store";
import Sidebar from "./components/Sidebar";

const App: React.FC = () => {
  const {
    currentNoteIndex,
    editorContent,
    noteColor,
    setNoteColor,
    setEditorContent,
    addOrUpdateNote,
  } = useNotesStore();

  return (
    <div className="w-full flex h-screen bg-amber-100">
      <Sidebar />

      <div className="flex flex-col w-2/3 p-8">
        <h1 className="text-2xl font-bold text-amber-800 mb-6">
          {currentNoteIndex !== null ? "Edit Note" : "New Note"}
        </h1>

        <ReactQuill
          value={editorContent}
          onChange={setEditorContent}
          placeholder="Write your note here..."
          theme="snow"
          className="h-96 bg-white rounded-lg shadow-md mb-6"
        />

        <div className="flex items-center gap-3 mt-10 mb-6">
          <input
            type="color"
            id="noteColor"
            value={noteColor}
            onChange={(e) => setNoteColor(e.target.value)}
            className="w-10 h-10 cursor-pointer border-0 rounded-full shadow-sm"
          />
          <p className="text-gray-700 font-medium">Choose a note color</p>
        </div>

        <button
          onClick={addOrUpdateNote}
          className="self-start px-6 py-2 rounded-md bg-amber-600 text-white font-semibold hover:bg-amber-700 transition"
        >
          {currentNoteIndex !== null ? "Update Note" : "Save Note"}
        </button>
      </div>
    </div>
  );
};

export default App;
