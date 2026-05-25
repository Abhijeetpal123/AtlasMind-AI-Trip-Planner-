"use client";
import { useUser } from "@clerk/nextjs";
import { Globe, Landmark, Plane, Play } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/router";
export default function Hero() {
  const suggestions = [
    {
      title: "Explore Destinations ",
      icon: <Globe className="text-indigo-400 h-5 w-5" />,
    },
    {
      title: "Book Flights",
      icon: <Plane className="text-indigo-400 h-5 w-5" />,
    },
    {
      title: "Find Hotel",
      icon: <Landmark className="text-indigo-400 h-5 w-5" />,
    },
    {
      title: "Plan Itine",
      icon: <Globe className="text-indigo-400 h-5 w-5" />,
    },
  ];

  const destination = [
    {
      city: "Bali",
      country: "Indonesia",
      emoji: "🏝️",
      weather: "28 °C Sunny",
      bestTime: "Apr-Oct",
    },
    {
      city: "Paris",
      country: "France",
      emoji: "🗼",
      weather: "18 °C Cloudy",
      bestTime: "June-Sept",
    },
    {
      city: "Tokyo",
      country: "Japan",
      emoji: "🏯",
      weather: "22 °C Sunny",
      bestTime: "Mar-May",
    },
    {
      city: "Santorini",
      country: "Greece",
      emoji: "🌊",
      weather: "25 °C Sunny",
      bestTime: "May-Oct",
    },
  ];

//   const { user } = useUser();
//   const router = useRouter();
// const onsend=()=>{
// if(!user){
//   router.push('/sign-in')
//   return;
// }
// //Navigate to Create Trip Planner  Web Page 
// router.push()
// }


  return (
    <div className="mt-24 w-full flex flex-col items-center px-4 gap-8">
      {/* Content */}
      <div className="max-w-3xl w-full text-center space-y-4">
        <span className="inline-block bg-indigo-50 text-indigo-600 text-xs  font-semibold px-4 py-1.5 rounded-full tracking-wide">
          ✦ AI-Powered Trip Planning
        </span>
        <h1 className="text-3xl md:text-5xl text-[#1a1a2e] font-bold tracking-tight leading-tight ">
          Travel Smarter with{" "}
          <span className="text-indigo-600">Atlas Mind</span>
        </h1>
        <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          Just tell me where you want to go — I'll plan flights, hotels, and a
          full itinerary in seconds.
        </p>
      </div>
      {/* Input Box  */}

      <div className="w-full max-w-2xl border border-gray-200 rounded-2xl p-4 shadow-sm bg-white flex flex-col gap-2">
        <textarea
          className="w-full h-20 resize-none bg-transparent border-none focus:ring-0 text-sm text-gray-700 placeholder:text-gray-400 outline-none"
          placeholder="e.g. Plan a 7 day trip Delhi to Thailand,budget friendly......"
        />
        <div className="flex items-center justify-between  border-t border-gray-100 pt-3 ">
          <span className="text-xs text-gray-400">
            Be as specific as you like{" "}
          </span>
          <button className="bg-[#1a1a2e] text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-[#2d2d4e] transition-all duration-150 cursor-pointer">
            Plan My Trip →
          </button>
        </div>
      </div>

      {/* Suggestion List  */}

      <div className="flex gap-5 ">
        {suggestions.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 border rounded-full p-2 cursor-pointer "
          >
            {item.icon}
            <h2 className="text-sm">{item.title}</h2>
          </div>
        ))}
      </div>

      {/* Video Section  */}

      <div className="w-full max-w-4xl mx-auto px-4 mt-8 text-center">
        <p className="text-gray-400 text-sm font-medium mb-4 tracking-wide uppercase">
          {" "}
          See it in Action
        </p>
        <div className=" relative rounded-2xl overflow-hidden border border-gray-200 shadow-lg  cursor-pointer group">
          {/* Thumbnail */}
          <Image
            src="/thumbnail.png"
            alt="Atlas Mind Demo"
            width={1200}
            height={600}
            className="w-full object-cover"
          />

          {/* Play Button  */}
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-all duration-200 ">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200 ">
              <Play
                className="w-6 h-6 text-[#1a1a2e] ml-1"
                fill="currentColor"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Destination Card  */}

      <div className="w-full max-w-4xl mx-auto px-4 mt-8 pb-24">
        <p className="text-center text-gray-400 text-sm font-medium mb-6 uppercase tracking-wide">
          Where will Atlas Mind Takes You{" "}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {destination.map((dest, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl p-4 bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer group"
            >
              <div className="text-3xl mb-3">{dest.emoji}</div>
              <h3 className="font-bold text-[#1a1a2e] text-sm">{dest.city}</h3>
              <p className="text-gray-400 text-xs mb-3">{dest.country}</p>
              <div className="space-y-1">
                <p className="text-xs text-gray-500">🌤{dest.weather}</p>
                <p className="text-xs text-gray-400">📅{dest.bestTime}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
