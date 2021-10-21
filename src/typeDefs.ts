
import { gql } from "apollo-server-express"

export const typeDefs = gql`

    type User {
        name: String
        email: String
        password: String
        score: Int
    }

    type Query {
        users: [User]
    }

`;