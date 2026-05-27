import Hotels from "./hotels";
import Itinerary from "./Itinerary";

export default function TripOverview({ trip_plan }: { trip_plan: any }) {
  return (
    <div className="bg-white border border-gray-200  rounded-2xl p-6 space-y-4">
      <h1 className="text-2xl font-bold text-[#1a1a2e]">
        {trip_plan?.destination}
      </h1>
      <div className="flex flex-wrap gap-3 ">
        <span className=" bg-indigo-50 text-indigo-600 text-xs font-semibold px-3 py-1.5 rounded-full">
          📅{trip_plan?.duration}
        </span>
        <span className=" bg-indigo-50 text-indigo-600 text-xs font-semibold px-3 py-1.5 rounded-full">
          ✈️ {trip_plan?.origin}{" "}
        </span>
        <span className=" bg-indigo-50 text-indigo-600 text-xs font-semibold px-3 py-1.5 rounded-full">
          💰 {trip_plan?.budget}
        </span>
        <span className=" bg-indigo-50 text-indigo-600 text-xs font-semibold px-3 py-1.5 rounded-full">
          👥 {trip_plan?.group_size}
        </span>
      </div>
      <Hotels hotels={trip_plan?.hotels} />
      <Itinerary itinerary={trip_plan?.itinerary} />
    </div>
  );
}
