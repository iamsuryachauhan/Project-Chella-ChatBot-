import {
  FiMenu,
  FiCpu,
} from "react-icons/fi";

const Navbar = ({
  sidebarOpen,
  setSidebarOpen,
}) => {
  return (
    <div className="h-16 border-b border-zinc-800 bg-zinc-950 px-6 flex items-center justify-between">

      {/* Left */}
      <div className="flex items-center gap-4">

        {/* Toggle Button */}
        <button
          onClick={() =>
            setSidebarOpen(
              !sidebarOpen
            )
          }
          className="w-10 h-10 rounded-xl hover:bg-zinc-900 transition flex items-center justify-center"
        >
          <FiMenu size={20} />
        </button>

        <div>
          <h2 className="text-lg font-semibold">
            Chella Assistant
          </h2>

          <p className="text-sm text-zinc-500">
            Your intelligent AI
            companion
          </p>
        </div>

      </div>

      {/* Right */}
      <div className="bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-xl flex items-center gap-2">

        <FiCpu className="text-zinc-400" />

        <span className="text-sm text-zinc-300">
          GPT Powered
        </span>

      </div>
    </div>
  );
};

export default Navbar;