const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs } = require('./schema');
const { resolvers } = require('./resolvers');
require ('dotenv').config();

const startServer = async () => {
    const app = express();
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });

    await server.start();
    server.applyMiddleware({ app });

    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`User service running at http://localhost:${PORT}${server.graphqlPath}`);
    });
};

// startServer().catch((error) => {
//     console.error('Error starting server:', error);
//     process.exit(1);
// });

startServer();