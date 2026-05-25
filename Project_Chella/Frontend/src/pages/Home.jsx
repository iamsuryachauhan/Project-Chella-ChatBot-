import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ChatWindow from "../components/ChatWindow";
import InputBox from "../components/InputBox";

import api from "../services/api";

const Home = () => {
  const [messages, setMessages] = useState([]);

  const [isTyping, setIsTyping] = useState(false);

  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Streaming UI effect
  const streamMessage = (fullText) => {
    let index = 0;

    setMessages((prev) => [
      ...prev,
      {
        text: "",
        sender: "ai",
      },
    ]);

    const interval = setInterval(() => {
        index++;

        setMessages((prev) => {
          const updated = [...prev,];

          updated[updated.length - 1].text = fullText.slice(0,index);

          return updated;
        });

        if (index === fullText.length) {
          clearInterval(interval);

          setIsTyping(false);
        }
      }, 20);
  };

  const handleSendMessage =
    async (text) => {
      if (!text.trim())
        return;

      // Add user message
      setMessages((prev) => [...prev,
        {
          text,
          sender: "user",
        },
      ]);

      setIsTyping(true);

      try {
        const response = await api.post
          ("/chat/",
            {
              message: text,
            }
          );

        const aiText = response.data.response;
            

        streamMessage(aiText);
      } catch (error) {
        console.error(error);

        setMessages((prev) => [
          ...prev,
          {
            text:
              "Backend connection failed ❌",
            sender: "ai",
          },
        ]);

        setIsTyping(false);
      }
    };

  return (
    <div className="h-screen flex bg-zinc-950 text-white overflow-hidden">

      <Sidebar
        sidebarOpen={
          sidebarOpen
        }
      />

      <div className="flex flex-col flex-1">

        <Navbar
          sidebarOpen={
            sidebarOpen
          }
          setSidebarOpen={
            setSidebarOpen
          }
        />

        <ChatWindow
          messages={
            messages
          }
          isTyping={
            isTyping
          }
          onSuggestionClick={
            handleSendMessage
          }
        />

        <InputBox
          onSend={
            handleSendMessage
          }
        />

      </div>
    </div>
  );
};

export default Home;