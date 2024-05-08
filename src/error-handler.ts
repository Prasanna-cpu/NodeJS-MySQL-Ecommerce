import { Request,Response,NextFunction } from "express"
import { ErrorCodes, HttpException } from "./exceptions/root.js"
import { InternalException } from "./exceptions/internal-exception.js"

export const errorHandler=(method:Function)=>{
    return (req:Request,res:Response,next:NextFunction)=>{
        try{
            method(req,res,next)
        }

        catch(error:any){
            let exception:HttpException
            if(error instanceof HttpException){
                exception=error
            }
            else{
                // exception=new HttpException(error.message,ErrorCodes.UNPROCESSABLE_ENTITY,500,error)
                exception=new InternalException("Something went wrong",ErrorCodes.INTERNAL_SERVER_ERROR)
            }
            next(exception)
        }
    }
}