import { model, Schema } from "mongoose";
import { role } from "../../../constnts/users.constants";
import { IUser, UserModel } from "./users.interface";

const userSchema = new Schema<IUser, UserModel>(
  {
    phoneNumber: {
      type: String,
      required: true,
      unique:true
    },
    role: {
      type: String,
      required: true,
      enum: role,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
    address: {
      type: String,
      required: true,
    },
    budget: {
      type: Number,
      required: true,
      default:0
    },
    income: {
      type: Number,
      required: true,
      default:0
    },
  },
  { timestamps: true }
);

export const User = model<IUser, UserModel>('User',userSchema) 
