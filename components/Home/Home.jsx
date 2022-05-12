import { StyleSheet } from "react-native";
import { View } from "native-base";
import Header from "./Header/Header";
import MainCards from "./MainCards/MainCards";

export default function Home() {
    return (
        <View style={styles.container}>
            <Header/>
            <MainCards/>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
});