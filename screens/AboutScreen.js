import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    FlatList,
    TouchableOpacity,
    ScrollView,
    TouchableHighlight,
    Alert
} from "react-native";

import Icon from 'react-native-vector-icons/MaterialIcons';

import ActionSheet from 'react-native-actionsheet';
import firebaseUrl from '../firebaseUrl'
var Environment = require('../firebaseUrl.js')
const BASE_URL = Environment.BASE_URL

class AboutScreen extends Component {

    static navigationOptions = {
        headerTitle: 'StudentList'
    }

    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    getData = () => {
        fetch(BASE_URL+'.json', {
            method: 'GET',
        })
        .then((response) => response.json())
        .then((responseData) => {
            var keys = Object.keys(responseData);
            var studentData = [];

            for (var i = keys.length - 1; i >= 0; i--) {
                var k = keys[i];
                studentData[i] = responseData[k];
                studentData[i].id = k;
            }

            this.setState({
                data: studentData
            })                
        })
        .done();
    }

    deleteData = (itemId) => {
        fetch('https://test-project-4a27b.firebaseio.com/students/'+itemId+'.json', {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then((response) => response.json())
        .then((responseData) => {
            alert('deleted successfully')
        })
        .done();
    }

    render() {
        this.getData();
        
        return (
                <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    renderItem={({item}) => (
                        <TouchableOpacity style={styles.listContainer}
                                  onPress={() => this.props.navigation.navigate('Student', {studentData: item})}>

                            <Text style={styles.listText}>Name: {item.name}</Text>
                            <Text style={styles.listTextID}>ADDMISION ID: {item.addmisionId}</Text>

                            <Icon style={styles.editIcon}
                                  onPress={() => this.props.navigation.navigate('Home', {studentData: item})} 
                                  name="edit" 
                                  size={25} />

                            <Icon
                                onPress={() => this.deleteData(item.id)} 
                                name="delete" 
                                size={25} />
                        
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
        flex: 1,
        borderBottomWidth: 1,
        padding: 10
    },
    listText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    listTextID: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 10,
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
    },
    editIcon: {
        marginRight: 15
    }
});