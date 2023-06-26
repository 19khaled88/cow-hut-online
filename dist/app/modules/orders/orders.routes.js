"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const orders_controller_1 = require("./orders.controller");
const checkEligibleOrder_1 = __importDefault(require("../../../middleware/checkEligibleOrder"));
const router = express_1.default.Router();
router.get('/orders', orders_controller_1.OrderController.getAllOrderController);
router.post('/orders', (0, checkEligibleOrder_1.default)(), orders_controller_1.OrderController.createOrderController);
exports.OrderRoutes = router;
