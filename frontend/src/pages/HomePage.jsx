// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import { useProductStore } from '../store/product'
import  ProductCard  from '../components/ProductCard.jsx'

const HomePage = ()=>{
  const { fetchProducts,products } = useProductStore()

  useEffect(()=>{
    fetchProducts()
  },[fetchProducts])

  console.log(products)

  return <div>
    <div>
      HomePage
    </div>

    <div>
      {products.map((product)=>(
        <ProductCard key={product._id} product={product}/>
      ))}
    </div>

  </div>
}

export default HomePage
