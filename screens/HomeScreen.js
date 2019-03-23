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

    static navigationOptions = ({ navigation }) => {
        const studentData = navigation.getParam('studentData', null)
        return {
            headerTitle: studentData == null ? 'Add Student' : 'Edit Student',
        };
    }

    constructor(props) {
        super(props);
        
        const { navigation } = this.props;
        const studentData = navigation.getParam('studentData', null);

        if(studentData != null) {
            this.state = {
                name: studentData.name,
                fatherName: studentData.fatherName,
                motherName: studentData.motherName,
                dob: studentData.dob,
                addmisionId: studentData.addmisionId,
                address: studentData.address,
                phone: studentData.phone,
                id: studentData.id
            }

        } else {
            this.state = { 
                name: '',
                fatherName: '',
                motherName: '',
                dob: '',
                addmisionId: '',
                address: '',
                phone: ''
            }
        }
      } 


    saveStudentData = (studentData) => {
        if(this.state.id) {
            this.doEditStudent(studentData);
        } else {
            this.doAddStudent(studentData);
        }

        return;
    }

    doEditStudent = (studentData) => {
        fetch('https://test-project-4a27b.firebaseio.com/students/'+this.state.id+'.json', {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(studentData),
          })
          .then((response) => response.json())
          .then((responseData) => {
              this.clearStateAndNavigate(responseData);
          })
          .done();
    }

    doAddStudent = (studentData) => {
        
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
                this.clearStateAndNavigate();         
            }
        })
        .done();
    }

    clearStateAndNavigate = () => {
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

    render() {
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
                        autoComplete="tel"
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
