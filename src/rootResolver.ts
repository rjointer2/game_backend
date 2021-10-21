
import { users, createUser } from "./resolvers/userResolver"

const resolvers = {
    Query: {
        users
    },
    Mutation: {
        createUser
    }
}

export default resolvers;