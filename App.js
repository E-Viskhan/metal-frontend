import { NativeBaseProvider } from "native-base/src/core/NativeBaseProvider";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/Home/Home";
import BuyOperation from "./components/BuyOperation/BuyOperation";
import SellOperation from "./components/SellOperation/SellOperation";
import Balance from "./components/Balance/Balance";
import Settings from "./components/Settings/Settings";
import { useState } from "react";

const Stack = createStackNavigator();

const StackNavigation = () => {
    const [initialRouteName, setInitialRouteName] = useState('Home');

    return (<NavigationContainer>
        <Stack.Navigator initialRouteName={initialRouteName}>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
            <Stack.Screen name="BuyOperation" component={BuyOperation} options={{ title: 'Покупка' }}/>
            <Stack.Screen name="SellOperation" component={SellOperation} options={{ title: 'Продажа' }}/>
            <Stack.Screen name="Balance" component={Balance} options={{ title: 'Баланс' }}/>
            <Stack.Screen name="Settings" component={Settings} options={{ title: 'Настройки' }}/>
        </Stack.Navigator>
    </NavigationContainer>)

};

export default function App() {
    return (
        <NativeBaseProvider>
            <StackNavigation/>
        </NativeBaseProvider>
    );
};