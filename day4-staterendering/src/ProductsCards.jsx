import React from 'react'

const ProductsCards = ({product,del}) => {

  return (
    <div className='p-2 border-2 rounded flex flex-col gap-4'>
        <div className='w-60'>
            <img src={product.image} alt="" />
        </div>
        <div>
            <h2 className='font-semibold'>{product.title}</h2>
            <p className='text-xs'>{product.category}</p>
            <p className='text-green-600'>{product.price}</p>
        </div>
        <button onClick={() => del(product.id)} className='p-2 bg-red-500 rounded'>Delete</button>
    </div>
  )
}

export default ProductsCards