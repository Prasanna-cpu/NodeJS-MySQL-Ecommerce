import { ErrorCodes, HttpException } from "./exceptions/root.js";
import { InternalException } from "./exceptions/internal-exception.js";
export const errorHandler = (method) => {
    return (req, res, next) => {
        try {
            method(req, res, next);
        }
        catch (error) {
            let exception;
            if (error instanceof HttpException) {
                exception = error;
            }
            else {
                // exception=new HttpException(error.message,ErrorCodes.UNPROCESSABLE_ENTITY,500,error)
                exception = new InternalException("Something went wrong", ErrorCodes.INTERNAL_SERVER_ERROR);
            }
            next(exception);
        }
    };
};
//# sourceMappingURL=error-handler.js.map