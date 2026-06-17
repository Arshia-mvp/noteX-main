import { useState } from "react";
import NoteBook from "./components/NoteBook/NoteBook";
import Sidebar from "./components/Sidebar/Sidebar";
import ViewNotes from "./components/ViewNotes/ViewNotes";
import NoteCard from "./components/NoteCard/NoteCard";
import NoteList from "./components/NoteList/NoteList";

function App() {
  let [notes, setNotes] = useState([
    {
      id: 1,
      title: "ایده پروژه",
      snippet: "ساخت یک اپلیکیشن مدیریت یادداشت با React و Tailwind",
      content: "متن کامل یادداشت...",
      category: "ایده",
      date: "1403/09/12",
      isPinned: true,
    },
    {
      id: 2,
      title: "مطالب کلاس",
      snippet: "آموزش State و Props در React",
      content: "جزئیات یادداشت...",
      category: "آموزش",
      date: "1403/09/10",
      isPinned: false,
    },
    {
      id: 3,
      title: "لیست کارها",
      snippet: "آماده سازی تمرین برای دانشجو ها",
      content: "جزئیات یادداشت...",
      category: "کار",
      date: "1403/09/9",
      isPinned: false,
    },
  ]);

  let [selectNotes, setSelectNotes] = useState([0]);

  let saveNote = (savedNote) => {
    let newNotes = notes.map((singleNote) =>
      singleNote.id === savedNote.id ? savedNote : singleNote,
    );
    setNotes(() => newNotes);
  };

  let noteDelete = (id) => {
    let newNote = notes.filter((singleNote) => singleNote.id !== id);
    setNotes(newNote);
    if (selectNotes?.id === id) {
      if (newNote.length > 0) {
        setSelectNotes(newNote[0]);
      }
    }
  };

  return (
    <div className="w-[100vw] bg-gray-100 flex justify-center">
      <div className="flex w-full h-screen overflow-hidden">
        <Sidebar />
        <NoteBook
          notes={notes}
          onSelect={setSelectNotes}
          selectNotes={selectNotes}
        />
        <ViewNotes
          note={selectNotes}
          key={selectNotes?.id}
          onSave={saveNote}
          onDelete={noteDelete}
        />
      </div>
    </div>
  );
}

export default App;
