import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

import axios from 'axios';

class StudentScreen extends Component {
    static navigationOptions = {
        headerTitle: 'StudentDetails'
    }
    
    render() {

        const { navigation } = this.props;
        const studentData = navigation.getParam('studentData', null);
    
        return (
            <View style={styles.container}>
                <View style={styles.contentLine}>
                    <Text style={styles.contentHeading}>Student Name</Text>
                    <Text style={styles.contentText}>{studentData.name}</Text>
                </View>
                <View style={styles.contentLine}>
                    <Text style={styles.contentHeading}>Student Addmission Id</Text>
                    <Text style={styles.contentText}>{studentData.addmisionId}</Text>
                </View>
                <View style={styles.contentLine}>
                    <Text style={styles.contentHeading}>Student Father's Name</Text>
                    <Text style={styles.contentText}>{studentData.fatherName}</Text>
                </View>
                <View style={styles.contentLine}>
                    <Text style={styles.contentHeading}>Student Mother's Name</Text>
                    <Text style={styles.contentText}>{studentData.motherName}</Text>
                </View>
                <View style={styles.contentLine}>
                    <Text style={styles.contentHeading}>Student Date of Birth</Text>
                    <Text style={styles.contentText}>{studentData.dob}</Text>
                </View>
                <View style={styles.contentLine}>
                    <Text style={styles.contentHeading}>Student Mobile No.</Text>
                    <Text style={styles.contentText}>{studentData.phone}</Text>
                </View>
                <View style={styles.contentLine}>
                    <Text style={styles.contentHeading}>Student Address</Text>
                    <Text style={styles.contentText}>{studentData.address}</Text>
                </View>
            </View>
        );
    }
}
export default StudentScreen;

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    contentLine: {
        borderBottomWidth: 1,
    },
    contentHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10
    },
    contentText: {
        fontSize: 16,
        marginLeft: 10,
        marginTop: 5
    }
});