// Error Message , Status codes

export class HttpException extends Error{
    message:string;
    errorCode:ErrorCodes;
    statusCode:number;
    error:any;


    constructor(message:string,errorCode:ErrorCodes,statusCode:number,error:any){
        super(message);
        this.message=message;
        this.errorCode=errorCode;
        this.statusCode=statusCode;
        this.error=error;
    }
     
}


export enum ErrorCodes{
    USER_NOT_FOUND=1001,
    USER_ALREADY_EXISTS=1002,
    INCORRECT_PASSWORD=1003,
    INCOMPLETE_REQUEST=1004,
    UNPROCESSABLE_ENTITY=1005,
    INTERNAL_SERVER_ERROR=1006,
    UNAUTHORIZED=1007,
    BAD_REQUEST=1008,
    UNAUTHENTICATED=1009,
    INVALID_TOKEN=1010,
}
