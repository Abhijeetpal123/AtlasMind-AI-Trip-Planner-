"use client";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { use } from "react";
import TripOverview from "@/app/create-new-trip/_components/tripoverview";

export default function PublicTrip({
  params,
}: {
  params: Promise<{ shareToken: string }>;
}) {
  const { shareToken } = use(params);

  const trip = useQuery(
    api.trip.GetPublicTrip,
    shareToken ? { shareToken } : "skip",
  );
  if (trip === undefined)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-400">Loading... ✈️</p>
      </div>
    );

  if (trip === null)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-400">Trip not found or not public</p>
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 min-h-screen">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-[#1a1a2e]">
          🌍 {trip.tripDetail?.destination}
        </h1>
        <p className="text-gray-400 text-sm">This trip was shared with you</p>
      </div>
      <TripOverview trip_plan={trip.tripDetail} />
    </div>
  );
}
