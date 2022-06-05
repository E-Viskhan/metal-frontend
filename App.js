import { NativeBaseProvider } from "native-base/src/core/NativeBaseProvider";
import 'react-native-gesture-handler';
import { ApolloProvider } from "@apollo/client";
import { client } from "./src/apolloClient";
import { StackNavigation } from "./src/components/StackNavigation";

export default function App() {
    return (
        <ApolloProvider client={client}>
            <NativeBaseProvider>
                <StackNavigation/>
            </NativeBaseProvider>
        </ApolloProvider>
    );
};