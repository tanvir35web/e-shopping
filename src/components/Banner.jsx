import React, { useState } from "react";
import { s1, s2, s3, s4 } from "../assets";
import { IoArrowBack, IoArrowForwardOutline } from "react-icons/io5";

const Banner = () => {
  const data = [s1, s2, s3, s4];
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? data.length - 1 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === data.length - 1 ? 0 : (next) => next + 1);
  };

  return (
    <>
      <div className="w-full h-auto overflow-x-hidden">
        <div className="w-screen relative">
          <div
            style={{ transform: `translate(-${currentSlide * 100}vw)` }}
            className="w-[400vw] h-full flex transition-transform duration-1000"
          >
            <img
              className="w-screen h-full object-cover"
              src={data[0]}
              alt=""
            />
            <img
              className="w-screen h-full object-cover"
              src={data[1]}
              alt=""
            />
            <img
              className="w-screen h-full object-cover"
              src={data[2]}
              alt=""
            />
            <img
              className="w-screen h-full object-cover"
              src={data[3]}
              alt=""
            />
          </div>
          <div className="flex absolute w-fit left-0 right-0 mx-auto gap-8 bottom-44">
            <div
              onClick={prevSlide}
              className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300 "
            >
              <IoArrowBack />
            </div>
            <div
              onClick={nextSlide}
              className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300 "
            >
              <IoArrowForwardOutline />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
