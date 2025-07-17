"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick:()=>void;
}

export const Button = ({children,onClick}: ButtonProps) => {
  return (
    <button onClick={onClick} type="button" className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition duration-200 shadow-sm"
    >
      {children}
    </button>
  );
};
