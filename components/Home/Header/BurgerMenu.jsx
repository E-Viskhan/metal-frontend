import { HamburgerIcon, Menu, Pressable } from "native-base";

export default function BurgerMenu() {
    return <Menu w="140" trigger={triggerProps => {
        return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
            <HamburgerIcon/>
        </Pressable>;
    }}>
        <Menu.Item>lorem ipsum</Menu.Item>
        <Menu.Item>lorem ipsum</Menu.Item>
        <Menu.Item>lorem ipsum</Menu.Item>
        <Menu.Item>lorem ipsum</Menu.Item>
        <Menu.Item isDisabled>Выйти</Menu.Item>
    </Menu>
}