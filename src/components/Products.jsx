import React from 'react'
import ProductsCard from './ProductsCard';

const Products = () => {
  return (
    <div className='py-10'>
        <div className='flex flex-col items-center gap-4'>
            <h1 className='bg-black text-white text-2xl w-80 p-2 text-center'>Shopping Everyday</h1>
            <span className='w-20 h-[3px] bg-black rounded-xl'></span>
            <p className='max-w-[700px] text-center text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptates assumenda debitis sit voluptas, officia numquam ea recusandae quam impedit facilis voluptatibus nobis fugit? Ad, tenetur? Tenetur quasi quos facilis blanditiis animi odio qui accusamus soluta. Minima provident aspernatur eligendi dolor fugiat hic, quia reprehenderit tenetur, magni, atque officiis iste.</p>
        </div>
        <div className='max-w-screen-xl mx-auto'>
            <ProductsCard/>
        </div>
    </div>
  )
}

export default Products;