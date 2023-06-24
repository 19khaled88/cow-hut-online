import { model, Schema } from "mongoose";
import { IOrder, OrderModel } from "./roders.interface";

const orderSchema = new Schema<IUser, UserModel>(
	{
		buyer: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
		cow: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: "Cow",
		},
	},
	{ timestamps: true }
);

export const Order = model<IOrder, OrderModel>("Order", orderSchema);
