import { HttpException } from "./root.js";
import { ErrorCodes } from "./root.js";
export class InternalException extends HttpException{
    constructor(message:string,errorcode:ErrorCodes){
        super(message,errorcode,500,null)

    }
}