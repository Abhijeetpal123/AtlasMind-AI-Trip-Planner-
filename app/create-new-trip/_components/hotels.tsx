export default function Hotels({ hotels }: { hotels: any[] }) {
  return (
    <div className=" space-y-4">
      <h2 className="text-xl font-bold text-[#1a1a2e]"> Hotel Opinion </h2>
      <div className="grid grid-cols-1 gap-4">
        {hotels?.map((hotel, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-2xl p-4 bg-white flex gap-4"
          >
            <img
              src={hotel.hotel_imgage_url}
              alt={hotel.hotel_name}
              className="w-24 h-24 rounded-xl object-cover shrink-0"
            />
            <div className="space-y-1">
              <h3 className="font-semibold text-sm text-[#1a1a2e]">
                {hotel.hotel_name}
              </h3>
              <p className="text-xs text-gray-400">{hotel.hotel_address}</p>
              <div className="flex gap-2 mt-2">
                <span className="bg-indigo-50 text-indigo-600 text-xs font-semibold px-2 py-1 rounded-full">
                  💰 {hotel.price_per_night}
                </span>
                <span className="bg-yellow-50 text-yellow-600 text-xs font-semibold px-2 py-1 rounded-full">⭐ {hotel.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
