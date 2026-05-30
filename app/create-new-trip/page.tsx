"use client";
import { useState } from "react";
import ChatBot, { TripInfo } from "./_components/chatbot";
import TripOverview from "./_components/tripoverview";
import { motion, AnimatePresence } from "framer-motion";
function EmptyTripPlaceholder() {
  const destinations = ["🏝️ Bali", "🗼 Paris", "🏯 Tokyo", "🌊 Santorini"];

  const stats = [
    {
      icon: "✈️",
      value: "10,000",
      label: "Trip Planned",
    },
    {
      icon: "🌍",
      value: "50+",
      label: "Countries",
    },
    {
      icon: "⚡",
      value: "2 min",
      label: "Avg Time",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-full flex flex-col items-center justify-center text-center px-6 space-y-8 bg-linear-to-br from-indigo-50/50 to-white rounded-2xl "
    >
      {/* GLOBE ANIMATION */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="text-8xl"
      >
        🌍
      </motion.div>
      {/* TEXT */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-[#1a1a2e] tracking-tight">
          Your Trip Plan Will Appear Here{" "}
        </h2>
        <p className="text-gray-400 text-sm max-w-xs mx-auto leading-relaxed">
          Chat with Atlas Mind on the left to generate your personalized trip
          plan
        </p>
      </div>
      {/* STATS */}
      <div className="flex gap-6 bg-white border border-gray-100 rounded-2xl px-8 py-4 shadow-sm ">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="text-center"
          >
            <p className="text-lg">{stat.icon}</p>
            <p className="text-sm font-bold text-[#1a1a2e]">{stat.value}</p>
            <p className="text-xs text-gray-400">{stat.label}</p>
          </motion.div>
        ))}
      </div>
      {/* Destination Chips */}

      <div className="flex flex-wrap justify-center gap-2">
        {destinations.map((dest, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className="bg-indigo-50 text-indigo-600  text-xs font-semibold px-3 py-1.5 rounded-full"
          >
            {dest}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function CreateNewTrip() {
  const [tripData, setTripData] = useState<TripInfo | null>(null);

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 gap-5 overflow-hidden"
      style={{ height: "calc(100vh - 64px)" }}
    >
      <div
        className="overflow-y-auto p-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <ChatBot onTripComplete={(data) => setTripData(data)} />
      </div>

      <div
        className="overflow-y-auto p-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <AnimatePresence mode="wait">
          {tripData ? (
            <motion.div
              key="trip"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <TripOverview trip_plan={tripData} />
            </motion.div>
          ) : (
            <EmptyTripPlaceholder key="empty" />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
