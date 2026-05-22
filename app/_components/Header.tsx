import Image from "next/image";
import Link from "next/link";
import path from "path";
export default function Header() {
  const menuOption = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Pricing",
      path: "/pricing",
    },
    {
      name: "Contact-us",
      path: "/contact-us",
    },
  ];
  return (
    <div className="flex items-center justify-between px-[10] h-17 max-w-7xl mx-auto border-b border-gray-100 sticky top-0 z-50 bg-white ">
      {/* Logo  */}
      <div className="flex gap-2.5 items-center">
        <div className=" cursor-pointer w-9 h-9 bg-[#1a1a2e] flex items-center justify-center shrink-0 rounded-[10PX]">
          <Image src={"/logo.svg"} alt="logo" width={18} height={18} />
        </div>
       <h2 className="font-bold text-[1.2rem] tracking-tight text-[#1a1a2e]">
  Atlas<span className="text-indigo-600">Mind</span>
</h2>
      </div>

      {/* Menu-Options */}
      <div className="flex gap-8 items-center">
        {menuOption.map((menu, index) => (
          <Link key={index} href={menu.path}>
            <h2 className=" text-gray-500 text-sm font-medium px-4 py-2 rounded-lg hover:text-[#1a1a2e] hover:bg-gray-100 transition-all duration-150 ">
              {menu.name}
            </h2>
          </Link>
        ))}
      </div>
      {/* Get Started Button  */}
      <div className="flex items-center gap-2.5">
         <button className="text-gray-700 text-sm font-medium px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-all cursor-pointer">Log in</button>
         <button className=" text-white text-sm font-semibold bg-[#1a1a2e] px-5 py-2  rounded-lg hover:bg-[#2d2d4e] hover:-translate-y-px transition-all duration-150 cursor-pointer">
        Get Started →
         </button>
        </div>
     
    </div>
  );
}
