import React from "react";
import { useSelector } from "react-redux";
import { MdOutlineClose } from "react-icons/md";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { decrementQuantity, incrementQuantity } from "../redux/shoppingSlice";

const CartItem = () => {
    const productData = useSelector((item) => item.shopping.productData);
    console.log(productData);

    return (
        <div className="w-2/3 pr-10 ">
            <div className="w-full">
                <h2 className="text-2xl">Shopping Cart</h2>
            </div>

            <div>
                {productData.map((item) => (
                    <div
                        key={item._id}
                        className="flex items-center justify-between gap-6 mt-6"
                    >
                        <div className="flex items-center gap-2">
                            <MdOutlineClose className="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300" />
                            <img
                                className="w-32 h-32 object-cover"
                                src={item.image}
                                alt="product image"
                            />
                        </div>
                        <h2 className="w-52">{item.title}</h2>
                        <p className="w-10">{item.price}</p>
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
                                                quantity: baseQuantity,
                                                description: item.description,
                                            })
                                        )
                                    }
                                    className="hover:bg-black hover:text-white px-2 rounded-full duration-500"
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
                                                quantity: baseQuantity,
                                                description: item.description,
                                            })
                                        )
                                    }
                                    className="hover:bg-black hover:text-white px-2 rounded-full duration-500"
                                >
                                    {" "}
                                    +
                                </span>
                            </div>
                        </div>
                        <p className="w-20"> $ {item.quantity * item.price} </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CartItem;
