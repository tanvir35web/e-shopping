import React from "react";
import { useSelector } from "react-redux";
import { cartImg } from "../assets";
import CartItem from "../components/cartItem";

const Cart = () => {
    const productData = useSelector((item) => item.shopping.productData);
    console.log(productData);

    return (
        <div>
            <img
                className="w-full h-[960px] object-cover"
                src="https://images.pexels.com/photos/5632346/pexels-photo-5632346.jpeg"
                alt="cart section banner image"
            />

            <div className="max-w-screen-xl mx-auto py-20 flex">
                <CartItem />
                <div className="w-1/3 bg-gray-100 py-10 px-4 rounded-lg">
                    <div className="flex flex-col border-b-[1px] gap-6 border-b-gray-400 pb-6">
                        <h2 className="text-2xl font-medium">Cart Total</h2>
                        <p className="flex items-center gap-4 mt-3 text-base">
                            Sub Total{" "}
                            <span className="font-bold text-lg"> 1250$ </span>
                        </p>
                        <p className="flex items-start gap-4 text-base">
                            Shipping{" "}
                            <span className="">
                                {" "}
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Pariatur rerum
                            </span>
                        </p>
                    </div>
                    <p className="flex justify-between mt-6  text-lg">
                        Total Amount{" "}
                        <span className="font-bold text-xl"> $960 </span>
                    </p>
                    <button className="bg-black text-white text-base w-full py-3 mt-6 hover:bg-gray-800 duration-200">
                        proceed to checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
