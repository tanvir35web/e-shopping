import React from "react";
import { cartIcon, darkLogo, userIcon } from "../assets";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Header = () => {
    const productData = useSelector((state) => state.shopping.productData);

    return (
        <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-400 font-bodyFont sticky top-0 z-50">
            <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
                <Link to="/">
                    <div>
                        <img className="w-32" src={darkLogo} alt="dark logo" />
                    </div>
                </Link>
                <div className="flex items-center gap-8">
                    <ul className="flex items-center gap-8">
                        <Link to="/">
                            <li className="text-base text-black font-semibold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer ">
                                {" "}
                                Home{" "}
                            </li>
                        </Link>
                        <li className="text-base text-black font-semibold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer ">
                            {" "}
                            Pages{" "}
                        </li>
                        <li className="text-base text-black font-semibold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer ">
                            {" "}
                            shop{" "}
                        </li>
                        <li className="text-base text-black font-semibold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer ">
                            {" "}
                            Element{" "}
                        </li>
                        <li className="text-base text-black font-semibold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer ">
                            {" "}
                            Blog{" "}
                        </li>
                    </ul>
                    <Link to="/cart">
                        <div className="w-20 bg-amber-200 p-3 rounded-md flex gap-4">
                            <img
                                className="w-6"
                                src={cartIcon}
                                alt="Cart image"
                            />
                            <p className="text-lg font-bold">
                                {" "}
                                {productData.length}{" "}
                            </p>
                        </div>
                    </Link>

                    <div>
                        <img
                            className="w-9 h-9 rounded-full"
                            src={userIcon}
                            alt="userLogo"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
