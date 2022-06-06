import { createContext, useEffect, useState } from "react";
import { useApolloClient } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useAuth = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [userId, setUserId] = useState(null);

    const login = async (accessToken, userId) => {
        if (accessToken && userId) {
            await AsyncStorage.multiSet([
                ['accessToken', accessToken],
                ['userId', userId]
            ]);

            setUserId(userId);
            setIsLogin(true);
        }
    };

    const logout = async () => {
        const client = useApolloClient();

        await AsyncStorage.multiRemove(['accessToken', 'userId']);
        await client.resetStore();

        setUserId(null);
        setIsLogin(false);
    };

    const getUserDataFromStorage = async () => {
        const { accessToken, userId } = await AsyncStorage.multiGet(['accessToken', 'userId']);
        await login(accessToken, userId);
    };

    useEffect(() => {
        void getUserDataFromStorage();
    }, []);

    return { isLogin, userId, logout, login };
};

export const AuthContext = createContext();