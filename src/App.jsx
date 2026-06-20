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

  let [selectNotes, setSelectNotes] = useState(null);

  let saveNote = (savedNote) => {
    let newNote = notes.map((singleNote) =>
      singleNote.id === savedNote.id ? savedNote : singleNote,
    );
    setNotes(() => newNote);
  };

  let deleteNoteHandeler = (id) => {
    let newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    if (selectNotes === id) {
      setSelectNotes(newNotes[0]?.id || null);
    }
  };

  let selectNote = notes.find((note) => note.id === selectNotes);

  let handleSelect = (note) => {
    setSelectNotes(note.id);
  }

  let createNoteHandeler = () => {
    let now = new Date();
    let newNote = {
      id : Date.now(),
      title : "یادداشت های جدید",
      snippet : "",
      category : "جدید ها",
      date : new Intl.DateTimeFormat("fa-IR-u-ca-rersian" , {
        year : "numeric",
        day : "2-digit",
        month : "2-digit",
      }).format(now),
    }
    let newNoteList = [newNote , ...notes];
    setNotes(newNoteList);

    setSelectNotes(newNote.id);
  }

  return (
    <div className="w-[100vw] bg-gray-100 flex justify-center">
      <div className="flex w-full h-screen overflow-hidden">
        <Sidebar />
        <NoteBook
          notes={notes}
          onSelect={handleSelect}
          selectNotes={selectNotes}
          onCreate={createNoteHandeler}
        />
        <ViewNotes
          note={selectNote}
          key={selectNotes}
          onSave={saveNote}
          onDelete={deleteNoteHandeler}
        />
      </div>
    </div>
  );
}

export default App;
