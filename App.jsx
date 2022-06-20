import { NativeBaseProvider } from "native-base/src/core/NativeBaseProvider";
import 'react-native-gesture-handler';
import { ApolloProvider } from "@apollo/client";
import { mainClient } from "./src/apollo";
import { Platform } from "react-native";
import { AuthProvider } from "./src/components";
import { StackNavigator } from "./src/navigation/StackNavigator";

if (Platform.OS === 'android') {
    require('intl');
    require('intl/locale-data/jsonp/ru');
}

export default function App() {
    return (
        <ApolloProvider client={mainClient}>
            <AuthProvider>
                <NativeBaseProvider>
                    <StackNavigator/>
                </NativeBaseProvider>
            </AuthProvider>
        </ApolloProvider>
    );
};