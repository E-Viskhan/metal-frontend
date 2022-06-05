import { Box, Button } from "native-base";
import { StyleSheet } from "react-native";
import { useContext } from "react";
import { NavigationContext } from "@react-navigation/native";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../grapqlql/mutations";

export default function Balance() {
    const { goBack } = useContext(NavigationContext);
    const {} = useMutation(LOGIN)

    return (
        <Box bg='white' flex={1}>
            <Button onPress={goBack}>Вернуться на главную</Button>
        </Box>
    );
};

const styles = StyleSheet.create({

});