const TypingIndicator = () => {
  return (
    <div className="flex justify-start">
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl rounded-bl-md px-5 py-4 flex items-center gap-2">

        <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce"></div>

        <div
          className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce"
          style={{ animationDelay: "0.1s" }}
        ></div>

        <div
          className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></div>

      </div>
    </div>
  );
};

export default TypingIndicator;