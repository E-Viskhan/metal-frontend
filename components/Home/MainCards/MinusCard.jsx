import { Box, Text } from "native-base";
import { FontAwesome } from "@expo/vector-icons";

export default function MinusCard() {
    return (
        <Box bg='#ede9f1' p={10} borderRadius={13} justifyContent='center' alignItems='center'>
            <FontAwesome name="minus" size={30} color="#616161" />
            <Text mt={1} textTransform='uppercase' bold color='gray.700'>Продажа</Text>
        </Box>
    );
};