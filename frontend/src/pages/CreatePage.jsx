// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState } from 'react'
import { useProductStore } from '../store/product'

const CreatePage = ()=>{
  const [newProduct, setNewProduct] = useState({
    name : "",
    price : "",
    image : ""
  })

  const { createProducts } = useProductStore()

  const handleAddProduct = async ()=>{
    const {success,message} = await createProducts(newProduct)
    console.log("Success:", success)
    console.log("Message:" , message)
    if(!success){
      window.alert("Please fill all the details", message)
    }else{
      window.confirm("Product created successfully",message)
    }
    setNewProduct({ 
    name : "",
    price : "",
    image : ""
  })
  }

  return <div>
    <div>
      <h1>Create New Product</h1>
    </div>

    <div>
      <input 
        type="text"
        placeholder='Product Name'      
        name='name'
        value={newProduct.name}
        onChange={(e)=>setNewProduct({...newProduct, name:e.target.value})} />

      <input 
        type="number"
        placeholder='Product Price'
        name='price'
        value={newProduct.price}
        onChange={(e)=>setNewProduct({...newProduct, price:e.target.value})} />

      <input 
        type="text"
        placeholder='Product Image URL'
        name='image'
        value={newProduct.image}
        onChange={(e)=>setNewProduct({...newProduct, image:e.target.value})} />

    </div>

    <div>
      <button onClick={handleAddProduct}>Submit</button>
    </div>
  </div>
}

export default CreatePage
