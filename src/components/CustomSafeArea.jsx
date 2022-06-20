import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";

export const CustomSafeArea = ({ children }) => <SafeAreaView style={styles.container}>{children}</SafeAreaView>;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 10,
        backgroundColor: 'white',
    }
});