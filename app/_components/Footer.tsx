"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname()

  if(pathname==="/create-new-trip") return null;
  const links = [
    { name: "Home", path: "/" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact us", path: "/contact-us" },
    { name: "My Trips", path: "/my-trips" },
  ];

  return (
    <footer className="border-t border-gray-100 bg-white py-8 px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-[#1a1a2e] rounded-[8px] flex items-center justify-center">
            <Image src="/logo.svg" alt="logo" width={16} height={16} />
          </div>
          <span className="font-bold text-[1rem] tracking-tight text-[#1a1a2e]">
            Atlas<span className="text-indigo-600">Mind</span>
          </span>
        </div>

        {/* Links */}
        <div className="flex gap-6">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className="text-gray-400 text-sm hover:text-[#1a1a2e] transition-all"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-400">
          © 2025 AtlasMind. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
