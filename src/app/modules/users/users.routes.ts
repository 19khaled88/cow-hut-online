import express from "express";
import { UserController } from "./users.controllers";
const router = express.Router()


router.get('/users',UserController.getAllUserController)
router.get('/users/:id',UserController.getSingleUserController)
router.post('/auth/signup',UserController.createUserController)
router.patch('/users/:id',UserController.updateUserController)
router.delete('/users/:id',UserController.deleteUserController)
export const UserRoutes = router