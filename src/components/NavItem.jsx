import React from "react";

const NavItem = ({ onClick, label }) => {
    return (
        <li
            onClick={onClick}
            className="text-base text-black font-semibold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer "
        >
            {label}
        </li>
    );
};

export default NavItem;
