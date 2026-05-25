"use client";
import axios from "axios";
import { useState } from "react";
import EmptySection from "./emptySection";

type Message = {
  role: string;
  content: string;
};

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState<string>();
  const [loading, setLoading] = useState<boolean>();

  const onSend = async () => {
    if (!userInput?.trim()) return;
    setUserInput("");
    const newMsg: Message = {
      role: "user",
      content: userInput,
    };
    setMessages((prev: Message[]) => [...prev, newMsg]);

    setLoading(true);
    const result = await axios.post("/api/aimodel", {
      messages: [...messages, newMsg],
    });
    setMessages((prev: Message[]) => [
      ...prev,
      {
        role: "assistant",
        content: result?.data?.resp,
      },
    ]);
    setLoading(false);
    console.log(result.data);
  };

  return (
    <div className="flex flex-col h-[85vh] max-w-3xl mx-auto px-4 ">
      {/* Display Message  */}

      <section className="flex-1 overflow-y-auto py-6 space-y-4">
        {/* When there is no message  */}
        {messages.length === 0 && (
          <EmptySection onSuggestionClick={(text) => setUserInput(text)} />
        )}

        {/* Message Render  */}
        {messages.map((msg: Message, index) => (
          <div
            key={index}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start gap-3"}`}
          >
            {msg.role === "assistant" && (
              <div className="w-8 h-8 bg-[#1a1a2e] rounded-full flex items-center justify-center shrink-0">
                <span className="text-white text-xs font-bold">A</span>
              </div>
            )}
            <div
              className={`text-sm px-4 py-2.5 max-w-sm ${
                msg.role === "user"
                  ? "bg-indigo-600 text-white rounded-2xl rounded-br-sm "
                  : "bg-gray-100 text-gray-700 rounded-2xl rounded-bl-sm"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {/* Loading State  */}

        {}
      </section>

      {/* User Input  */}
      <section className="pb-6">
        <div className="w-full  border border-gray-200 rounded-2xl p-4 shadow-sm bg-white flex flex-col gap-2">
          <textarea
            className="w-full h-20 resize-none bg-transparent border-none focus:ring-0 text-sm text-gray-700 placeholder:text-gray-400 outline-none"
            placeholder="Ask me anything about a trip..."
            onChange={(event) => setUserInput(event.target.value)}
            value={userInput}
          />
          <div className="flex items-center justify-between  border-t border-gray-100 pt-3 ">
            <span className="text-xs text-gray-400">
              Press Enter or Click Send
            </span>
            <button
              onClick={onSend}
              className="bg-[#1a1a2e] text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-[#2d2d4e] transition-all duration-150 cursor-pointer"
            >
              Send
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
