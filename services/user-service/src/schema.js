const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        id: ID!,
        first_name: String!,
        last_name: String!,
        email: String!
    }
    
    type Query {
        users: [User]
    }
`;

module.exports = {typeDefs};