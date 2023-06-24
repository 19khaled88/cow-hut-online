import { Model } from "mongoose";

export type IOrder = {
	buyer: string;
	cow: string;
	createdAt: Date;
	updatedAt: Date;
};

export type OrderModel = Model<IOrder>;
