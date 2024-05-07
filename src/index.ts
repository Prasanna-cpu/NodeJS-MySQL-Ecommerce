import express ,{Express,Request,Response} from "express";
import dotenv from "dotenv";
import rootRouter from "./routes/index.js";
import { PrismaClient } from "@prisma/client";
const app:Express=express()

dotenv.config()

app.use('/api',rootRouter)

app.get("/",(req:Request,res:Response)=>{
    res.send("Hello World")
})


export const prismaClient=new PrismaClient({
    log:['query']
})


app.listen(process.env.PORT,()=>{
    console.log(`Listening at ${process.env.PORT}`)
})


