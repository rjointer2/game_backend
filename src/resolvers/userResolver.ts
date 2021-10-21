import { ApolloError } from "apollo-server-errors";
import UserModel from "../model/user"


export async function users(  ) {

    const users = await UserModel.find();
    if(!users) {
        throw new ApolloError(`Can't find users on the user Resolver`)
    }

    console.log(users)
    if(users.length === 0) return []

    console.log("I'm the user resolver")

}