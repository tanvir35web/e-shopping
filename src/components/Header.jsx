import React from "react";
import { cartIcon, darkLogo } from "../assets";

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
            <div>
                <img className="w-6" src={ cartIcon } alt="Cart image" />
            </div>
        </div>
      </div>
      
    </div>
  );
};
