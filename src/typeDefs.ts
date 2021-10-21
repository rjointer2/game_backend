
import { gql } from "apollo-server-express"

export const typeDefs = gql`

    type User {
        username: String
        email: String
        password: String
        score: Int
    }

    type Query {
        users: [User]
    }

    type Mutation {
        createUser( username: String, password: String, email: String ) :User
    }

`;