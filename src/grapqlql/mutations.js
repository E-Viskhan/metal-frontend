import { gql } from "@apollo/client";
import { TransactionFragment } from "./fragments";

export const LOGIN = gql`
    mutation login ($email: String!, $password: String!) {
        login (email: $email, password: $password) {
            accessToken
            userId
        }
    }
`;

export const LOGOUT = gql`
    mutation logout {
        logout
    }
`;

export const REFRESH = gql`
    mutation refresh {
        refresh {
            accessToken
        }
    }
`;

export const ADD_TRANSACTION = gql`
    ${TransactionFragment}
    mutation addTransaction($operationType: String!, $articleId: Int!, $count: Float!, $price: Float!, $amount: Float!) {
        addTransaction(operationType: $operationType, articleId: $articleId, count: $count, price: $price, amount: $amount) {
            ...TransactionFragment
        }
    }
`;
