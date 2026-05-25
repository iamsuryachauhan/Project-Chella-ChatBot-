import { motion } from "framer-motion";

const MessageBubble = ({ message, sender }) => {
  const isUser = sender === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[80%] md:max-w-[75%] px-5 py-4 rounded-3xl text-[15px] leading-relaxed whitespace-pre-wrap ${
          isUser
            ? "bg-white text-black rounded-br-md"
            : "bg-zinc-900 text-white rounded-bl-md border border-zinc-800"
        }`}
      >
        {message}
      </div>
    </motion.div>
  );
};

export default MessageBubble;