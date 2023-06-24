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

export const UserService={
    createUserService
}