import express from "express"
import dotenv from "dotenv"
import {connectDb} from "./config/db.js"
import productRouter from "./routes/productRoute.js"
import path from "path"

dotenv.config()

const app = express()

app.use(express.json())

const PORT = process.env.PORT

const _dirname = path.resolve()

app.use("/api/products", productRouter)

if(process.env.NODE_ENV="production"){
  app.use(express.static(path.join(_dirname,"/frontend/dist")))

  app.get("*", (req,res)=>{
    res.sendFile(path.resolve(_dirname,"frontend", "dist","index.html"))
  })
}

app.listen(PORT, ()=>{
  connectDb()
  console.log("Server running on http://localhost:" + PORT)
})