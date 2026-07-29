import { ApolloServer } from "apollo-server";
import env from "./config/env.js";
import typeDefs from "./graphql/schema.js";
import resolvers from "./graphql/resolvers.js";


async function startServer() {

    try {

        const server = new ApolloServer({
            typeDefs,
            resolvers,
        });

        const { url } = await server.listen({
            port: env.PORT,
        });

        console.log(`🚀 Server running at ${url}`);

    }
    catch (error) {

        console.error("Failed to start Apollo Server.");
        console.error(error);

        process.exit(1);

    }

}

startServer();
