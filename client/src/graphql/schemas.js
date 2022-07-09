import { gql } from "@apollo/client";

export const ADD_TRANSACTION = gql`
    mutation Mutation($input: createTransactions) {
        create(input: $input)
    }
`;

export const SHOW_TRANSACTIONS = gql`
    query Query($offset: Int) {
        transactions(offset: $offset) {
            id
            sender
            receiver
            amount
            timestamp
        }
    }
`;