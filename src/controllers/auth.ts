
import { Request,Response } from "express"
import { prismaClient } from "../index.js";
import {hashSync} from "bcrypt"

export const SignUp=async(req:Request,res:Response)=>{

    const {email,password,name}=req.body;
    let user=await prismaClient.user.findFirst({
        where:{
            email:email
        }
    })

    if(user){
        throw Error("User already exists , Login instead")
    }

    else{
        let user=await prismaClient.user.create({
            data:{
                email:email,
                password: hashSync(password,15),
                name:name
            }
        })

        return res.status(201).json({user:user,message:"Created"})
    }
   
}
export const Login=(req:Request,res:Response)=>{
    res.send("Login")
}