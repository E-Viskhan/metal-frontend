import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { NativeBaseProvider } from "native-base/src/core/NativeBaseProvider";
import Header from "./components/Header/Header";

export default function App() {
    return (
        <NativeBaseProvider>
            <SafeAreaView style={styles.container}>
                <Header/>
            </SafeAreaView>
        </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 20 : 20
    },
});
