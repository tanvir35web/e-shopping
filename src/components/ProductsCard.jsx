import React from "react";
import { BsArrowRight } from "react-icons/bs";

const ProductsCard = ({ product }) => {
    const productClick = () => {
      console.log("clicked");
    }
    return (
        <div onClick={productClick} className="group border-[1px] relative ">
            <div className="w-full h-96 overflow-hidden cursor-pointer ">
                <img
                    className="w-full h-full object-cover group-hover:scale-110 duration-500 "
                    src={product.image}
                    alt="product Image"
                />
            </div>

            <div className="w-full  px-2 py-4 flex justify-between">
                <div>
                    <h2 className="text-base font-semibold">
                        {product.title.substring(0, 15)}
                    </h2>
                </div>
                <div className="flex justify-end gap-2 relative overflow-hidden w-28 text-sm">
                    <div className="flex flex-row gap-2 transform group-hover:translate-x-24 transition-transform duration-500">
                        <p className="line-through text-gray-500">
                            $ {product.oldPrice}
                        </p>
                        <p className="font-semibold">$ {product.price}</p>
                    </div>
                    <p className="absolute z-20 w-[100] text-gray-500 hover:text-gray-900 flex items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500 ">
                        add to cart
                        <span>
                            <BsArrowRight />
                        </span>
                    </p>
                </div>
            </div>
            <div className="text-base mx-2 my-1">{product.category}</div>
            <div className="absolute top-4 right-0">{product.isNew && <p className="bg-black text-white font-semibold px-6 py-1">sale</p>}</div>
        </div>
    );
};

export default ProductsCard;
