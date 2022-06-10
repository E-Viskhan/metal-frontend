import { createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getAccessToken, refreshAccessToken } from "../auth";
import { onError } from "@apollo/client/link/error";
import { getFormattedToken } from "../utils";

export const httpLink = createHttpLink({
    uri: 'http://10.0.2.2:4000/graphql/',
});

export const authLink = setContext(async (_, { headers }) => {
    const accessToken = await getAccessToken();

    return {
        headers: {
            ...headers,
            authorization: getFormattedToken(accessToken),
        }
    }
});

export const errorLink = onError(({ graphQLErrors, networkError, forward, operation }) => {
    if (graphQLErrors) {
        graphQLErrors.forEach(async ({ message, locations, path, extensions }) => {
            switch (extensions.code) {
                case 'UNAUTHENTICATED':
                    console.log('Trying to refresh tokens');

                    const oldHeaders = operation.getContext().headers;

                    await refreshAccessToken();
                    const newAccessToken = await getAccessToken();

                    operation.setContext({
                        headers: {
                            ...oldHeaders,
                            authorization: getFormattedToken(newAccessToken),
                        }
                    });

                    return forward(operation);
                default:
                    console.log(`[GraphQL error]:
                                    Message: ${message}
                                    Path: ${path}
                                    code: ${extensions.code}`
                    )
                    break;
            }
        })
    }

    if (networkError) {
        console.log(`[Network error]: ${networkError}`)
    }
});