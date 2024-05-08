export const errorMiddleware = (error, req, res, next) => {
    res.status(error.statusCode).json({
        message: error.message,
        error: error.errorCode,
        errors: error.error
    });
};
//# sourceMappingURL=errors.js.map