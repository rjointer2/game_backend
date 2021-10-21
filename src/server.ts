
const _PORT = process.env.PORT /*  Heroku's Port */ || 8080;

// modules here
import { ApolloServer } from "apollo-server-express";

// packages 
import dotenv from "dotenv";
import mongoose from 'mongoose';
import express from "express";
import middleware from "./server_modules/middleware/middleware";
import { typeDefs } from "./typeDefs";
import resolvers from "./rootResolver";



// type definition graphql schema

// resolvers

// middleware

// Construct Server 
const ApolloExpressServer = new ApolloServer({
    typeDefs, /* typeDefs here */
    resolvers,/* Resolvers here */
    context: middleware/* Middleware here */
});

dotenv.config();

mongoose.connect(`${process.env.MONGO_URI}`, async () => {

    const server = express();
    await ApolloExpressServer.start();
    ApolloExpressServer.applyMiddleware({ app: server });

    server.listen(_PORT, () => {
        console.log(`coneected to DB`)
    })

})