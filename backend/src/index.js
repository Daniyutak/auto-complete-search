import { ApolloServer } from "apollo-server";
import env from "./config/env.js";
import typeDefs from "./graphql/schema.js";
import resolvers from "./graphql/resolvers.js";


const server = new ApolloServer({
    typeDefs,
    resolvers
});

await server.listen({
    port: env.PORT
}).then(({ url }) => {
    console.log(`Server ready: ${url}`);
});

