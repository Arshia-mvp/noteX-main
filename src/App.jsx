import { useEffect, useState } from "react";
import NoteBook from "./components/NoteBook/NoteBook";
import Sidebar from "./components/Sidebar/Sidebar";
import ViewNotes from "./components/ViewNotes/ViewNotes";

function App() {
  let [notes, setNotes] = useState(() => {
    let saved = localStorage.getItem("notes");
    if (saved) {
      return JSON.parse(saved);
    }
    return [
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
    ];
  });

  let [selectNotes, setSelectNotes] = useState(null);
  let [searchBox, setSearchBox] = useState("");
  let [theme, setTheme] = useState("light");

  let searchBoxNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchBox.toLowerCase()),
  );

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  let saveNote = (savedNote) => {
    let newNote = notes.map((singleNote) =>
      singleNote.id === savedNote.id ? savedNote : singleNote,
    );
    setNotes(newNote);
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
  };

  let createNoteHandeler = () => {
    let now = new Date();
    let newNote = {
      id: Date.now(),
      title: "یادداشت جدید",
      snippet: "",
      category: "جدید ها",
      date: new Intl.DateTimeFormat("fa-IR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        calendar: "persian",
      }).format(now),
    };
    setNotes([newNote, ...notes]);
    setSelectNotes(newNote.id);
  };

  return (
    <div
      className={`w-[100vw] flex justify-center ${theme === "dark" ? "bg-gray-900" : "bg-gray-100"}`}
    >
      <div className="flex w-full h-screen overflow-hidden">
        <Sidebar theme={theme} setTheme={setTheme} />
        <NoteBook
          notes={searchBoxNotes}
          onSelect={handleSelect}
          selectNotes={selectNotes}
          onCreate={createNoteHandeler}
          setSearchBox={setSearchBox}
          searchBox={searchBox}
          theme={theme}
          setTheme={setTheme}
        />
        <ViewNotes
          note={selectNote}
          key={selectNotes}
          onSave={saveNote}
          onDelete={deleteNoteHandeler}
          theme={theme}
          setTheme={setTheme}
        />
      </div>
    </div>
  );
}

export default App;
