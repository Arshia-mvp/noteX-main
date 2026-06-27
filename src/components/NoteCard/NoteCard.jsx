function NoteCard({ note, onSelect, isActive, theme }) {
  if (!note) return null;

  return (
    <div onClick={onSelect}>
      <div className="flex flex-col gap-4">
        <div
          className={`${
            isActive
              ? "card-idea w-full min-w-0 min-h-[29vh] mt-[20px] rounded-3xl shadow-2xl shadow-indigo-700 p-6 bg-indigo-900 border-4 border-indigo-500 transition-all relative"
              : `card-idea w-full min-w-0 min-h-[26vh] mt-[15px] rounded-2xl shadow-lg p-5.5 relative ${theme === "dark" ? "bg-gray-800 shadow-xl shadow-gray-600" : "bg-sky-200 shadow-sky-400"}`
          }`}
        >
          <div
            className={`${isActive ? "w-[17%] h-[5vh] bg-cyan-400 border-4 border-blue-600 shadow-lg shadow-sky-400 rounded-2xl flex items-center justify-center" : "w-[17%] h-[5vh] bg-gray-500 rounded-2xl flex items-center justify-center"}`}
          >
            <p
              className={`${isActive ? "font-bold text-cyan-900" : "text-black text-sm ml-1"} ${theme === "dark" ? "text-white" : "text-black"} `}
            >
              {note.category}
            </p>
          </div>
          <p
            className={`${
              isActive
                ? "text-white text-lg font-mono font-bold break-words"
                : "text-black font-medium mt-4 break-words"
            } ${theme === "dark" ? "text-white" : "text-black"} `}
          >
            {note.title}
          </p>

          <p
            className={`${
              isActive
                ? "text-gray-400 font-mono font-bold break-words"
                : "text-gray-500 font-normal break-words"
            } ${theme === "dark" ? "text-gray-300" : "text-gray-500"} `}
          >
            {note.snippet}
          </p>

          <p
            className={`${
              isActive
                ? "text-gray-400 font-bold mt-2"
                : "text-gray-500 font-medium mt-2 text-sm"
            } ${theme === "dark" ? "text-slate-400" : "text-gray-500"} `}
          >
            {note.date}
          </p>
        </div>
      </div>
    </div>
  );
}

export default NoteCard;
