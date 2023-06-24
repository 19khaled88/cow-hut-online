import express from 'express'
import { OrderController } from './orders.controller'
const router = express.Router()

router.get('/orders',OrderController.getAllOrderController)
router.post('/orders',OrderController.createOrderController)

export const OrderRoutes = router 