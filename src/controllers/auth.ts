
import { NextFunction, Request,Response } from "express"
import { prismaClient } from "../index.js";
import {hashSync,compareSync} from "bcrypt"
import jwt from "jsonwebtoken"
import { BadRequestException } from "../exceptions/bad-request.js";
import { ErrorCodes } from "../exceptions/root.js";
export const SignUp=async(req:Request,res:Response,next:NextFunction)=>{

    const {email,password,name}=req.body;

    if(!email || ! password || !name){
        throw new BadRequestException("Please Fill all the fields!",ErrorCodes.INCOMPLETE_REQUEST)
    }
    let user=await prismaClient.user.findFirst({
        where:{
            email:email
        }
    })

    if(user){
        next(new BadRequestException("User Not Found!",ErrorCodes.USER_ALREADY_EXISTS))
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
export const Login=async(req:Request,res:Response)=>{
      const { email, password} = req.body;
      if (!email || !password) {
        return res
          .status(400)
          .json({ message: "Please provide all the fields" });
      }
      let user = await prismaClient.user.findFirst({
        where: {
          email: email,
        },
      });

      if (!user) {
        throw Error("User does not exist . SignUp and then Login");
      } 
      else if (!compareSync(password,user.password)){
            throw Error("Incorrect password")
      }

      let token=jwt.sign({
        userId:user.id
      },process.env.JWT_SECRET!)

    return res.status(201).json({ user: user, message: "Signed in",token:token });
    }
