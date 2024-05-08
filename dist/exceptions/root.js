// Error Message , Status codes
export class HttpException extends Error {
    constructor(message, errorCode, statusCode, error) {
        super(message);
        this.message = message;
        this.errorCode = errorCode;
        this.statusCode = statusCode;
        this.error = error;
    }
}
export var ErrorCodes;
(function (ErrorCodes) {
    ErrorCodes[ErrorCodes["USER_NOT_FOUND"] = 1001] = "USER_NOT_FOUND";
    ErrorCodes[ErrorCodes["USER_ALREADY_EXISTS"] = 1002] = "USER_ALREADY_EXISTS";
    ErrorCodes[ErrorCodes["INCORRECT_PASSWORD"] = 1003] = "INCORRECT_PASSWORD";
    ErrorCodes[ErrorCodes["INCOMPLETE_REQUEST"] = 1004] = "INCOMPLETE_REQUEST";
    ErrorCodes[ErrorCodes["UNPROCESSABLE_ENTITY"] = 1005] = "UNPROCESSABLE_ENTITY";
    ErrorCodes[ErrorCodes["INTERNAL_SERVER_ERROR"] = 1006] = "INTERNAL_SERVER_ERROR";
    ErrorCodes[ErrorCodes["UNAUTHORIZED"] = 1007] = "UNAUTHORIZED";
    ErrorCodes[ErrorCodes["BAD_REQUEST"] = 1008] = "BAD_REQUEST";
    ErrorCodes[ErrorCodes["UNAUTHENTICATED"] = 1009] = "UNAUTHENTICATED";
    ErrorCodes[ErrorCodes["INVALID_TOKEN"] = 1010] = "INVALID_TOKEN";
})(ErrorCodes || (ErrorCodes = {}));
//# sourceMappingURL=root.js.map