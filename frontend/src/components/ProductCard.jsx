// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useProductStore } from "../store/product"

const ProductCard = ({product}) => {

  const {deleteProducts, editProducts} = useProductStore()


  const handleDeleteProduct = async (pid)=>{
    const {success,message} = await deleteProducts(pid)
    if(!success){
      window.alert(message)
    }else{
      window.confirm(message)
    }
  }

  const handleEditProduct = async (pid) => {
    
    const name = window.prompt("Enter new name,if:", product.name);
    const price = window.prompt("Enter new price,if:", product.price);
    const image = window.prompt("Enter new image URL,if:", product.image);

    
    if (!name && !price && !image) {
      window.alert("Please fill at least one field");
      return;
    }

    
    const updatedProduct = {
      name: name ? name : product.name,  
      price: price ? price : product.price,
      image: image ? image : product.image,
    };

    
    const { success, message } = await editProducts(pid, updatedProduct)
    if (success) {
      window.alert("Product updated successfully!",message);
    } else {
      window.alert("Error in updating");
    }
  };

  return (
    <div>

      <div>
        <img src={product.image} alt={product.name}></img>
      </div>

      <div>
        <h3>{product.name}</h3>
      </div>

      <div>
        <h4>{product.price}</h4>
      </div>

      <div>
        <button onClick={()=>handleEditProduct(product._id)}>Edit</button>
      </div>

      <div>
        <button onClick={()=>handleDeleteProduct(product._id)}>Delete</button>
      </div>

    </div>
  )
}

export default ProductCard
