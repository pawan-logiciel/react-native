import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    FlatList,
    TouchableOpacity
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

    componentWillMount = () => {
        fetch('https://test-project-4a27b.firebaseio.com/students.json', {
            method: 'GET',
        })
        .then((response) => response.json())
        .then((responseData) => {
            var keys = Object.keys(responseData);
            var studentData = [];

            for (var i = keys.length - 1; i >= 0; i--) {
                var k = keys[i];
                studentData[i] = responseData[k];
            }

            this.setState({
                data: studentData
            })                
        })
        .done();

    }

    render() {
        return (
            <View style={styles.container}>
            <FlatList
                data={this.state.data}
                renderItem={({item}) => (
                    <TouchableOpacity style={styles.listContainer}  onPress={() => this.props.navigation.navigate('Home', {data: item})}> 
                        <Text style={styles.listText}>Name: {item.name}</Text>
                        <Text style={styles.listTextID}>ADDMISION ID: {item.addmisionId}</Text>
                    </TouchableOpacity>
                  )}
                />
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={styles.addbtn}>
                    <Text style={styles.addbtnText}>+</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default AboutScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    listContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        padding: 10
    },
    listText: {
        fontWeight: 'bold',
        fontSize: 16    
    },
    listTextID: {
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 10  
    },
    addbtn: {
        position: 'absolute',
        backgroundColor: 'pink',
        padding: 15,
        zIndex: 11,
        right: 10,
        bottom: 30,
        borderRadius: 50,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 0
    },
    addbtnText: {
        color: '#fff',
        fontSize: 24
    }

});