"use client";
import TripOverview from "@/app/create-new-trip/_components/tripoverview";
import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import { use, useState } from "react";

export default function ViewTrip({
  params,
}: {
  params: Promise<{ tripId: string }>;
}) {
  const { tripId } = use(params);
  const [shareLink, setShareLink] = useState<string>("");
  const [copied, setCopied] = useState(false);

  const tripData = useQuery(
    api.tripDetail.GetUserId,
    tripId ? { tripId: tripId } : "skip",
  );
  const ShareTrip = useMutation(api.trip.ShareTrip);

  const trip = Array.isArray(tripData) ? tripData[0] : tripData;
  const handleShare = async () => {
    const token = await ShareTrip({ tripId });
    const link = `${window.location.origin}/share/${token}`;
    setShareLink(link);
    // copy to clipboard
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!trip)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-400 text-sm "> Loading Your Trip....✈️</p>
      </div>
    );
  console.log(tripData);
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 min-h-screen">
      {/* Share Button */}
      <div className="mb-6 flex gap-3">
        <button
          onClick={handleShare}
          className="bg-indigo-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-indigo-700 transition-all cursor-pointer"
        >
          {copied ? " ✅ Copied" : " 🔗Share Trip"}
        </button>

        {shareLink && (
          <a
            target="_blank"
            href={shareLink}
            className="flex-1 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-indigo-600 hover:underline truncate"
          >
            {shareLink}
          </a>
        )}
      </div>

      <TripOverview trip_plan={trip?.tripDetail} />
    </div>
  );
}
