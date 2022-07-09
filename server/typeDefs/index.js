const { gql } = require("apollo-server");

const typeDefs = gql`

    #decalring scalar

    scalar Void

    type Query {
        transactions(offset: Int): [Transaction]
        count: Int
    }
    type Mutation {
        create(input: createTransactions):  Void
    }

    #decalring types

    type Transaction{
        id: ID!
        sender: String!
        receiver: String!
        amount: Float!
        timestamp: String!
    }

    #declaring inputs

    input createTransactions{
        sender: String!
        receiver: String!
        amount: Float!
        timestamp: String!
    }

`;

module.exports = typeDefs;