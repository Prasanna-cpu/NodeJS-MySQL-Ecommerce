import { ErrorCodes, HttpException } from "./root.js";

export class UnprocessableEntityException extends HttpException{
    constructor(error:any,message:string,errorCode:ErrorCodes,statusCode:number){
        super(message,errorCode,422,error)
    }
}