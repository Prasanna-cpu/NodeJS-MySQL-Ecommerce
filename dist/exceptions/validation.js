import { HttpException } from "./root.js";
export class UnprocessableEntityException extends HttpException {
    constructor(error, message, errorCode, statusCode) {
        super(message, errorCode, 422, error);
    }
}
//# sourceMappingURL=validation.js.map