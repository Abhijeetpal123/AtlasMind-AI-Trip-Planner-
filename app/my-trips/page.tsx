"use client";
import Link from "next/link";
import { useUserDetail } from "../provider";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function MyTrip() {
  const { userDetail } = useUserDetail();
  const trips = useQuery(
    api.tripDetail?.GetUserTrips,
    userDetail?._id ? { uid: userDetail._id } : "skip",
  );
  console.log(trips);

  return (
    <div className="min-h-screen  bg-gray-50/50 px-4 py-20">
      {/* HEADER */}
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#1a1a2e] tracking-tight">
              My Trip
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              All Your Planned Structure in One Place{" "}
            </p>
          </div>
          <Link
            href="/create-new-trip"
            className="bg-[#1a1a2e] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#2d2d4e] transition-all duration-150"
          >
            {" "}
            + Create New Trip{" "}
          </Link>
        </div>
        {/* TRIP GRID  */}
        {trips?.length === 0 ? (
          <div className="text-center py-20 space-y-3">
            <p className="text-4xl">🗺️</p>
            <p className="text-gray-500 text-sm">
              No Trips yet- start planning you first adventure
            </p>
            <Link
              href="/create-new-trip"
              className="inline-block bg-indigo-600 text-white text-sm font-semibold px-5 py-2.5  rounded-lg hover:bg-indigo-700 transition-all"
            >
              Plan a Trip
            </Link>
          </div>
        ) : (
          <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {trips?.map((trip: any, index: number) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 space-y-3"
              >
                <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-xl ">
                  🌍
                </div>
                <h2 className="text-lg font-bold text-[#1a1a2e]">
                  {trip.tripDetail?.destination}
                </h2>
                <div className="flex flex-wrap gap-2 ">
                  <span className="bg-indigo-50 text-indigo-600 text-xs font-semibold px-2.5 py-1 rounded-full">
                    📅{trip.tripDetail?.duration}
                  </span>
                  <span className="bg-indigo-50 text-indigo-600 text-xs font-semibold px-2.5 py-1 rounded-full">
                    {" "}
                    💰 {trip.tripDetail?.budget}
                  </span>

                  <span className="bg-indigo-50 text-indigo-600 text-xs font-semibold px-2.5 py-1 rounded-full">
                    👥 {trip.tripDetail?.group_size}
                  </span>
                </div>
                <Link
                  href={`/view-trip/${trip.tripId}`}
                  className="block w-full text-center bg-[#1a1a2e] text-white text-sm font-semibold py-2 rounded-lg hover:bg-[#2d2d4e] transition-all duration-150"
                >
                  View Trip →
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
