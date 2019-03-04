import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

class HomeScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Button title="go back to login screen" onPress={() => this.props.navigation.goBack()} />
                <Button title="go back to login screen" onPress={() => this.props.navigation.popToTop()} />
                <Button title="go to About screen" onPress={() => this.props.navigation.navigate('About')}/>            
            </View>
        );
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
