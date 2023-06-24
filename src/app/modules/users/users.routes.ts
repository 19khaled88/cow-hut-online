import express from "express";
import { UserController } from "./users.controllers";
const router = express.Router()


router.get('/users')
router.get('/:id')
router.post('/auth/signup',UserController.createUserController)
router.patch('/users/:id')
router.delete('users/:id')
export const UserRoutes = router