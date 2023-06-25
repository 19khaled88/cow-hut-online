import express from 'express'
import { OrderController } from './orders.controller'
import checkEligibleOrder from '../../../middleware/checkEligibleOrder'
const router = express.Router()

router.get('/orders',OrderController.getAllOrderController)
router.post('/orders',checkEligibleOrder(),OrderController.createOrderController)

export const OrderRoutes = router 