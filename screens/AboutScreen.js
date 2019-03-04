import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

class AboutScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
            <Text>hello abour screen</Text>
                <Button title="Go To Home Screen"
                    onPress={() => this.props.navigation.navigate('Home')} />
            </View>
        );
    }
}
export default AboutScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});