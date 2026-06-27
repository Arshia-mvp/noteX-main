import { useEffect, useState } from "react";

function ViewNotes({ note, onSave, onDelete, theme, setTheme }) {
  let [title, setTitle] = useState(note?.title);
  let [snippet, setSnippet] = useState(note?.snippet);
  let [category, setCategory] = useState(note?.category);
  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setSnippet(note.snippet);
    }
  }, [note]);
  useEffect(() => {
    let savedNote = {
      ...note,
      category,
      title,
      snippet,
    };
    onSave(savedNote);
  }, [title, snippet, category]);
  let deleteHandeler = () => {
    onDelete(note.id);
  };

  if (!note) {
    return (
      <div className="flex w-[37%] h-screen px-4 flex-shrink-0 items-center justify-center">
        <p className="text-gray-400 font-medium text-xl">
          متاسفانه هیچ یادداشتی وجود ندارد 😒 ، لطفا یک یادداشتی را انتخاب کنید
          یا یک یادداشت <br /> جدید ایجاد کنید 😃{" "}
        </p>
      </div>
    );
  }

  return (
    <div
      className={`flex w-[37%] h-screen px-4 flex-shrink-0 ${theme === "dark" ? "bg-gray-800" : "bg-gray-200"}`}
    >
      <div
        className={`card-view-notes w-[95%] h-[98vh] rounded-3xl p-6 flex flex-col ${
          theme === "dark"
            ? "bg-gray-800 shadow-gray-600 shadow-2xl"
            : "bg-sky-100 shadow-sky-400 shadow-2xl"
        }`}
      >
        <div className="flex justify-between items-start">
          <div>
            <p className={`text-gray-500 font-normal ${theme === "dark" ? "text-slate-300" : "text-gray-500"}`}>مشاهده یادداشت</p>
            <p className={`text-gray-500 font-normal text-sm ${theme === "dark" ? "text-slate-300" : "text-gray-500"}`}>
              دسته بندی : {note.category} <br /> تاریخ : {note.date}
            </p>
            <p className={`w-[13vw] h-[10vh] bg-white border-9 border-gray-950 rounded-2xl pt-1 pr-2 overflow-y-scroll text-2xl font-medium text-black break-all ${theme === "dark" ? "shadow-2xl shadow-sky-400" : ""}`}>
              {note.title}
            </p>
            <p className="text-gray-500 font-normal text-sm"></p>
          </div>
          <div className="flex gap-2">
            <div className="flex justify-center items-center">
              <select
                onChange={(e) => setCategory(e.target.value)}
                className="w-[8.5vw] h-[8vh] pr-5 text-green-400 font-bold border-6 border-indigo-500 shadow-xl shadow-indigo-700 rounded-xl bg-indigo-900 appearance-none cursor-pointer"
                value={category}
              >
                <option className="font-bold bg-indigo-900 text-green-400">
                  ایده
                </option>
                <option className="font-bold bg-black text-white">عمومی</option>
                <option className="font-bold bg-gray-600 text-yellow-400">
                  کار
                </option>
                <option className="font-bold bg-indigo-900 text-green-400">
                  کامپیوتری
                </option>
                <option className="font-bold bg-green-800 text-sky-400">
                  ورزشی
                </option>
                <option className="font-bold bg-red-700 text-fuchsia-400">
                  درسی
                </option>
                <option className="font-bold bg-cyan-700 text-sky-950">
                  جدید ها
                </option>
                <option className="font-bold bg-blue-800 text-orange-400">
                  آموزش
                </option>
                <option className="font-bold bg-indigo-900 text-green-400">
                  سایر
                </option>
              </select>
            </div>
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
          className={`w-[100%] h-[9.9vh] rounded-2xl p-4 mt-6 text-green-900 shadow-2xl shadow-sky-500 ${theme === "dark" ? "bg-gray-800 text-white font-medium border-2 border-gray-500" : "text-green-900 border-2 border-green-900 font-medium"}`}
        />

        <textarea
          value={snippet}
          onChange={(e) => setSnippet(e.target.value)}
          className={`flex-grow rounded-2xl mt-4 p-4 shadow-2xl shadow-sky-500 ${theme === "dark" ? "bg-gray-800 text-white font-medium border-2 border-gray-500" : "text-green-900 border-2 border-green-900 font-medium"}`}
          type="text"
        />
      </div>
    </div>
  );
}

export default ViewNotes;
