import { gql } from "@apollo/client";
import { TransactionFragment } from "./fragments";

export const GET_TRANSACTIONS = gql`
    ${TransactionFragment}
    query getTransactions($skip: Int, $take: Int, $orderBy: TransactionsOrderByInput){
        transactions(skip: $skip, take: $take, orderBy: $orderBy) {
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