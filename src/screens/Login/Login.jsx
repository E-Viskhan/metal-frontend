import { Text, View } from "native-base";
import { useAuth } from "../../auth";
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";

const Login = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Страница логинизации</Text>
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

export default Login;