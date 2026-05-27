export default function Itinerary({ itinerary }: { itinerary: any }) {
  return (
    <div className="space-y-4 ">
      <h2 className="text-xl font-bold text-[#1a1a2e]">
        🗺️ Day by Day Itinerary
      </h2>
      <div className=" space-y-4">
        {itinerary?.map((day: any, index: number) => (
          <div
            key={index}
            className="border border-gray-200 rounded-2xl p-5 bg-white space-y-3"
          >
            <div className="flex items-center gap-2">
              <span className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                Day{day.day}
              </span>
              <span className="text-sm font-semibold text-[#1a1a2e]">
                {day?.day_plan}
              </span>
            </div>
            <p className="text-xs text-gray-400">
              {" "}
              ⏰Best Time:{day.best_time_to_visit}
            </p>
            <div className="space-y-3">
              {day.activities?.map((activity: any, i: number) => (
                <div
                  key={i}
                  className="flex gap-3 border-t  border-gray-100 pt-3"
                >
                  <div className="space-y-1 flex-1">
                    <h4 className="text-sm font-semibold  text-[#1a1a2e]">
                      {activity.place_name}
                    </h4>
                    <p className="text-xs text-gray-500">
                      {activity.place_details}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <span className="text-xs  text-gray-400">
                        {" "}
                        📍{activity?.place_address}
                      </span>
                      <span className="text-xs  text-gray-400">
                        🎟️{activity?.ticket_pricing}
                      </span>
                      <span className="text-xs text-gray-400">
                        ⏱️{activity?.time_to_send}
                      </span>
                    </div>
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
