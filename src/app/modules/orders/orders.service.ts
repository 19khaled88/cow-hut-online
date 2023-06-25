import { User } from "../users/users.model";
import { Order } from "./orders.model";
import { IOrder, IOrders, IOrderService } from "./roders.interface";

const createOrderService = async (payload: IOrderService ): Promise<IOrder | null> => {
  const orderCreated = await Order.create(payload);
  
  if (!orderCreated) {
    throw new Error("Failed to create this order");
  } else {
    const data = payload?.balance - payload?.price;
    const updated = await User.findByIdAndUpdate(payload.buyer, {
      budget: data,
    });
    return orderCreated;
  }
};

const getOrderService = async (): Promise<IOrder[] | null> => {
  const orders = Order.find();
  if (!orders) {
    throw new Error("No data found");
  }
  return orders;
};

export const OrderService = {
  createOrderService,
  getOrderService,
};
