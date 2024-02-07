import React, { useState } from "react";
import { cartIcon, darkLogo, userImg } from "../assets";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import "./Header.css";
import NavItem from "./NavItem";

export const Header = () => {
    const productData = useSelector((state) => state.shopping.productData);
    const userInfo = useSelector((state) => state.shopping.userInfo);
    const [showNav, setShowNav] = useState(false);

    const toggleNav = () => {
        setShowNav(!showNav);
        console.log(showNav);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-300 font-bodyFont z-20 p-2 fixed top-0">
            <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between overflow-hidden">
                <Link to="/">
                    <div onClick={scrollToTop}>
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
                        showNav ? "sideNavActive" : ""
                    } items-center gap-8 md:flex sideNav overflow-hidden`}
                >
                    <ul
                        className={`flex items-center gap-8 ${
                            showNav ? "flex-col md:flex-row" : "flex-row "
                        } `}
                    >
                        {showNav ? (
                            <IoMdClose
                                onClick={toggleNav}
                                className="mt-8 text-3xl md:hidden"
                            />
                        ) : (
                            ""
                        )}
                        

                        <Link to="/">
                            <NavItem onClick={toggleNav} label={"Home"} />
                        </Link>

                        <Link to="/">
                            <NavItem onClick={toggleNav} label={"Shop"} />
                        </Link>
                        <Link to="/cart">
                            <NavItem onClick={toggleNav} label={"Cart"} />
                        </Link>
                        <Link to="/login">
                            <NavItem onClick={toggleNav} label={"User"} />
                        </Link>
                        <Link to="/">
                            <NavItem onClick={toggleNav} label={"About"} />
                        </Link>
                    </ul>
                    <Link to="/cart">
                        <div
                            onClick={toggleNav}
                            className="w-20 bg-amber-200 p-3 rounded-md flex gap-4"
                        >
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
                        <div
                            onClick={toggleNav}
                            className="flex gap-3 items-center "
                        >
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
