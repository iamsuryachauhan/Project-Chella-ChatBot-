import { useRef, useState } from "react";
import { FiMic, FiSend } from "react-icons/fi";

const InputBox = ({ onSend }) => {
  const [message, setMessage] = useState("");
  const textareaRef = useRef(null);

  const handleSend = () => {
    if (!message.trim()) return;

    onSend(message);
    setMessage("");

    // Reset height
    textareaRef.current.style.height = "auto";
  };

  const handleChange = (e) => {
    setMessage(e.target.value);

    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height =
      `${textareaRef.current.scrollHeight}px`;
  };

  const handleKeyDown = (e) => {
    if (
      e.key === "Enter" &&
      !e.shiftKey
    ) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="border-t border-zinc-800 bg-zinc-950 p-5">

      <div className="max-w-4xl mx-auto">

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-3 flex items-end gap-3 shadow-lg">

          {/* Textarea */}
          <textarea
            ref={textareaRef}
            rows={1}
            value={message}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Message Chella..."
            className="flex-1 bg-transparent outline-none resize-none text-white placeholder:text-zinc-500 px-3 py-2 max-h-40 overflow-y-auto"
          />

          {/* Voice */}
          <button className="w-11 h-11 rounded-full bg-zinc-800 hover:bg-zinc-700 transition flex items-center justify-center">

            <FiMic />

          </button>

          {/* Send */}
          <button
            onClick={handleSend}
            className="w-11 h-11 rounded-full bg-white text-black hover:scale-105 transition flex items-center justify-center"
          >
            <FiSend />
          </button>

        </div>

        <p className="text-center text-xs text-zinc-500 mt-3">
          Chella can make mistakes.
          Verify important information.
        </p>

      </div>
    </div>
  );
};

export default InputBox;