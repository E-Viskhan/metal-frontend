import { FontAwesome } from "@expo/vector-icons";
import { Box, Text } from "native-base";
import { TouchableOpacity } from "react-native";

export default function BalanceCard() {
    return (
        <Box w='48%'>
            <TouchableOpacity style={{ flex: 1 }}>
                <Box h='100%' bg='#edf8f7' p={10} borderRadius={13} justifyContent='center' alignItems='center'>
                    <FontAwesome name="balance-scale" size={60} color="#616161"/>
                    <Text mt={4} textTransform='uppercase' bold color='gray.700'>Баланс</Text>
                </Box>
            </TouchableOpacity>
        </Box>
    );
};