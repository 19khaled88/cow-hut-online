"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const users_services_1 = require("./users.services");
const createUserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const result = yield users_services_1.UserService.createUserService(body);
        res.status(200).json({
            "success": true,
            "statusCode": 200,
            "message": 'User created',
            "data": result
        });
    }
    catch (error) {
        // res.status(400).json({
        //   error:error
        // });
        // console.log(error)
        next(error);
    }
});
const getAllUserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield users_services_1.UserService.getUserService();
        res.status(200).json({
            "success": true,
            "statusCode": 200,
            "message": 'Users found',
            "data": users
        });
    }
    catch (error) {
        next(error);
    }
});
const getSingleUserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield users_services_1.UserService.getSingleUserService(req.params.id);
        res.status(200).json({
            "success": true,
            "statusCode": 200,
            "message": 'User found',
            "data": user
        });
    }
    catch (error) {
        next(error);
    }
});
const updateUserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield users_services_1.UserService.updateUserService(req.params.id, req.body);
        res.status(200).json({
            "success": true,
            "statusCode": 200,
            "message": 'User Upadated successfully',
            "data": user
        });
    }
    catch (error) {
        next(error);
    }
});
const deleteUserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield users_services_1.UserService.deleteUserService(req.params.id);
        res.status(200).json({
            "success": true,
            "statusCode": 200,
            "message": 'User deleted successfully',
            "data": user
        });
    }
    catch (error) {
        next(error);
    }
});
exports.UserController = {
    createUserController,
    getAllUserController,
    getSingleUserController,
    updateUserController,
    deleteUserController
};
