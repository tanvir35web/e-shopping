import React from "react";
import { cartIcon, darkLogo, userIcon } from "../assets";

export const Header = () => {
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-400 font-bodyFont ">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <div>
          <img className="w-32" src={darkLogo} alt="dark logo" />
        </div>
        <div className="flex items-center gap-8" > 
            <ul className="flex items-center gap-8">
                <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer "> Home </li>
                <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer "> Pages </li>
                <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer "> shop </li>
                <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer "> Element </li>
                <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer "> Blog </li>
            </ul>
            <div className="w-20 bg-amber-200 p-3 rounded-md flex gap-4">
                <img className="w-6" src={ cartIcon } alt="Cart image" />
                <p className="text-lg font-bold">2</p>
            </div>

            <div>
                <img className="w-9 h-9 rounded-full" src={ userIcon } alt="userLogo" />
            </div>
        </div>
      </div>
      
    </div>
  );
};
