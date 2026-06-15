import NoteCard from "../NoteCard/NoteCard";

function NoteList ({notes , onSelect , selectNotes}) {
    return (
        <div className="overflow-y-scroll">
            <div className="card-notes w-[100%] h-[108vh] flex-grow bg-sky-100 rounded-3xl shadow-2xl shadow-sky-400 p-6">
                <div className="flex justify-between items-center mb-6">
                    <p className="text-black font-medium text-xl">یادداشت ها</p>
                    <button className="w-[9vw] h-[7vh] rounded-2xl bg-sky-800 flex items-center justify-center">
                        <span className="text-white font-medium text-lg">+ جدید</span>
                    </button>
                </div>
                {notes.map((note) => (
                    <NoteCard key={note.id} note={note} onSelect={() => onSelect(note)} isActive={selectNotes?.id === note.id} />
                ))}
            </div>
        </div>
    );
}

export default NoteList;