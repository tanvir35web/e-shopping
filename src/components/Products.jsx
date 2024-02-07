import React from "react";
import ProductsCard from "./ProductsCard";

const Products = ({ products }) => {
    return (
        <div className="py-10">
            <div className="flex flex-col items-center gap-4">
                <h1 className="bg-gray-900 rounded-2xl text-white text-2xl w-80 px-4 py-2 text-center">
                    Shopping Everyday
                </h1>
                <span className="w-20 h-[3px] bg-black rounded-xl"></span>
                <p className="max-w-[900px] text-center text-gray-600 px-6  text-justify ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos, voluptates assumenda debitis sit voluptas, officia
                    numquam ea recusandae quam impedit facilis voluptatibus
                    nobis fugit? Ad, tenetur? Tenetur quasi quos facilis
                    blanditiis animi odio qui accusamus soluta. Minima provident
                    aspernatur eligendi dolor fugiat hic, quia reprehenderit
                    tenetur, magni, atque officiis iste.
                </p>
            </div>
            <div className="max-w-screen-xl mx-auto py-10 grid lg:grid-cols-4 gap-10 sm:grid-cols-2 w-11/12 ">
                {products.map((item) => (
                    <ProductsCard key={item._id} product={item} />
                ))}
            </div>
        </div>
    );
};

export default Products;
