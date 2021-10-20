
const _PORT = process.env.PORT /*  Heroku's Port */ || 8080;

// modules here
import { ApolloServer } from "apollo-server-express";
import dotenv from "dotenv";
import mongoose from 'mongoose'

// type definition graphql schema

// resolvers

// middleware

// Construct Server 
const ApolloExpressServer = new ApolloServer({
    /* typeDefs here */
    /* Resolvers here */
    /* Middleware here */
});

dotenv.config();

mongoose.connect(``, async () => {

    

})