import { Order } from "./orders.model"
import { IOrder } from "./roders.interface"


const createOrderService=async(payload:IOrder):Promise<IOrder | null>=>{
    
    const orderCreated = await Order.create(payload)
    if(!orderCreated){
        throw new Error('Failed to create this order')
    }
    return orderCreated
    
}

const getOrderService=async():Promise<IOrder | null>=>{
    const orders = Order.find()
    if(!orders){
        throw new Error("No data found")
    }
    return orders
}

export const OrderService = {
    createOrderService,
    getOrderService
}