"use client";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import EmptySection from "./emptySection";

type Message = {
  role: string;
  content: string;
  ui?: string;
};

export type TripInfo = {
  budget: string;
  destination: string;
  duration: number;
  group_size: string;
  origin: string;
  hotels: any;
  itinerary: any;
};

export type ChatBotProps = {
  onTripComplete: (data: TripInfo) => void;
};

export default function ChatBot({ onTripComplete }: ChatBotProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState<string>();
  const [loading, setLoading] = useState<boolean>();
  const [isFinal, setIsFinal] = useState(false);
  const [tripDetail, setTripDetail] = useState<TripInfo>();
  const messageEndRef = useRef<HTMLDivElement>(null);
  const onSend = async () => {
    if (!userInput?.trim()) return;
    setUserInput("");
    const newMsg: Message = {
      role: "user",
      content: userInput,
    };

    !isFinal && setMessages((prev: Message[]) => [...prev, newMsg]);

    setLoading(true);
    const result = await axios.post("/api/aimodel", {
      messages: [...messages, newMsg],
      isFinal: isFinal,
    });
    console.log("TRIP", result.data);
    setMessages((prev: Message[]) => [
      ...prev,
      {
        role: "assistant",
        content: result?.data?.resp,
        ui: result?.data?.ui,
      },
    ]);
    if (isFinal) {
      setTripDetail(result?.data?.trip_plan);
      onTripComplete(result?.data?.trip_plan);
    }
    setLoading(false);
  };

  useEffect(() => {
    const lastMsg = messages[messages.length - 1];
    if (lastMsg?.ui == "final" && !isFinal) {
      setIsFinal(true);
      setUserInput("Ok Great");
      onSend();
    }
  }, [messages]);

useEffect(()=>{
messageEndRef.current?.scrollIntoView({behavior:"smooth"})
},[messages,loading])

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

        {loading && (
          <div className="flex justify-start gap-3 ">
            <div className=" w-8 h-8 bg-[#1a1a2e] rounded-full flex items-center justify-center shrink-0">
              <span className="text-white text-xs font-bold">A</span>
            </div>
            <div className="bg-gray-100 text-gray-700 text-sm px-4 py-2.5 rounded-2xl rounded-bl-sm flex items-center gap-1">
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0ms]"></span>
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:150ms]"></span>
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:300ms]"></span>
            </div>
          </div>
        )}
        <div ref={messageEndRef}/>
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
              disabled={loading}
              onClick={onSend}
              className="bg-[#1a1a2e] text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-[#2d2d4e] transition-all duration-150 cursor-pointer"
            >
              {loading ? "Thinking..." : "Send"}
            </button>
          </div>
        </div >
      </section>
    </div>
  );
}
