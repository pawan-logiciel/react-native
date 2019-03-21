import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput,
    ScrollView
} from "react-native";

class HomeScreen extends Component {
    static navigationOptions = {
        headerTitle: 'Add Student'
    }

    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            fatherName: '',
            motherName: '',
            dob: '',
            addmisionId: '',
            address: '',
            phone: '' 
        };
      }

    saveStudentData = (studentData) => {
        console.log('hit')
        fetch('https://test-project-4a27b.firebaseio.com/students.json', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(studentData),
        })
        .then((response) => response.json())
        .then((responseData) => {
            if(responseData.name) {
                this.setState({
                    name: '',
                    fatherName: '',
                    motherName: '',
                    dob: '',
                    addmisionId: '',
                    address: '',
                    phone: '' 
                });

                this.props.navigation.navigate('About')
            }                
        })
        .done();
    }

    render() {
    const { navigation } = this.props;
    const data = navigation.getParam('data', null);
    
    console.log(data)  

        return (
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.container}>
                    <TextInput
                        style={styles.inputbox}
                        placeholder="Enter Name"
                        onChangeText={(name) => this.setState({name})}
                        value={this.state.name}
                      />
                      <TextInput
                        style={styles.inputbox}
                        placeholder="Enter Father's Name"
                        onChangeText={(fatherName) => this.setState({fatherName})}
                        value={this.state.fatherName}
                      />
                      <TextInput
                        style={styles.inputbox}
                        placeholder="Enter Mother's Name"
                        onChangeText={(motherName) => this.setState({motherName})}
                        value={this.state.motherName}
                      />
                      <TextInput
                        style={styles.inputbox}
                        placeholder="Enter Date Of Birth"
                        onChangeText={(dob) => this.setState({dob})}
                        value={this.state.dob}
                      />
                      <TextInput
                        style={styles.inputbox}
                        placeholder="Enter Addmision Id"
                        onChangeText={(addmisionId) => this.setState({addmisionId})}
                        value={this.state.addmisionId}
                      />
                      <TextInput
                        style={styles.inputbox}
                        placeholder="Enter Address"
                        onChangeText={(address) => this.setState({address})}
                        value={this.state.address}
                      />
                      <TextInput
                        style={styles.inputbox}
                        placeholder="Enter Mobile Number"
                        onChangeText={(phone) => this.setState({phone})}
                        value={this.state.phone}
                      />
                      <Button title="SUBMIT"
                        onPress={() => this.saveStudentData(this.state)} />
                </View>
            </ScrollView>
        );
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
    contentContainer: {
        paddingVertical: 20
    },
    container: {
        flex: 1
    },
    inputbox: {
        borderBottomWidth: 1,
        borderColor: 'black',
        margin: 5
    }
});
