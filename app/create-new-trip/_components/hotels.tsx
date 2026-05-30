"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";




const getHotelImage= async(hotelName:string)=>{
  const res = await fetch (
    `https://api.pexels.com/v1/search?query=${hotelName} hotel&per_page=1`,
{
  headers:{
Authorization:process.env.NEXT_PUBLIC_PEXELS_API_KEY!,
  },
}
  );
  const data = await res.json();
  return data.photos[0]?.src?.medium??"/thumbnail.png";
}


function HotelCard({hotel,index}:{hotel:any;index:number}){
  const[image,setImage]=useState("/thumbnail.png");
  useEffect(()=>{
getHotelImage(hotel.hotel_name).then(setImage)
  },[hotel.hotel_name])
  return(
    
<motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="border border-gray-200 rounded-2xl bg-white overflow-hidden shadow-sm cursor-pointer"
          >
            {/* Hotel Image */}
            <img
              src={image}
              alt={hotel.hotel_name}
              className="w-full h-40 object-cover"
              onError={(e) => {
                e.currentTarget.src = `https://source.unsplash.com/400x300/?hotel,${hotel.hotel_name}`;
              }}
            />

            {/* Hotel Info */}
            <div className="p-4 space-y-2">
              <h3 className="font-bold text-[#1a1a2e] text-sm leading-snug">
                {hotel.hotel_name}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                {hotel.hotel_address}
              </p>
              <div className="flex gap-2 pt-1">
                <span className="bg-indigo-50 text-indigo-600 text-xs font-semibold px-2.5 py-1 rounded-full">
                  💰 {hotel.price_per_night}
                </span>
                <span className="bg-yellow-50 text-yellow-600 text-xs font-semibold px-2.5 py-1 rounded-full">
                  ⭐ {hotel.rating}
                </span>
              </div>
            </div>
          </motion.div>
    
  )
}

export default function Hotels({ hotels }: { hotels: any[] }) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-[#1a1a2e] tracking-tight">🏨 Hotels</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {hotels?.map((hotel, index) => (
          <HotelCard key={index} hotel={hotel} index={index}/>
        ))}
      </div>
    </div>
  );
}