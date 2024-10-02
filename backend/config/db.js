import mongoose from "mongoose"

export const connectDb = async ()=>{
  try{
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`DB Connection established ${conn.connection.host}`)
  }catch(error){
    console.error(`Error connecting to DB ${error.message}`)
    process.exit(1)
  }
}