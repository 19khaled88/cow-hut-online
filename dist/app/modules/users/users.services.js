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
exports.UserService = void 0;
const users_model_1 = require("./users.model");
const createUserService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // try {
    //     const userCreated = await User.create(payload)
    //     return userCreated
    // } catch (error) {
    //     return null
    // }
    const userCreated = yield users_model_1.User.create(payload);
    if (!userCreated) {
        throw new Error('Failed to create');
    }
    return userCreated;
});
const getUserService = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = users_model_1.User.find();
    if (!users) {
        throw new Error("No data found");
    }
    return users;
});
const getSingleUserService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const singleUser = yield users_model_1.User.findById(id).exec();
    if (!singleUser) {
        throw new Error('User id is invalid');
    }
    return singleUser;
});
// type IUpdateReponse<T> = { 
//     [  K in keyof T] : string | number
//  }
const updateUserService = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedUser = yield users_model_1.User.findByIdAndUpdate(id, payload, { new: true });
    if (!updatedUser) {
        throw new Error('User id is invalid');
    }
    return updatedUser;
});
const deleteUserService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedUser = yield users_model_1.User.findByIdAndDelete(id);
    if (!deletedUser) {
        throw new Error('User id is invalid');
    }
    return deletedUser;
});
exports.UserService = {
    createUserService,
    getUserService,
    getSingleUserService,
    updateUserService,
    deleteUserService
};
