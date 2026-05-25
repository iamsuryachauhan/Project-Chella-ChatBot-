import {
  FiPlus,
  FiMessageSquare,
  FiSettings,
} from "react-icons/fi";

const Sidebar = ({
  sidebarOpen,
}) => {
  const chats = [
    "React chatbot",
    "Voice assistant",
    "FastAPI setup",
    "UI inspiration",
  ];

  return (
    <div
      className={`bg-zinc-950 border-r border-zinc-800 flex flex-col transition-all duration-300 ease-in-out ${
        sidebarOpen
          ? "w-72"
          : "w-0 overflow-hidden"
      }`}
    >
      {/* Logo */}
      <div className="h-16 border-b border-zinc-800 flex items-center px-6 shrink-0">

        <h1 className="text-2xl font-semibold tracking-wide whitespace-nowrap">
          Chella
        </h1>

      </div>

      {/* New Chat */}
      <div className="p-4">

        <button className="w-full bg-zinc-800 hover:bg-zinc-700 transition rounded-xl py-3 flex items-center justify-center gap-2 whitespace-nowrap">

          <FiPlus />

          New Chat

        </button>

      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto px-3">

        <p className="text-sm text-zinc-500 px-2 mb-3 whitespace-nowrap">
          Recent Chats
        </p>

        <div className="space-y-2">

          {chats.map(
            (chat, index) => (
              <button
                key={index}
                className="w-full text-left px-4 py-3 rounded-xl hover:bg-zinc-900 transition flex items-center gap-3 whitespace-nowrap"
              >
                <FiMessageSquare />

                <span className="truncate">
                  {chat}
                </span>
              </button>
            )
          )}

        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-zinc-800 p-4">

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-zinc-900 transition whitespace-nowrap">

          <FiSettings />

          Settings

        </button>

      </div>
    </div>
  );
};

export default Sidebar;