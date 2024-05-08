import express ,{Express,Request,Response} from "express";
import dotenv from "dotenv";
import rootRouter from "./routes/index.js";
import { PrismaClient } from "@prisma/client";
import { errorMiddleware } from "./middlewares/errors.js";
import { SignUpSchema } from "./schema/users.js";
const app:Express=express()

dotenv.config()

app.use(express.json())

app.use('/api',rootRouter)

app.get("/",(req:Request,res:Response)=>{
    res.send("Hello World")
})


export const prismaClient=new PrismaClient({
    log:['query']
})
// .$extends({
//     query:{
//         user:{
//       create({ args, query }) {
//         const { name, email, password } = SignUpSchema.parse(args.data);
//         const userData = { name, email, password };
//         return query({ data: userData });
//       },
//         }
//     }
// })


// console.log(process.env.JWT_SECRET)


app.use(errorMiddleware)

app.listen(process.env.PORT,()=>{
    console.log(`Listening at ${process.env.PORT}`)
})


