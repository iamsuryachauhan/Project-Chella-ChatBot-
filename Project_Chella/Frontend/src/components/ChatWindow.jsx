import { useEffect, useRef } from "react";
import { FiMessageSquare } from "react-icons/fi";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";

const suggestions = [
  "Explain React Hooks",
  "Build a portfolio website",
  "Debug JavaScript code",
  "Create startup ideas",
];

const ChatWindow = ({
  messages,
  isTyping,
  onSuggestionClick,
}) => {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  const isEmpty =
    messages.length === 0;

  return (
    <div className="flex-1 overflow-y-auto bg-zinc-950 px-6 py-8">

      {isEmpty ? (
        <div className="h-full flex flex-col items-center justify-center text-center">

          <div className="w-20 h-20 rounded-3xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6">

            <FiMessageSquare className="text-4xl text-zinc-400" />

          </div>

          <h1 className="text-4xl font-bold mb-3">
            Welcome to Chella
          </h1>

          <p className="text-zinc-500 max-w-md mb-10">
            Ask anything, brainstorm ideas,
            or chat with your AI assistant.
          </p>

          {/* Suggestion Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">

            {suggestions.map(
              (item, index) => (
                <button
                  key={index}
                  onClick={() =>
                    onSuggestionClick(item)
                  }
                  className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 text-left hover:bg-zinc-800 transition hover:scale-[1.02]"
                >
                  <p className="font-medium">
                    {item}
                  </p>
                </button>
              )
            )}

          </div>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto space-y-8 pb-10">

          {messages.map(
            (msg, index) => (
              <MessageBubble
                key={index}
                message={msg.text}
                sender={msg.sender}
              />
            )
          )}

          {isTyping && (
            <TypingIndicator />
          )}

          <div ref={bottomRef} />

        </div>
      )}
    </div>
  );
};

export default ChatWindow;