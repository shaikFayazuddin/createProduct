import mongoose from "mongoose"
import Product from "../models/productModel.js"

export const getProducts = async(req,res)=>{
  try{
    const products = await Product.find({})
    console.log(products)
    return res.status(200).json({success:true, data: products})
  }catch(error){
    console.log("Error getting the product details",error.message)
    return res.json(500).json({success : false, message: "Server error" })
  }
}

export const createProducts = async (req,res)=>{
  const product = req.body

  if(!product.name || !product.price || !product.image){
    return res.status(400).json({success : false, message : "Please provide all the fields"})
  }

  const newProduct = new Product(product)

  try{
    await newProduct.save()
    return res.status(200).json({success : true, message : "Product created successfully",data: newProduct})
  }catch(error){
    console.error("Error in creating a new product", error.message)
    return res.status(500).json({success : false, message : "Internal Server Error"})
  }
  
}
export const updateProducts = async(req,res)=>{
  const {id} = req.params
  const product = req.body

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({success:false,message:"Invalid Product ID"})
  }

  try{
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {new:true})
    return res.status(200).json({success:true,message:"Product updated successfully", data : updatedProduct})
  }catch(error){
    console.log("Error in updating the product details")
    return res.status(400).json({success:false, message : "Product not found"})
  } 
}

export const deleteProducts = async(req,res)=>{
  const {id} = req.params

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({success:false,message:"Invalid Product ID"})
  }

  try{
    await Product.findByIdAndDelete(id)
    return res.status(200).json({success:true,message:"Product deleted successfully"})
  }catch(error){
    console.log("Error in deleting the product", error.message)
    return res.status(500).json({success : false, message : "Server Error"})
  }
}