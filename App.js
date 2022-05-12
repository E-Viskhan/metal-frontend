import { NativeBaseProvider } from "native-base/src/core/NativeBaseProvider";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import Home from "./components/Home/Home";

const Stack = createStackNavigator();

const StackNavigation = () => (
    <NavigationContainer>
        <SafeAreaView style={styles.container}>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </SafeAreaView>
    </NavigationContainer>

);

export default function App() {
    return (
        <NativeBaseProvider>
            <StackNavigation/>
        </NativeBaseProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 10
    },
});
