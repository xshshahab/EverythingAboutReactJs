import React from "react";
import { useNotesStore } from "../app/store";
import { Search } from "lucide-react";

const Sidebar: React.FC = () => {
  const { notes, search, selectNote, setSearch } = useNotesStore();

  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-1/3 bg-white border-r border-amber-200 p-5 shadow-lg overflow-y-auto">
      <div className="flex items-center gap-2 mb-5 border-b pb-2">
        <Search className="text-amber-700" />
        <input
          type="text"
          placeholder="Search notes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 border-none outline-none text-gray-700 bg-transparent"
        />
      </div>

      <section className="space-y-3">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note, index) => (
            <div
              key={index}
              onClick={() => selectNote(index)}
              className="flex items-start gap-3 p-3 rounded-lg cursor-pointer hover:bg-amber-100 transition"
            >
              <div
                className="w-4 h-4 rounded-full shrink-0 mt-1"
                style={{ backgroundColor: note.color }}
              />
              <div
                className="truncate text-gray-800"
                dangerouslySetInnerHTML={{ __html: note.text }}
              ></div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 italic">No new notes</p>
        )}
      </section>
    </div>
  );
};

export default Sidebar;
