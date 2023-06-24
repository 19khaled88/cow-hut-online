import { Cow } from "../cows/cows.model";
import { User } from "../users/users.model";
import { OrderService } from "./orders.service";

const createOrderController: RequestHandler = async (req, res, next) => {
    	
	try {
		const buyer = req.body.buyer;
		const cow = req.body.cow;
		const isBuyerEligible = await User.findById(buyer);
		const isCowAvailable = await Cow.findById(cow);
       
		if (isBuyerEligible?.budget >= isCowAvailable?.price) {
			const result = await OrderService.createOrderService(req.body);
            console.log(isBuyerEligible,isCowAvailable)
			res.status(200).json({
				success: true,
				statusCode: 200,
				message: "This order created",
				data: result,
			});
		} else {
            res.status(200).json({
				success: true,
				statusCode: 200,
				message: "You do not have enough found",
				data: '',
			});
		}
	} catch (error) {
		next(error);
	}
};

const getAllOrderController: RequestHandler = async (req, res, next) => {
	try {
		const orders = await OrderService.getOrderService();
		res.status(200).json({
			success: true,
			statusCode: 200,
			message: "orders found",
			data: orders,
		});
	} catch (error) {
		next(error);
	}
};

export const OrderController = {
	createOrderController,
	getAllOrderController,
};
