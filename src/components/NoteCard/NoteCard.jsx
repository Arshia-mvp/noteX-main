function NoteCard({ note, onSelect, isActive }) {
  return (
    <div onClick={onSelect}>
      <div className="flex flex-col gap-4">
        <div
          className={`${isActive ? "card-idea w-[99.5%] h-[28vh] mt-[20px] rounded-3xl shadow-2xl shadow-indigo-700 p-6 bg-indigo-900 border-4 border-indigo-500 transition-all relative" : "card-idea w-[99.5%] h-[27vh] mt-[15px] rounded-2xl shadow-lg shadow-sky-400 p-5.5 bg-sky-200 relative"}`}
        >
          <div
            className={`${isActive ? "w-[17%] h-[5vh] bg-cyan-400 border-4 border-blue-600 shadow-lg shadow-sky-400 rounded-2xl flex items-center justify-center" : "w-[17%] h-[5vh] bg-gray-400 rounded-2xl flex items-center justify-center"}`}
          >
            <p
              className={`${isActive ? "font-bold text-cyan-900" : "text-black text-sm ml-1"}`}
            >
              {note.category}
            </p>
          </div>
          <p
            className={`${isActive ? "text-white text-lg font-mono font-bold" : "text-black font-medium mt-4"}`}
          >
            {note.title}
          </p>
          <p
            className={`${isActive ? "text-gray-400 font-mono font-bold" : "text-gray-500 font-normal"}`}
          >
            {note.snippet}
          </p>
          <p
            className={`${isActive ? "text-gray-400 font-mono font-bold" : "text-gray-500 font-normal mt-2 text-sm"}`}
          >
            {note.date}
          </p>
        </div>
      </div>
    </div>
  );
}

export default NoteCard;
