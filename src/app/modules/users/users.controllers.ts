import { RequestHandler } from "express";
import { object } from "zod/lib";
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

const getAllUserController:RequestHandler=async(req,res,next)=>{
  try {
    const users = await UserService.getUserService()
    res.status(200).json({
      "success":true ,
      "statusCode":200,
      "message":'Users found',
      "data":users
    });
  } catch (error) {
    next(error)
  }
}

const getSingleUserController:RequestHandler=async(req,res,next)=>{
  try {
    const user = await UserService.getSingleUserService(req.params.id)
    res.status(200).json({
      "success":true ,
      "statusCode":200,
      "message":'User found',
      "data":user
    });
  } catch (error) {
    next(error)
  }
}

const updateUserController:RequestHandler=async(req,res,next)=>{
  try {
    const user = await UserService.updateUserService(req.params.id,req.body)
    res.status(200).json({
      "success":true ,
      "statusCode":200,
      "message":'User Upadated successfully',
      "data":user
    });
  } catch (error) {
    next(error)
  }
}

const deleteUserController:RequestHandler=async(req,res,next)=>{
  try {
    const user = await UserService.deleteUserService(req.params.id)
    res.status(200).json({
      "success":true ,
      "statusCode":200,
      "message":'User deleted successfully',
      "data":user
    });
  } catch (error) {
    next(error)
  }
}
export const UserController = {
  createUserController,
  getAllUserController,
  getSingleUserController,
  updateUserController,
  deleteUserController
};
