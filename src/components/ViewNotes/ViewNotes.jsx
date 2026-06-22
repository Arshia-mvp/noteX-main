import { useEffect, useState } from "react";

function ViewNotes({ note, onSave, onDelete }) {
  let [title, setTitle] = useState(note?.title);
  let [snippet, setSnippet] = useState(note?.snippet);
  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setSnippet(note.snippet);
    }
  }, [note]);
  let handelSave = () => {
    let savedNote = {
      ...note,
      title,
      snippet,
    };
    onSave(savedNote);
  };
  let deleteHandeler = () => {
    onDelete(note.id);
  };

  if (!note) {
    return (
      <div className="flex w-[37%] h-screen px-4 flex-shrink-0 items-center justify-center">
        <p className="text-gray-400 font-medium text-xl">متاسفانه هیچ یادداشتی وجود ندارد 😒 ، لطفا یک یادداشتی را انتخاب کنید یا یک یادداشت <br /> جدید ایجاد کنید 😃 </p>
      </div>
    );
  }

  return (
    <div className="flex w-[37%] h-screen px-4 flex-shrink-0">
      <div className="card-view-notes w-[95%] h-[98vh] bg-sky-100 shadow-2xl shadow-sky-400 rounded-3xl p-6 flex flex-col">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-gray-500 font-normal">مشاهده یادداشت</p>
            <p className="text-gray-500 font-normal text-sm">
              دسته بندی : {note.category} <br /> تاریخ : {note.date}
            </p>
            <p className="w-[14vw] h-[10vh] bg-white border-9 border-green-900 rounded-2xl pt-1 pr-2 overflow-y-scroll text-2xl font-medium text-black break-all">{note.title}</p>
            <p className="text-gray-500 font-normal text-sm"></p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handelSave}
              className="w-[8vw] h-[8vh] bg-sky-800 rounded-2xl flex items-center justify-center"
            >
              <p className="text-white font-medium text-lg">ذخیره</p>
            </button>
            <button
              onClick={deleteHandeler}
              className="w-[8vw] h-[8vh] bg-red-200 rounded-2xl flex items-center justify-center"
            >
              <p className="text-red-500 font-medium text-lg">حذف</p>
            </button>
          </div>
        </div>
        <textarea
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-[100%] h-[9.9vh] bg-white rounded-2xl p-4 border-2 border-green-900 mt-6 text-green-900 font-medium shadow-2xl shadow-sky-500"
        />
        <textarea
          value={snippet}
          onChange={(e) => setSnippet(e.target.value)}
          className="flex-grow bg-white rounded-2xl border-2 border-green-900 mt-4 p-4 text-green-900 font-medium shadow-2xl shadow-sky-500"
          type="text"
        />
      </div>
    </div>
  );
}

export default ViewNotes;
