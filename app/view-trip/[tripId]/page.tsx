"use client";
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

  console.log(tripData);
  return <div>{tripId}</div>;
}
