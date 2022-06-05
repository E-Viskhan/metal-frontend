import { NativeBaseProvider } from "native-base/src/core/NativeBaseProvider";
import 'react-native-gesture-handler';
import { ApolloProvider } from "@apollo/client";
import { client } from "./src/apolloClient";
import { StackNavigation } from "./src/components/StackNavigation";
import { AuthContext, useAuth } from "./src/auth";

export default function App() {
    const { userId, refreshToken, accessToken, login, isLogin, logout } = useAuth();

    return (
        <ApolloProvider client={client}>
            <AuthContext.Provider value={{userId, refreshToken, accessToken, login, isLogin, logout}}>
                <NativeBaseProvider>
                    <StackNavigation/>
                </NativeBaseProvider>
            </AuthContext.Provider>
        </ApolloProvider>
    );
};