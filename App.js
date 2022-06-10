import { NativeBaseProvider } from "native-base/src/core/NativeBaseProvider";
import 'react-native-gesture-handler';
import { ApolloProvider } from "@apollo/client";
import { mainClient } from "./src/apollo";
import StackNavigation from "./src/components/StackNavigation";
import AuthProvider from "./src/components/AuthProvider";

export default function App() {
    return (
        <ApolloProvider client={mainClient}>
            <AuthProvider>
                <NativeBaseProvider>
                    <StackNavigation/>
                </NativeBaseProvider>
            </AuthProvider>
        </ApolloProvider>
    );
};