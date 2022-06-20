import { gql } from "@apollo/client";

export const TransactionFragment = gql`
    fragment TransactionFragment on Transaction {
        id
        articleName
        count
        amount
        updatedAt
        operationType
    }
`;