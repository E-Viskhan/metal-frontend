import { useContext, useState } from "react";
import { AuthContext } from "../components/AuthProvider";
import { useLazyQuery } from "@apollo/client";
import { GET_ARTICLES } from "../grapqlql/queries";

export const useInitApp = () => {
    const [initialized, setInitialized] = useState(false);
    const [initialRouteName, setInitialRouteName] = useState('Root'); // it will be in getUserPersonalData with name and other userInfo
    const [getArticles] = useLazyQuery(GET_ARTICLES);
    const { isLogin } = useContext(AuthContext);

    if (isLogin && !initialized) {
        void getArticles();
        setInitialized(true);
    }

    return { initialRouteName, isLogin, initialized };
}