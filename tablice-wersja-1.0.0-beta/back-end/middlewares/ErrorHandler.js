const ErrorHandler = (err, req, res, next) => {
    console.error(err);
    if (!res.headersSent) {
        const errStatus = err.status || 500;
        const errName = err.name || "Internal Server Error";
        res.status(errStatus).json({
            success: false,
            status: errStatus,
            name: errName,
            message: err.message || {},
            stack: process.env.NODE_ENV === "development" ? err.stack : {},
        });
    } else {
        console.error("Headers already sent. Unable to send error response.");
    }
};

export default ErrorHandler;
