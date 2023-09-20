"use client";

import { useContext } from "react";
import { ThemeContex } from "../ThemeContex/ThemeContex";
const DarkMode = () => {
  const { mode, toggle } = useContext(ThemeContex);

  return (
    <div
      className="flex justify-between items-center w-[36px] ring-1 ring-red-500 rounded-full p-[2px] relative cursor-pointer "
      onClick={toggle}
    >
      <div className="text-[10px]">🌙</div>
      <div className="text-[10px]">🔆</div>
      <div
        className={`transition-all duration-1000  h-[14px] w-[14px] rounded-full bg-[#e2c20b] absolute  ${
          mode === "light" ? "left-[2px] bg-[#000000] " : "right-[2px]"
        } `}
      />
    </div>
  );
};

export default DarkMode;
