import { Text } from "native-base";
import { AuthContext } from "../../auth";
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { useContext } from "react";

const Registration = () => {
    const { isLogin } = useContext(AuthContext);

    return (
        <SafeAreaView style={styles.container}>
            <Text>Страница регистрации</Text>
            <Text>isLogin - {isLogin ? 'Да' : 'Нет'}</Text>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 10,
        backgroundColor: 'white',
    },
});

export default Registration;