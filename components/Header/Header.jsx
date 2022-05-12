import { HStack } from "native-base";
import AvatarIcon from "./Avatar";
import BurgerMenu from "./BurgerMenu";

export default function Header() {
    return (
        <HStack justifyContent='space-between' alignItems='center'>
            <AvatarIcon/>
            <BurgerMenu/>
        </HStack>
    );
};