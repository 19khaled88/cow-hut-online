"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./routes/index"));
const globalErrorHandler_1 = __importDefault(require("./middleware/globalErrorHandler"));
const app = (0, express_1.default)();
//middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
//routes
app.use("/api/v1", index_1.default);
app.get("/", (req, res, next) => {
    throw new Error("Test path");
    // next('Ore bana error')
});
app.get("/get", (req, res, next) => {
    const number = 2;
    if (number === 1) {
        res.status(200).json({
            success: true,
            message: "response true",
        });
    }
    next();
});
//If no route found
app.all('*', (req, res, next) => {
    // res.status(404).json({
    //     status:'fail',
    //     message:'can not find desired url'
    // })
    // err?.status = 'fail';
    // err?.statusCode = 404;
    const err = new Error('Your route is not valid');
    next(err);
});
app.use(globalErrorHandler_1.default);
exports.default = app;
