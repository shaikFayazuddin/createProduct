import {create} from "zustand"


export const useProductStore = create((set)=>({
  products : [],
  setProducts : (products) => set({products}),

  //to create new Products
  createProducts : async (newProduct) => {

    if(!newProduct.name || !newProduct.price || !newProduct.image){
      return {success : false, message : "Please fill all the fields"}
    }

    const res = await fetch("/api/products", {
      method : "POST",   
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(newProduct)
    });

    const data = await res.json()//from JSON to js object
    console.log(data)

    set((state)=>({products : [...state.products, data.data]}))
    return {success : true, message : data.message}
  },


  //to get all the products from the DB
  fetchProducts : async () => {
    const res = await fetch("api/products")
    const data = await res.json()
    console.log(data)
    set({products : data.data})
  },

  //to delete products from Db using a product id
  deleteProducts : async(pid)=>{
    const res = await fetch(`api/products/${pid}`,{
      method:'DELETE'
    })
    const data = await res.json()
    console.log(data)
    if(!data.success){
      return {success:false, message :data.message}
    }
    set((state)=>({products:state.products.filter((product)=>product._id !==pid)}))
    return {success:true, message:data.message}

  },

  editProducts : async (pid, updatedProduct)=>{

    // if(!updatedProduct.name && !updatedProduct.price && !updatedProduct.image){
    //   return {success : false, message : "Please fill any one field to update"}
    // }  
    const res = await fetch(`api/products/${pid}`,{
      method:"PUT",
      headers:{
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(updatedProduct)
    })

    const data = await res.json()
    console.log(data)

    if(!data.success){
      return {success : false, message : data.message}
    }
    set((state)=>({
      products : state.products.map((product)=>(product._id === pid ? data.data : product))
    }))
    return {success:true, message:data.message}
  }
}))