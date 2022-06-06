import { gql } from "@apollo/client";

export const GET_ALL_TRANSACTIONS = gql`
    query getAllTransactions{
        transactions {
            articleName
            count
            amount
        }
    }
`;