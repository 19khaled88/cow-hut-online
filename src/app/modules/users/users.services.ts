import { IUser } from "./users.interface"
import { User } from "./users.model"


const createUserService=async(payload:IUser):Promise<IUser | null>=>{
    // try {
    //     const userCreated = await User.create(payload)
    //     return userCreated
    // } catch (error) {
    //     return null
    // }
    const userCreated = await User.create(payload)
    if(!userCreated){
        throw new Error('Failed to create')
    }
    return userCreated
    
}

const getUserService=async():Promise<IUser[] | null>=>{
    const users = User.find()
    if(!users){
        throw new Error("No data found")
    }
    return users
}

const getSingleUserService=async(id:string)=>{
    
    const singleUser = await User.findById(id).exec()
    if(!singleUser){
        throw new Error('User id is invalid')
    } 
    return singleUser
}
type IUpdateReponse<T> = { 
    [  K in keyof T] : string | number
 }
const updateUserService=async(id:string,payload:IUpdateReponse<IUser>)=>{
   
    const updatedUser = await User.findByIdAndUpdate(id,payload,{ new: true })
    if(!updatedUser){
        throw new Error('User id is invalid')
    } 
    return updatedUser
   
}

const deleteUserService=async(id:string)=>{
    
    const deletedUser = await User.findByIdAndDelete(id)
    if(!deletedUser){
        throw new Error('User id is invalid')
    } 
    return deletedUser
}

export const UserService={
    createUserService,
    getUserService,
    getSingleUserService,
    updateUserService,
    deleteUserService
}