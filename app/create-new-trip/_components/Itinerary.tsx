export default function Itinerary({ itinerary }: { itinerary: any }) {
  return (
    <div className="space-y-4 ">
      <h2 className="text-2xl font-bold text-[#1a1a2e] tracking-tight">
        🗺️ Day by Day Itinerary
      </h2>
      <div className=" space-y-4">
        {itinerary?.map((day: any, index: number) => (
          <div
            key={index}
            className="border border-gray-200 rounded-2xl p-5 bg-white space-y-4 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <span className="bg-indigo-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shrink-0">
                Day{day.day}
              </span>
              <span className="text-base font-semibold text-[#1a1a2e]leading-snug">
                {day?.day_plan}
              </span>
            </div>
            <p className="flex items-center gap-1.5 bg-amber-50 text-amber-600 text-xs font-medium px-3 py-1.5 rounded-full w-fit">
              {" "}
              ⏰Best Time:{day.best_time_to_visit}
            </p>
            <div className="space-y-3">
              {day.activities?.map((activity: any, i: number) => (
                <div
                  key={i}
                  className=" border  border-gray-100 rounded-xl p-4 space-y-2 hover:shadow-sm transition-all"
                >
                  {/* Activity number */}
                  <div className="flex items-start  gap-2 ">
                    <span className="bg-indigo-50 text-indigo-600 text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <h4 className="text-sm font-semibold  text-[#1a1a2e] leading-snug">
                      {activity.place_name}
                    </h4>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed pl-8">
                    {activity.place_details}
                  </p>
                  {/* TAGS */}
                  <div className="flex flex-wrap gap-2 pl-8 ">
                    <span className="bg-gray-50  text-xs px-2.5 py-1 rounded-full border border-gray-100 text-gray-500">
                      {" "}
                      📍{activity?.place_address}
                    </span>
                    <span className="text-xs bg-green-50  text-green-600 px-2.5 py-1 rounded-full border border-green-100">
                      🎟️{activity?.ticket_pricing}
                    </span>
                    <span className="bg-blue-50 text-blue-600 text-xs px-2.5 py-1 rounded-full border border-blue-100">
                      ⏱️{activity?.time_to_spend}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
