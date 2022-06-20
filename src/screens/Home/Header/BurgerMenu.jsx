import { HamburgerIcon, Menu, Pressable } from "native-base";
import { useContext, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { LOGOUT } from "../../../grapqlql/mutations";
import { AuthContext } from "../../../components/AuthProvider";
import { useNavigation } from '@react-navigation/native';


export default function BurgerMenu() {
    const { removeAuthUser } = useContext(AuthContext);
    const [logout, { data, loading, error }] = useMutation(LOGOUT);
    const { navigate } = useNavigation()

    useEffect(() => {
        if (data) {
            removeAuthUser();
        }
    }, [data])

    return <Menu w="140" trigger={triggerProps => {
        return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
            <HamburgerIcon/>
        </Pressable>;
    }}>
        <Menu.Item onPress={() => navigate('Settings')}>Настройки</Menu.Item>
        <Menu.Item onPress={logout}>Выйти</Menu.Item>
    </Menu>
}