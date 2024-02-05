import React, { useState } from "react";
import { cartIcon, darkLogo, userImg } from "../assets";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import "./Header.css";

export const Header = () => {
    const productData = useSelector((state) => state.shopping.productData);
    const userInfo = useSelector((state) => state.shopping.userInfo);
    const [showNav, setShowNav] = useState(false);

    const toggleNav = () => {
        setShowNav(!showNav);
        console.log(showNav);
    };

    return (
        <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-400 font-bodyFont sticky top-0 z-50 p-2">
            <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
                <Link to="/">
                    <div>
                        <img className="w-32" src={darkLogo} alt="dark logo" />
                    </div>
                </Link>

                <div className="md:hidden">
                    <button
                        onClick={toggleNav}
                        className="text-black p-2 focus:outline-none"
                    >
                        <CgMenuRight className="text-2xl" />
                    </button>
                </div>

                <div
                    className={` ${
                        showNav ? "sideNav" : "hidden"
                    } items-center gap-8 md:flex`}
                >
                    <ul
                        className={`flex items-center gap-8 ${
                            showNav ? "flex-col" : "flex-row"
                        } `}
                    >
                        {showNav ? (
                            <IoMdClose
                                onClick={toggleNav}
                                className="mt-8 text-3xl"
                            />
                        ) : (
                            ""
                        )}

                        <Link to="/">
                            <li className="text-base text-black font-semibold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer ">
                                Home
                            </li>
                        </Link>
                        <li className="text-base text-black font-semibold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer ">
                            Pages
                        </li>
                        <li className="text-base text-black font-semibold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer ">
                            shop
                        </li>
                        <li className="text-base text-black font-semibold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer ">
                            Element
                        </li>
                        <li className="text-base text-black font-semibold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer ">
                            Blog
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
                                {productData.length}
                            </p>
                        </div>
                    </Link>

                    <Link to="/login">
                        <div className="flex gap-3 items-center ">
                            <img
                                className="w-9 h-9 rounded-full"
                                src={userInfo ? userInfo.image : userImg}
                                alt="userLogo"
                                style={
                                    userInfo
                                        ? {}
                                        : {
                                              width: "1.85rem",
                                              height: "1.85rem",
                                          }
                                }
                            />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};
