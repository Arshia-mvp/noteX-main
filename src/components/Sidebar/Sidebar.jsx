function Sidebar() {
  return (
    <div className="w-[24%] h-screen bg-blue-950 flex-shrink-0 p-8 flex flex-col">
      <div className="flex items-center gap-4 mb-16">
        <div className="w-[64px] h-[64px] bg-purple-800 rounded-3xl flex items-center justify-center shrink-0">
          <p className="text-white text-2xl font-bold">N</p>
        </div>
        <div className="flex flex-col">
          <h6 className="text-white font-bold text-2xl leading-none">NoteX</h6>
          <p className="text-white/70 text-sm mt-1">React Notes</p>
        </div>
      </div>
      <nav className="flex flex-col gap-4">
        {[
          { label: "همه یادداشت ها", icon: "📝" },
          { label: "سنجاق شده", icon: "📌" },
          { label: "دسته بندی", icon: "🗂" },
        ].map((item, index) => (
          <a
            key={index}
            href="#"
            className="text-white text-xl flex items-center gap-3 hover:bg-cyan-800 p-4 rounded-2xl transition-all"
          >
            <span>{item.icon}</span>
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
