import { gql } from "@apollo/client";

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

