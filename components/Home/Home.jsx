import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import Header from "./Header/Header";
import MainCards from "./MainCards/MainCards";

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <Header/>
            <MainCards/>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 10,
        backgroundColor: 'white',
    },
});