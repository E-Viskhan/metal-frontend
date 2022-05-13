import { HamburgerIcon, Menu, Pressable } from "native-base";

export default function BurgerMenu() {
    return <Menu w="140" trigger={triggerProps => {
        return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
            <HamburgerIcon/>
        </Pressable>;
    }}>
        <Menu.Item>Пункт меню</Menu.Item>
        <Menu.Item>Пункт меню</Menu.Item>
        <Menu.Item>Пункт меню</Menu.Item>
        <Menu.Item>Пункт меню</Menu.Item>
        <Menu.Item isDisabled>Выйти</Menu.Item>
    </Menu>
}