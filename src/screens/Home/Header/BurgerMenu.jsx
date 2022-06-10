import { HamburgerIcon, Menu, Pressable } from "native-base";
import { useContext, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { LOGOUT } from "../../../grapqlql/mutations";
import { AuthContext } from "../../../components/AuthProvider";

export default function BurgerMenu() {
    const { removeAuthUser } = useContext(AuthContext);
    const [logout, { data, loading, error }] = useMutation(LOGOUT);

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
        <Menu.Item>Пункт меню</Menu.Item>
        <Menu.Item>Пункт меню</Menu.Item>
        <Menu.Item>Пункт меню</Menu.Item>
        <Menu.Item>Пункт меню</Menu.Item>
        <Menu.Item onPress={logout}>Выйти</Menu.Item>
    </Menu>
}