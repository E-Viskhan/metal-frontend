import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { authClient, mainClient } from "../apollo/";
import { REFRESH } from "../grapqlql/mutations";
import asyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage";

let accessToken;

export const getAccessToken = async () => {
    if (!accessToken) {
        accessToken = await AsyncStorage.getItem('accessToken');
    }

    return accessToken;
};

export const refreshAccessToken = async () => {
    const { data } = await authClient.mutate({mutation: REFRESH});
    accessToken = data.refresh.accessToken;

    await asyncStorage.setItem('accessToken', accessToken);
};

export const useAuth = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [userId, setUserId] = useState(null);

    const setAuthUser = async (token, userId) => {
        if (token && userId) {
            await AsyncStorage.multiSet([
                ['accessToken', token],
                ['userId', userId]
            ]);
            accessToken = token;

            setUserId(userId);
            setIsLogin(true);
        }
    };

    const removeAuthUser = async () => {
        await AsyncStorage.multiRemove(['accessToken', 'userId']);
        await mainClient.resetStore();
        await authClient.resetStore();

        setUserId(null);
        setIsLogin(false);
        accessToken = null;
    };

    const getUserDataFromStorage = async () => {
        const [ [, accessToken], [, userId] ] = await AsyncStorage.multiGet(['accessToken', 'userId']);
        await setAuthUser(accessToken, userId);
    };

    useEffect(() => {
        void getUserDataFromStorage();
    }, []);

    return { isLogin, userId, removeAuthUser, setAuthUser };
};