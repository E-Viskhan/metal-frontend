import { Box, Button } from "native-base";
import { StyleSheet } from "react-native";
import { useContext } from "react";
import { NavigationContext } from "@react-navigation/native";

export default function SellOperation() {
    const { goBack } = useContext(NavigationContext);

    return (
        <Box bg='white' flex={1}>
            <Button onPress={goBack}>Вернуться на главную</Button>
        </Box>
    );
};

const styles = StyleSheet.create({

});