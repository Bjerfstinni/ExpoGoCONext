import { StyleSheet, Text, View, Button} from "react-native";

function UserScreen() {
    return (
        <View style={styles.viewStyle}>
        <Text style={styles.headingStyle}>USTP CONEXT</Text>
        <Text style={styles.textStyle}>USER</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    viewStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    textStyle: {
        fontSize: 28,
        color: 'black',
    },
    headingStyle: {
        fontSize: 30,
        color:'black',
        textAlign: 'center',
    },
});
export default UserScreen;