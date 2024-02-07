import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineClose } from "react-icons/md";
import { HiOutlineArrowLeft } from "react-icons/hi";
import {
    decrementQuantity,
    deleteItem,
    incrementQuantity,
    resetCart,
} from "../redux/shoppingSlice";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

const CartItem = () => {
    const dispatch = useDispatch();
    const productData = useSelector((item) => item.shopping.productData);

    return (
        <div className="w-full lg:w-2/3 items-center ">
            <div className="w-full text-center md:text-left">
                <h2 className="text-2xl font-medium">Shopping Cart</h2>
            </div>

            <div className="">
                {productData.map((item) => (
                    <div
                        key={item._id}
                        className="flex items-center justify-center md:justify-between gap-3 mt-6 border-b border-b-gray-200 flex-col md:flex-row p-2 py-4 md:py-2 bg-gray-100 md:bg-gray-100  shadow-sm rounded-xl "
                    >
                        <div className="flex flex-col md:flex-row items-center gap-6 mt-3 md:mt-0">
                            <MdOutlineClose
                                onClick={() =>
                                    dispatch(deleteItem(item._id)) &
                                    toast.error(`${item.title} is removed`)
                                }
                                className="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300 ml-2 "
                            />
                            <img
                                className="w-36 h-36 object-cover rounded-2xl border border-gray-200"
                                src={item.image}
                                alt="product image"
                            />
                        </div>
                        <h2 className="w-52 text-center">{item.title}</h2>
                        <p className="w-10 text-center">{item.price}</p>
                        <div className="flex items-center gap-6 border-[2px] px-4 py-2">
                            <p className="text-sm">Quantity</p>
                            <div className="flex items-center gap-4 text-sm font-semibold">
                                <span
                                    onClick={() =>
                                        dispatch(
                                            decrementQuantity({
                                                _id: item._id,
                                                title: item.title,
                                                image: item.image,
                                                price: item.price,
                                                quantity: 1,
                                                description: item.description,
                                            })
                                        )
                                    }
                                    className="hover:bg-black hover:text-white px-2 rounded-full duration-500 cursor-pointer"
                                >
                                    -
                                </span>
                                {item.quantity}
                                <span
                                    onClick={() =>
                                        dispatch(
                                            incrementQuantity({
                                                _id: item._id,
                                                title: item.title,
                                                image: item.image,
                                                price: item.price,
                                                quantity: 1,
                                                description: item.description,
                                            })
                                        )
                                    }
                                    className="hover:bg-black hover:text-white px-2 rounded-full duration-500 cursor-pointer"
                                >
                                    +
                                </span>
                            </div>
                        </div>
                        <p className="w-20 text-center">
                            $ {item.quantity * item.price}
                        </p>
                    </div>
                ))}
            </div>
            <button
                onClick={() =>
                    dispatch(resetCart()) & toast.error("Your cart is empty")
                }
                className="bg-red-800 w-full text-white mt-8 py-1 px-6 hover:bg-red-900"
            >
                Reset Cart
            </button>
            <Link to="/">
                <button className="mt-8 flex items-center gap-2 text-gray-600 hover:text-black duration-300">
                    <span>
                        <HiOutlineArrowLeft />
                    </span>
                    Go Shopping
                </button>
            </Link>
            <ToastContainer
                position="top-left"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    );
};

export default CartItem;
