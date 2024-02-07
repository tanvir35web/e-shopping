import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/cartItem";
import { ToastContainer, toast } from "react-toastify";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";
import { cartHeroImg } from "../assets";

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
                className="w-full h-[300px] object-cover mt-[80px]"
                src={cartHeroImg}
                alt="cart section banner image"
            />

            <div className="max-w-screen-xl mx-auto py-20 flex flex-wrap gap-10  w-11/12">
                <CartItem />
                <div className="lg:w-[350px] h-[500px] bg-gray-100  py-10 mt-0 md:mt-14 px-6 rounded-lg  md:w-full">
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
            <ToastContainer
                position="top-right"
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

export default Cart;
