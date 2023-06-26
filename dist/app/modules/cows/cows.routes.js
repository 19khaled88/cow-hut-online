"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CowRoutes = void 0;
const express_1 = __importDefault(require("express"));
const cows_controllers_1 = require("./cows.controllers");
const router = express_1.default.Router();
router.get('/cows', cows_controllers_1.CowController.getAllCowController);
router.get('/cows/:id', cows_controllers_1.CowController.getSingleCowController);
router.post('/cows', cows_controllers_1.CowController.createCowController);
router.patch('/cows/:id', cows_controllers_1.CowController.updateCowrController);
router.delete('/cows/:id', cows_controllers_1.CowController.deleteCowController);
exports.CowRoutes = router;
