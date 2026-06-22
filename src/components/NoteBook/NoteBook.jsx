import NoteCard from "../NoteCard/NoteCard";
import NoteList from "../NoteList/NoteList";

function NoteBook({ notes, onSelect, selectNotes , onCreate , searchBox , setSearchBox }) {
  return (
    <div className="flex flex-col w-[41%] h-screen px-4 gap-8 flex-shrink-0">
      <div className="card-note-book w-full h-[16vh] bg-sky-100 shadow-lg shadow-sky-400 rounded-3xl p-6 flex justify-between items-center">
        <div>
          <p className="text-black font-bold text-2xl">دفترچه یادداشت</p>
          <p className="text-gray-500 font-normal">مدیریت یادداشت ها</p>
        </div>
        <input
          className="w-[38%] h-[8vh] bg-white rounded-2xl p-4 text-green-900 font-medium border-2 border-green-900 shadow-2xl shadow-sky-500"
          type="text"
          placeholder="جستجو..."
          onChange={(e) => setSearchBox(e.target.value)}
          value={searchBox}
        />
      </div>
      <NoteList notes={notes} onSelect={onSelect} selectNotes={selectNotes} onCreate={onCreate} />
    </div>
  );
}

export default NoteBook;
