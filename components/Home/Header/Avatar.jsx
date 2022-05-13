import { TouchableOpacity } from "react-native";
import { Avatar } from "native-base";
import { useNetInfo } from "@react-native-community/netinfo";

export default function AvatarIcon() {
    const { isInternetReachable } = useNetInfo();

    return (
        <TouchableOpacity>
            <Avatar
                bg="green.500"
                size="sm"
                source={{
                    uri: 'https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                }}>
                AJ
                <Avatar.Badge bg={isInternetReachable ? 'green.500' : 'red.500'} />
            </Avatar>
        </TouchableOpacity>
    );
};