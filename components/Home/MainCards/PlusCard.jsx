import { Box, Text } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function PlusCard() {
    return (
        <TouchableOpacity>
            <Box bg='#f8ede8' mb={3} p={10} borderRadius={13} justifyContent='center' alignItems='center'>
                <FontAwesome name="plus" size={30} color="#616161" />
                <Text mt={4} textTransform='uppercase' bold color='gray.700'>Покупка</Text>
            </Box>
        </TouchableOpacity>
    );
};