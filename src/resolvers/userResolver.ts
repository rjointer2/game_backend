import { ApolloError } from "apollo-server-errors";
import UserModel, { User } from "../model/user";
import { Middleware } from "../server_modules/middleware/middleware";


export async function users(  ) {

    const users = await UserModel.find();
    if(!users) {
        throw new ApolloError(`Can't find users on the user Resolver`)
    }

    console.log(users)
    if(users.length === 0) return []

    console.log("I'm the user resolver")

}

export async function createUser( _: never, args: User, middleware: Middleware  ) {
    
    const { verify } = middleware;

    console.log(args)

    const user = await UserModel.create(args);

    if(!user) {
        throw new ApolloError(`can not create ${args.username}'s account'`)
    }

    return user

}