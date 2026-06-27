import NoteCard from "../NoteCard/NoteCard";

function NoteList({
  notes,
  onSelect,
  selectNotes,
  onCreate,
  theme,
}) {
  return (
    <div
      className={`card-notes w-full h-full rounded-3xl shadow-2xl p-6 flex flex-col overflow-hidden ${
        theme === "dark"
          ? "bg-gray-900 shadow-gray-700"
          : "bg-sky-100 shadow-sky-400"
      }`}
    >
      <div className="flex justify-between items-center mb-6 flex-shrink-0">
        <p
          className={`font-medium text-xl ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          یادداشت ها
        </p>

        <button
          onClick={onCreate}
          className="w-[9vw] h-[7vh] rounded-2xl bg-sky-800 flex items-center justify-center"
        >
          <span className="text-white font-medium text-lg">+ جدید</span>
        </button>
      </div>

      <div className="flex-grow overflow-y-auto">
        {notes.length === 0 ? (
          <p className="text-gray-500 text-2xl font-mono font-bold flex items-center justify-center mt-40">
            متاسفانه یادداشتی وجود ندارد 😒
          </p>
        ) : (
          notes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              isActive={selectNotes === note.id}
              onSelect={() => onSelect(note)}
              theme={theme}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default NoteList;