import { ApolloClient, from, InMemoryCache } from '@apollo/client';
import { authLink, errorLink, httpLink } from "./links";

const inMemoryCache = new InMemoryCache();

export const mainClient = new ApolloClient({
    link: from([errorLink, authLink, httpLink]),
    cache: inMemoryCache
});

export const authClient = new ApolloClient({
    link: httpLink,
    cache: inMemoryCache
})