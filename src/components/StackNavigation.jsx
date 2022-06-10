import { createStackNavigator } from "@react-navigation/stack";
import { useContext, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home/Home";
import BuyOperation from "../screens/BuyOperation/BuyOperation";
import SellOperation from "../screens/SellOperation/SellOperation";
import Balance from "../screens/Balance/Balance";
import Settings from "../screens/Settings/Settings";
import Registration from "../screens/Registration/Registration";
import Login from "../screens/Login/Login";
import { AuthContext } from "./AuthProvider";

const Stack = createStackNavigator();

const StackNavigation = () => {
    const [initialRouteName, setInitialRouteName] = useState('Home'); // it will be in getUserPersonalData with name and other userInfo
    const { isLogin } = useContext(AuthContext);

    return (
        <NavigationContainer>
            {isLogin ? (
                <Stack.Navigator initialRouteName={initialRouteName}>
                    <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
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

export default StackNavigation;