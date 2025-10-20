"use client";

import { useState } from "react";
import { Home, BookOpen, PlusCircle, LogOut, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: <Home size={20} /> },
    {
      name: "Entries",
      href: "/dashboard#entries",
      icon: <BookOpen size={20} />,
    },
    {
      name: "New Entry",
      href: "/dashboard#new",
      icon: <PlusCircle size={20} />,
    },
  ];

  return (
    <>
      {/* Desktop Sidebar (md and up) */}
      <aside className="hidden md:flex flex-col fixed left-0 top-0 h-full w-60 bg-[#010a1f]/90 border-r border-blue-900 backdrop-blur-md text-gray-300 p-5">
        <h1 className="text-2xl font-bold text-blue-300 mb-10">MindFlow</h1>

        <nav className="flex flex-col gap-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-900/40 hover:text-white transition"
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>

        <div className="mt-auto pt-10">
          <button className="flex items-center gap-3 px-3 py-2 text-red-400 hover:text-red-300 transition">
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>

      {/* Mobile Navbar (normal) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-[#010a1f]/95 border-t border-blue-900 backdrop-blur-md text-gray-300 flex justify-around py-3 z-40">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex flex-col items-center text-xs hover:text-blue-400 transition"
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed top-4 left-4 bg-blue-800/40 p-2 rounded-lg text-white z-50"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile Slide-out Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-56 bg-[#010a1f] border-r border-blue-900 p-6 transition-transform z-40 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h1 className="text-2xl font-bold text-blue-300 mb-10">MindFlow</h1>
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-900/40 hover:text-white transition"
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
    </>
  );
}
