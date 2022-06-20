import { gql } from "@apollo/client";
import { TransactionFragment } from "./fragments";

export const GET_ALL_TRANSACTIONS = gql`
    ${TransactionFragment}
    query getAllTransactions{
        transactions {
            ...TransactionFragment
        }
    }
`;

export const GET_ARTICLES = gql`
    query getArticles {
        articles {
            id
            name
            price
        }
    }
`;