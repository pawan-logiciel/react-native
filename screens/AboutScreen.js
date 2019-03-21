import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    FlatList
} from "react-native";

class AboutScreen extends Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    render() {
        fetch('https://test-project-4a27b.firebaseio.com/students.json', {
            method: 'GET',
        })
        .then((response) => response.json())
        .then((responseData) => {
            console.log(responseData)
            this.setState({
                data: responseData
            })      
            console.log(this.state)
        })
        .done();

        return (

            <View style={styles.container}>
                    <FlatList
                      data={this.state.data}
                      renderItem={({item}) => (
                        <View style={styles.container}>
                            <Text>{item}</Text>
                        </View>
                      )}
                    />
            </View>
        );
    }
}
export default AboutScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }    
});