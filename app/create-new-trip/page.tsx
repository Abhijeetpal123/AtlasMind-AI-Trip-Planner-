"use client";
import { useState } from "react";
import ChatBot, { TripInfo } from "./_components/chatbot";

import TripOverview from "./_components/tripoverview";

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
        {tripData && <TripOverview trip_plan={tripData} />}
      </div>
    </div>
  );
}
