import {Globe, Landmark, Plane} from "lucide-react";
export default function Hero() {

const suggestions=[
{    title:"Explore Destinations ",
    icon:<Globe className="text-indigo-400 h-5 w-5" />
},
{    title:"Book Flights",
    icon:<Plane className="text-indigo-400 h-5 w-5" />
},
{    title:"Find Hotel",
    icon:<Landmark className="text-indigo-400 h-5 w-5" />
},
{    title:"Plan Itine",
    icon:<Globe className="text-indigo-400 h-5 w-5" />
}
]

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
            <span className="text-xs text-gray-400">Be as specific as you like </span>
           <button className="bg-[#1a1a2e] text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-[#2d2d4e] transition-all duration-150 cursor-pointer">
                        Plan My Trip →
                    </button>
          </div>
         
        </div>
     
      {/* Suggestion List  */}

<div className="flex gap-5 ">
    {suggestions.map((item,index)=>(
        <div key ={index}
        className="flex items-center gap-2 border rounded-full p-2 cursor-pointer ">
            {item.icon}
            <h2 className="text-sm">{item.title}</h2>
            </div>
    ))}
    </div>


      {/* Video Section  */}
      
    </div>
  );
}
