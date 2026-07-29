import { gql } from "apollo-server";

const typeDefs = gql`

    type Suggestion {
        id: ID!
        text: String!
        href: String!
    }

    type Query {

        suggestions(query: String!): [Suggestion!]!

    }

`;

export default typeDefs;