import { HttpException } from "./root.js";
export class BadRequestException extends HttpException {
    constructor(message, errorcode) {
        super(message, errorcode, 400, null);
    }
}
//# sourceMappingURL=bad-request.js.map