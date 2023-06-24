import { RequestHandler } from "express";
import { UserService } from "./users.services";

const createUserController: RequestHandler = async (req, res, next) => {
  try {
    const body = req.body;
    const result = await UserService.createUserService(body);
    res.status(200).json({
      "success":true ,
      "statusCode":200,
      "message":'User created',
      "data":result
    });
  } catch (error) {
    // res.status(400).json({
    //   error:error
    // });
    // console.log(error)
    next(error)
  }
};

export const UserController = {
  createUserController,
};
