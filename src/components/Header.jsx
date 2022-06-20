import { HStack } from "native-base";
import AvatarIcon from "../screens/Home/Header/Avatar";
import BurgerMenu from "../screens/Home/Header/BurgerMenu";

export const Header = () => {
    return (
        <HStack justifyContent='space-between' alignItems='center' mb={5}>
            <AvatarIcon/>
            <BurgerMenu/>
        </HStack>
    );
};