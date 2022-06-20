import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import { Analytics, Home } from "../screens";

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: '#70a39e',
                tabBarInactiveTintColor: 'gray',
                tabBarShowLabel: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    switch (route.name) {
                        case "Home":
                            iconName = focused ? 'home' : 'home';
                            break;
                        case "Analytics":
                            iconName = focused ? 'pie-chart' : 'pie-chart';
                            break;
                    }

                    return <FontAwesome name={iconName} size={size} color={color}/>;
                },
            })}
        >
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Analytics" component={Analytics}/>
        </Tab.Navigator>
    );
};