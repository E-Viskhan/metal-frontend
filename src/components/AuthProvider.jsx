import { useAuth } from "../auth";
import { createContext, useMemo } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const { userId, isLogin, setAuthUser, removeAuthUser } = useAuth();

    const authData = useMemo(() => ({ userId, isLogin, setAuthUser, removeAuthUser }), [userId, isLogin])

    return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>;
};