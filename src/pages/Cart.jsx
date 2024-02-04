import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/cartItem";
import { toast } from "react-toastify";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";

const Cart = () => {
    const productData = useSelector((item) => item.shopping.productData);
    const [totalAmount, setTotalAmount] = useState("");
    const userInfo = useSelector((state) => state.shopping.userInfo);
    const [payNow, setPayNow] = useState(false);

    useEffect(() => {
        let price = 0;
        productData.map((item) => {
            price += item.price * item.quantity;
            return price;
        });
        setTotalAmount(price.toFixed(2));
    }, [productData]);

    const handlePaymentCheckout = () => {
        if (userInfo) {
            setPayNow(true);
        } else {
            toast.error("please sign in to checkout");
            toggleModal();
        }
    };

    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

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
                            Sub Total
                            <span className="font-bold text-lg">
                                ${totalAmount}
                            </span>
                        </p>
                        <p className="flex items-start gap-4 text-base">
                            Shipping
                            <span className="">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Pariatur rerum
                            </span>
                        </p>
                    </div>
                    <p className="flex justify-between mt-6  text-lg">
                        Total Amount
                        <span className="font-bold text-xl">
                            {" "}
                            $ {totalAmount}{" "}
                        </span>
                    </p>
                    <button
                        onClick={handlePaymentCheckout}
                        className="bg-black text-white text-base w-full py-3 mt-6 hover:bg-gray-800 duration-200 rounded"
                    >
                        proceed to checkout
                    </button>
                    {payNow && (
                        <button className="bg-black text-white text-base w-full py-3 mt-6 hover:bg-gray-800 duration-200 rounded">
                            Go for Payment
                        </button>
                    )}

                    <Modal isOpen={modalOpen} toggleModal={toggleModal}>
                        <div className="flex flex-col items-center">
                            <p className="mb-7">Please Login to checkout</p>
                            <Link to="/login">
                                <button className="w-96  text-base font-semibold border border-gray-300 px-6 py-2 hover:bg-blue-950  mt-6  cursor-pointer rounded bg-gray-100 text-black hover:text-white">
                                    LOGIN
                                </button>
                            </Link>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default Cart;
