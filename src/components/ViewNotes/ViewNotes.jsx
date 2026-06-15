import { useState } from "react";

function ViewNotes ({note}) {
    let [title , setTitle] = useState(note.title);
    let [snippet , setSnippet] = useState(note.snippet);
    let [category , setCategory] = useState(note.title);
    let [date , setDate] = useState(note.date);
    return (
        <div className="flex w-[37%] h-screen px-4 flex-shrink-0">
            <div className="card-view-notes w-[95%] h-[98vh] bg-sky-100 shadow-2xl shadow-sky-400 rounded-3xl p-6 flex flex-col">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-gray-500 font-normal">مشاهده یادداشت</p>
                        <h3 className="text-black font-bold text-2xl">{note.title}</h3>
                        <p className="text-gray-500 font-normal text-sm">دسته بندی : {note.category} <br /> تاریخ : {note.date}</p>
                        <p className="text-gray-500 font-normal text-sm"></p>
                    </div>
                    <div className="flex gap-2">
                        <button className="w-[8vw] h-[8vh] bg-sky-800 rounded-2xl flex items-center justify-center">
                            <p className="text-white font-medium text-lg">ذخیره</p>
                        </button>
                        <button className="w-[8vw] h-[8vh] bg-red-200 rounded-2xl flex items-center justify-center">
                            <p className="text-red-500 font-medium text-lg">حذف</p>
                        </button>
                    </div>
                </div>

                <input value={title} onChange={(e) => setTitle(e.target.value)} className="w-[100%] h-[8vh] bg-white rounded-2xl p-4 border-2 border-green-900 mt-6 text-green-900 font-medium shadow-2xl shadow-sky-500" type="text" />
                <textarea value={snippet} onChange={(e) => setSnippet(e.target.value)}  className="flex-grow bg-white rounded-2xl border-2 border-green-900 mt-4 p-4 text-green-900 font-medium shadow-2xl shadow-sky-500" type="text" />
            </div>
        </div>
    )
}

export default ViewNotes;