import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { getAccessToken } from "./utils";

const httpLink = createHttpLink({
    uri: 'http://10.0.2.2:4000/graphql/',
});

const authLink = setContext(async (_, { headers }) => {
    const accessToken = getAccessToken();

    return {
        headers: {
            ...headers,
            authorization: accessToken ? `Bearer ${accessToken}` : "",
        }
    }
});

export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});
