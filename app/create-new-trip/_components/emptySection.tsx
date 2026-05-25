import { Globe, Landmark, Plane } from "lucide-react";

type Props = {
  onSuggestionClick: (text: string) => void;
};

export default function EmptySection({ onSuggestionClick }: Props) {
  const suggestions = [
    {
      title: "Plan a trip to Bali ",
      icon: <Globe className="text-indigo-400 h-5 w-5" />,
    },
    {
      title: "Book Flights to Paris",
      icon: <Plane className="text-indigo-400 h-5 w-5" />,
    },
    {
      title: "Find Hotels in Tokyo",
      icon: <Landmark className="text-indigo-400 h-5 w-5" />,
    },
    {
      title: "Plan Italy Itinerary",
      icon: <Globe className="text-indigo-400 h-5 w-5" />,
    },
  ];
  return (
    <div className=" flex flex-col items-center gap-6 mt-20 ">
      <h2 className="text-xl font-semibold text-[#1a1a2e]">
        {" "}
        Where do you want to go ?
      </h2>

      <div className="flex flex-wrap justify-center gap-3 ">
        {suggestions.map((item, index) => (
          <div
            onClick={() => onSuggestionClick(item.title)}
            key={index}
            className="flex items-center gap-2 border border-gray-200 rounded-full px-2 py-2  cursor-pointer hover:border-indigo-400 hover:text-indigo-600 transition-all duration-150"
          >
            {item.icon}
            <h2 className="text-sm"> {item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}