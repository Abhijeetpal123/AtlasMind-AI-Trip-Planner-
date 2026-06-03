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

  if (!trip)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-400">Trip not found or not public</p>
      </div>
    );

  return (
    <div className="text-center mb-8 space-y-3 ">
      <span className="inline-block bg-indigo-50 text-indigo-600 text-xs  font-semibold px-4 py-1.5 rounded-full">
        🔗 Shared Trip
      </span>
      <h1 className="text-4xl font-bold text-[#1a1a2e] tracking-tight">🌍{trip.tripDetail?.destination}</h1>
      {/* <TripOverview trip_plan={trip.tripDetail} /> */}
      <p className=" text-gray-400 text-sm">The trip was shared with you Atlasmind</p>
    </div>
  );
}
