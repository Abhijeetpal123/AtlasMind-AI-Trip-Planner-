"use client";
import TripOverview from "@/app/create-new-trip/_components/tripoverview";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { use } from "react";

export default function ViewTrip({
  params,
}: {
  params: Promise<{ tripId: string }>;
}) {
  const { tripId } = use(params);
  const tripData = useQuery(
    api.tripDetail.GetUserId,
    tripId ? { tripId: tripId } : "skip",
  );
  const trip = Array.isArray(tripData) ? tripData[0] : tripData;
  if (!trip)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-400 text-sm "> Loading Your Trip....✈️</p>
      </div>
    );
  console.log(tripData);
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 min-h-screen">
      <TripOverview trip_plan={trip?.tripDetail} />
    </div>
  );
}
