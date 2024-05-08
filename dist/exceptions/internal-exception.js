import { HttpException } from "./root.js";
export class InternalException extends HttpException {
    constructor(message, errorcode) {
        super(message, errorcode, 500, null);
    }
}
//# sourceMappingURL=internal-exception.js.map