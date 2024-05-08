import { ErrorCodes, HttpException } from "./root.js";

export class BadRequestException extends HttpException{
    constructor(message:string,errorcode:ErrorCodes){
        super(message,errorcode,400,null)
    }
}