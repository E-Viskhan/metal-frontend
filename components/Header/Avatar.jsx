import { TouchableOpacity } from "react-native";
import { Avatar } from "native-base";

export default function AvatarIcon() {
    return (
        <TouchableOpacity>
            <Avatar
                bg="green.500"
                size="sm"
                source={{
                    uri: 'https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                }}>
                AJ
                <Avatar.Badge bg="green.500" />
            </Avatar>
        </TouchableOpacity>
    );
};