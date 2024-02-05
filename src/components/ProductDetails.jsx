import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/shoppingSlice";
import { ToastContainer, toast } from "react-toastify";

const ProductDetails = () => {
    const dispatch = useDispatch();
    const [baseQuantity, setBaseQuantity] = useState(1);
    const [details, setDetails] = useState({});
    const Location = useLocation();

    useEffect(() => {
        setDetails(Location.state.item);
    }, []);

    return (
        <div>
            <div className="max-w-screen-xl mx-auto my-10 flex flex-col lg:flex-row items-center gap-10">
                <div className="w-4/5 lg:w-2/5 relative">
                    <img
                        className=" lg:w-full h-auto lg:h-[650px] object-cover rounded-2xl shadow-lg"
                        src={details.image}
                        alt="product image"
                    />
                    <div className="absolute top-4 right-2">
                        {details.isNew && (
                            <p className="bg-black text-white font-semibold px-6 py-3 rounded-2xl">
                                sale
                            </p>
                        )}
                    </div>
                </div>

                <div className="w-4/5 flex flex-col justify-center gap-12 ">
                    <div>
                        <h2 className="text-4xl font-semibold">
                            {details.title}
                        </h2>

                        <div className="flex items-center gap-4 mt-3">
                            <p className="line-through text-gray-500">
                                $ {details.oldPrice}
                            </p>
                            <p className="font-semibold">$ {details.price}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 text-base">
                        <div className="flex gap-1">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <p className="text-xs text-gray-500">
                            (217 customer review)
                        </p>
                    </div>
                    <p className="text-base text-gray-500 -mt-3">
                        {details.description}
                    </p>
                    <div>
                        <div className="flex items-center gap-6 sm:flex-row flex-col lg:flex-row">
                            <div className="flex items-center gap-6 border-[2px] px-4 py-2">
                                <p className="text-sm">Quantity</p>
                                <div className="flex items-center gap-4 text-sm font-semibold">
                                    <button
                                        onClick={() =>
                                            setBaseQuantity(
                                                baseQuantity === 1
                                                    ? (baseQuantity = 1)
                                                    : baseQuantity - 1
                                            )
                                        }
                                        className="hover:bg-black hover:text-white px-2 rounded-full duration-500"
                                    >
                                        -
                                    </button>
                                    <span> {baseQuantity} </span>
                                    <button
                                        onClick={() =>
                                            setBaseQuantity(baseQuantity + 1)
                                        }
                                        className="hover:bg-black hover:text-white px-2 rounded-full duration-500"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <button
                                onClick={() =>
                                    dispatch(
                                        addToCart({
                                            _id: details._id,
                                            title: details.title,
                                            image: details.image,
                                            price: details.price,
                                            quantity: baseQuantity,
                                            description: details.description,
                                        })
                                    ) &
                                    toast.success(`${details.title} is added`)
                                }
                                className="bg-gray-700 px-6 py-2 text-white hover:bg-amber-300 hover:text-black font-semibold  duration-300"
                            >
                                Add item
                            </button>
                        </div>
                    </div>
                    <div>
                        Category:{" "}
                        <span className=" font-medium capitalize">
                            {" "}
                            {details.category}{" "}
                        </span>{" "}
                    </div>
                </div>
            </div>
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

export default ProductDetails;
