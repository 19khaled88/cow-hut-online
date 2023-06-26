"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const users_controllers_1 = require("./users.controllers");
const router = express_1.default.Router();
router.get('/users', users_controllers_1.UserController.getAllUserController);
router.get('/users/:id', users_controllers_1.UserController.getSingleUserController);
router.post('/auth/signup', users_controllers_1.UserController.createUserController);
router.patch('/users/:id', users_controllers_1.UserController.updateUserController);
router.delete('/users/:id', users_controllers_1.UserController.deleteUserController);
exports.UserRoutes = router;
