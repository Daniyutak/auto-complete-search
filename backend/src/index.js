import dotenv from "dotenv";
import { ApolloServer } from "apollo-server";
import typeDefs from "./graphql/schema.js";
import resolvers from "./graphql/resolvers.js";

dotenv.config();

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen({
    port: process.env.PORT
}).then(({ url }) => {
    console.log(`Server ready: ${url}`);
});

