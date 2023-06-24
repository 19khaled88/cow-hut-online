import { Model } from "mongoose"

export type Role ='Seller' | 'Buyer'
export type IUser ={
    // id:string
    phoneNumber:string 
    role:Role
    password:string 
    name:{
        firstName:string 
        lastName:string
    } 
    
    address:string 
    budget:number 
    income:number 
    createdAt:Date
    updatedAt:Date
}

export type UserModel = Model<IUser>
