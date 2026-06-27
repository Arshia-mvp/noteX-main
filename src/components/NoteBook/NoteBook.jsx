import NoteCard from "../NoteCard/NoteCard";
import NoteList from "../NoteList/NoteList";

function NoteBook({
  notes,
  onSelect,
  selectNotes,
  onCreate,
  searchBox,
  setSearchBox,
  theme,
  setTheme,
}) {
  return (
    <div
      className={`flex flex-col w-[41%] h-screen px-4 gap-8 flex-shrink-0 ${
        theme === "dark" ? "bg-gray-800" : "bg-gray-200"
      }`}
    >
      <div
        className={`card-note-book w-full h-[16vh] rounded-3xl p-6 flex justify-between items-center ${
          theme === "dark"
            ? "bg-gray-800 shadow-gray-700 shadow-lg"
            : "bg-sky-100 shadow-sky-400 shadow-lg"
        }`}
      >
        <button
          dir="ltr"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className={`relative w-16 h-8 flex items-center rounded-full p-1 transition-colors duration-300 ${
            theme === "light" ? "bg-slate-300" : "bg-gray-950"
          }`}
        >
          <div
            className={`w-6 h-6 flex items-center justify-center rounded-full shadow-md transform transition-transform duration-300 ${
              theme === "light"
                ? "translate-x-0 bg-yellow-400"
                : "translate-x-8 bg-gray-900"
            }`}
          >
            {theme === "light" ? (
              <span className="text-xs">☀️</span>
            ) : (
              <span className="text-xs">🌙</span>
            )}
          </div>
        </button>

        <div>
          <p
            className={`font-bold text-2xl ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            دفترچه یادداشت
          </p>

          <p
            className={`font-normal ${
              theme === "dark" ? "text-white" : "text-gray-500"
            }`}
          >
            مدیریت یادداشت ها
          </p>
        </div>

        <input
          className={`w-[38%] h-[8vh] rounded-2xl p-4 shadow-2xl shadow-sky-500 ${
            theme === "dark"
              ? "bg-gray-800 text-white font-medium border-2 border-gray-500"
              : "bg-white text-green-900 font-medium border-2 border-green-900"
          }`}
          type="text"
          placeholder="جستجو..."
          value={searchBox}
          onChange={(e) => setSearchBox(e.target.value)}
        />
      </div>

      <NoteList
        notes={notes}
        onSelect={onSelect}
        selectNotes={selectNotes}
        onCreate={onCreate}
        theme={theme}
        setTheme={setTheme}
      />
    </div>
  );
}

export default NoteBook;