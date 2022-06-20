import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Balance, BuyOperation, Login, Registration, SellOperation, Settings } from "../screens";
import { useInitApp } from "../hooks";
import { TabNavigator } from "./TabNavigator";

const Stack = createStackNavigator();

export const StackNavigator = () => {
    const {initialized, isLogin, initialRouteName} = useInitApp();

    if (!initialized) return null;

    return (
        <NavigationContainer>
            {isLogin ? (
                <Stack.Navigator initialRouteName={initialRouteName}>
                    <Stack.Screen name="Root" component={TabNavigator} options={{ headerShown: false }}/>
                    <Stack.Screen name="BuyOperation" component={BuyOperation} options={{ title: 'Покупка' }}/>
                    <Stack.Screen name="SellOperation" component={SellOperation} options={{ title: 'Продажа' }}/>
                    <Stack.Screen name="Balance" component={Balance} options={{ title: 'Баланс' }}/>
                    <Stack.Screen name="Settings" component={Settings} options={{ title: 'Настройки' }}/>
                </Stack.Navigator>

            ) : (
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Login" component={Login}/>
                    <Stack.Screen name="Registration" component={Registration}/>
                </Stack.Navigator>
            )}
        </NavigationContainer>
    )
};