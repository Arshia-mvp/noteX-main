import { useEffect, useState } from "react";

function ViewNotes({ note, onSave, onDelete, theme }) {
  const [title, setTitle] = useState(note?.title || "");
  const [snippet, setSnippet] = useState(note?.snippet || "");
  const [category, setCategory] = useState(note?.category || "");

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setSnippet(note.snippet);
      setCategory(note.category);
    }
  }, [note]);

  useEffect(() => {
    if (!note) return;

    onSave({
      ...note,
      title,
      snippet,
      category,
    });
  }, [title, snippet, category]);

  const deleteHandeler = () => {
    onDelete(note.id);
  };

  if (!note) {
    return (
      <div className="flex w-[37%] h-screen px-4 flex-shrink-0 items-center justify-center">
        <p className="text-gray-400 font-medium text-xl">
          متاسفانه هیچ یادداشتی وجود ندارد 😒، لطفاً یک یادداشت را انتخاب کنید
          یا یک یادداشت جدید ایجاد کنید 😃
        </p>
      </div>
    );
  }

  return (
    <div
      className={`flex w-[37%] h-screen px-4 flex-shrink-0 ${
        theme === "dark" ? "bg-gray-800" : "bg-gray-200"
      }`}
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
            <p
              className={`font-normal ${
                theme === "dark" ? "text-slate-300" : "text-gray-500"
              }`}
            >
              مشاهده یادداشت
            </p>

            <p
              className={`font-normal text-sm ${
                theme === "dark" ? "text-slate-300" : "text-gray-500"
              }`}
            >
              دسته بندی : {category}
              <br />
              تاریخ : {note.date}
            </p>

            <p
              className={`w-[13vw] h-[10vh] bg-white rounded-2xl pt-1 pr-2 overflow-y-scroll text-2xl font-medium break-all ${
                theme === "dark"
                  ? "text-black shadow-2xl shadow-sky-400"
                  : "text-black border-4 border-green-900"
              }`}
            >
              {title}
            </p>
          </div>

          <div className="flex gap-2">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-[8.5vw] h-[8vh] pr-5 text-green-400 font-bold border-4 border-indigo-500 shadow-xl shadow-indigo-700 rounded-xl bg-indigo-900 appearance-none cursor-pointer"
            >
              <option>ایده</option>
              <option>عمومی</option>
              <option>کار</option>
              <option>کامپیوتری</option>
              <option>ورزشی</option>
              <option>درسی</option>
              <option>جدید ها</option>
              <option>آموزش</option>
              <option>سایر</option>
            </select>

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
          className={`w-full h-[10vh] rounded-2xl p-4 mt-6 ${
            theme === "dark"
              ? "bg-gray-800 text-white border-2 border-gray-500 shadow-2xl shadow-sky-500"
              : "bg-white text-green-900 border-2 border-green-900 shadow-2xl shadow-sky-500"
          }`}
        />

        <textarea
          value={snippet}
          onChange={(e) => setSnippet(e.target.value)}
          className={`flex-grow rounded-2xl mt-4 p-4 ${
            theme === "dark"
              ? "bg-gray-800 text-white border-2 border-gray-500 shadow-2xl shadow-sky-500"
              : "bg-white text-green-900 border-2 border-green-900 shadow-2xl shadow-sky-500"
          }`}
        />
      </div>
    </div>
  );
}

export default ViewNotes;
