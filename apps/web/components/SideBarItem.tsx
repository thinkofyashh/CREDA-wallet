"use client"
import { usePathname, useRouter } from "next/navigation";
import React from "react";

type SideBarProps = {
  icon: React.ReactNode;
  title: string;
  href: string;
};
export const SideBarItem = ({ href, icon, title }: SideBarProps) => {
    const router = useRouter();
    const pathname = usePathname();
    const active = pathname === href;
  
    return (
      <button
        className={`flex items-center gap-3 w-full px-4 py-2 rounded-lg transition-all text-left ${
          active
            ? "bg-lime-400 text-white shadow-md "
            : "hover:bg-gray-100 text-gray-700"
        }`}
        onClick={() => router.push(href)}
      >
        <div className="text-lg">{icon}</div>
        <div className="font-medium">{title}</div>
      </button>
    );
  };
  





