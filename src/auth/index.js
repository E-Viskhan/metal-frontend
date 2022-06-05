import { createContext, useEffect, useState } from "react";
import { useApolloClient } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useAuth = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [userId, setUserId] = useState(null);
    const [accessToken, setAccessToken] = useState(null);
    const [refreshToken, setRefreshToken] = useState(null);

    const login = async (accessToken, refreshToken, userId) => {
        if (accessToken && refreshToken && userId) {
            await AsyncStorage.multiSet([
                ['accessToken', accessToken],
                ['refreshToken', refreshToken],
                ['userId', userId]
            ]);

            setAccessToken(accessToken);
            setRefreshToken(refreshToken);
            setUserId(userId);
            setIsLogin(true);
        }
    };

    const logout = async () => {
        const client = useApolloClient();

        await AsyncStorage.multiRemove(['accessToken', 'refreshToken', 'userId']);
        await client.resetStore();

        setAccessToken(null);
        setRefreshToken(null);
        setUserId(null);
        setIsLogin(false);
    };

    const getUserDataFromStorage = async () => {
        const {
            accessToken,
            refreshToken,
            userId
        } = await AsyncStorage.multiGet(['accessToken', 'refreshToken', 'userId']);
        await login(accessToken, refreshToken, userId);
    }

    useEffect(() => {
        void getUserDataFromStorage();
    }, [])

    return { isLogin, logout, login, accessToken, refreshToken, userId };
};

export const AuthContext = createContext();