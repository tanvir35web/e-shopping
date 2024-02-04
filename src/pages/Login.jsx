import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/shoppingSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const userInfo = useSelector((state) => state.shopping.userInfo);

    const handleGoogleLogin = (e) => {
        e.preventDefault();
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                dispatch(
                    addUser({
                        _id: user.uid,
                        name: user.displayName,
                        email: user.email,
                        image: user.photoURL,
                    })
                );
                toast.success("Login Successfully");
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleGoogleSignOut = () => {
        signOut(auth)
            .then(() => {
                dispatch(removeUser());
                toast.success("Log Out Successfully");
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="p-10 w-full h-[500px] flex items-center justify-center">
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-6">
                    {!userInfo && (
                        <div
                            onClick={handleGoogleLogin}
                            className="flex items-center justify-center gap-4 border h-full w-[350px] px-8 py-4 bg-gray-100 cursor-pointer rounded hover:bg-gray-200"
                        >
                            <FcGoogle className="text-3xl" />
                            <span className="text-xl font-normal">
                                Login with Google
                            </span>
                        </div>
                    )}

                    {userInfo && (
                        <div className="bg-gray-100 px-6 py-8 flex flex-col gap-4 items-center rounded-2xl gray-300 border-[1px]">
                            <img
                                className="w-24 rounded-full"
                                src={userInfo.image}
                                alt=""
                            />
                            <h1 className="font-semibold text-2xl">
                                {userInfo.name}
                            </h1>
                            <p className="-mt-2">{userInfo.email}</p>
                        </div>
                    )}

                    {userInfo && (
                        <p
                            onClick={handleGoogleSignOut}
                            className="text-xl text-center font-normal border px-8 h-full py-4 bg-gray-900 text-white cursor-pointer rounded hover:bg-gray-200 hover:text-black duration-150"
                        >
                            Sign Out
                        </p>
                    )}
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

export default Login;
