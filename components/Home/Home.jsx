import Header from "../Header/Header";
import { StyleSheet } from "react-native";
import { View } from "native-base";

export default function Home() {
    return (
        <View style={styles.container}>
            <Header/>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
});