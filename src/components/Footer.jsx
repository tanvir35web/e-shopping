import React from "react";
import { lightLogo, paymentLogos } from "../assets";
import {
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaUserAlt,
  FaPaypal,
  FaHome,
  FaHandsHelping,
} from "react-icons/fa";
import { RiMailSendFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-gray-300 py-20 font-bodyFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        <div className="flex flex-col gap-5">
          <img className="w-32" src={lightLogo} alt="Payment logos" />
          <p>@ Tanvirul Islam </p>
          <img className="w-56" src={paymentLogos} alt="payments logo" />
          <div className="flex flex-row gap-4 text-xl text-gray-400">
            <FaGithub className="hover:text-white cursor-pointer duration-300" />
            <FaFacebook className="hover:text-white cursor-pointer duration-300" />
            <FaLinkedin className="hover:text-white cursor-pointer duration-300" />
            <FaInstagram className="hover:text-white cursor-pointer duration-300" />
            <RiMailSendFill className="hover:text-white cursor-pointer duration-300" />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-5 text-gray-200">
            Locate Us
          </h2>
          <div className="flex flex-col gap-2 text-base">
            <p>B-10, KBS, Kallyanpur, Dhaka</p>
            <p>Phone: +880 1625568609</p>
            <p>Email: tanvir.niter09@gmail.com</p>
            <p>www.e-shopping.com</p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-5 text-gray-200">Profile</h2>
          <p className="flex flex-row gap-3 mb-2 items-center hover:text-white cursor-pointer duration-300">
            <span>
              <FaUserAlt />
            </span>
            My account
          </p>
          <p className="flex flex-row gap-3 mb-2 items-center hover:text-white cursor-pointer duration-300">
            <span>
              <FaPaypal />
            </span>
            Check out
          </p>
          <p className="flex flex-row gap-3 mb-2 items-center hover:text-white cursor-pointer duration-300">
            <span>
              <FaHome />
            </span>
            Order tracking
          </p>
          <p className="flex flex-row gap-3 mb-2 items-center hover:text-white cursor-pointer duration-300">
            <span>
              <FaHandsHelping />
            </span>
            Help & support
          </p>
        </div>

        <div className="flex flex-col gap-3">
            <input className="bg-transparent border px-4 py-2 text-sm " type="email" placeholder="E-mail . . . "/>
            <button>Subscribe</button>
            <p className="mt-10">Happiness is not money, but shopping. Thanks</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
