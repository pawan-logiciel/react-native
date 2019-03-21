import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

import axios from 'axios';

class LoginScreen extends Component {
 postMsg = () => {
     console.log('hit')
      fetch('https://test-project-4a27b.firebaseio.com/contacts.json', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "name": 'pawan',
          "mobile": 9803355884,
          "email": 'iampavanarora@gmail.com',
          "msg": 'hie',
        }),
      })
      .then((response) => response.json())
      .then((responseData) => {
          console.log(responseData)                
      })
      .done();
  };

  putmsg = () => {
     console.log('hit')
      fetch('https://test-project-4a27b.firebaseio.com/contacts/-LaU0kSrFKfcpRDZ3Izr.json', {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "name": 'aman',
          "mobile": 980,
          "email": 'iampavanarora@gmail.com',
          "msg": 'hie',
        }),
      })
      .then((response) => response.json())
      .then((responseData) => {
          console.log(responseData)                
      })
      .done();
  };

   deleteMsg = () => {
     console.log('hit')
      fetch('https://test-project-4a27b.firebaseio.com/contacts/-LaU0RJ7_lMH7x87A1qx.json', {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      })
      .then((response) => response.json())
      .then((responseData) => {
          console.log(responseData)                
      })
      .done();
  };



   getMsg = () => {
     console.log('hit')
      // fetch('https://test-project-4a27b.firebaseio.com/contacts.json', {
      //   method: 'GET',
      // })
      // .then((response) => response.json())
      // .then((responseData) => {
      //     console.log(responseData)                
      // })
      // .done();
      
    axios.get('https://test-project-4a27b.firebaseio.com/contacts.json')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
  };


          
    render() {
        return (
            <View style={styles.container}>
            <Text>hello about screen</Text>
                <Button title="Go To Home Screen"
                    onPress={() => this.props.navigation.navigate('Home')} />
                <Button title="Go post Data"
                    onPress={() => this.postMsg()} />
                <Button title="Go fetch Data"
                    onPress={() => this.getMsg()} />
                <Button title="Go delete Data"
                    onPress={() => this.deleteMsg()} />
                <Button title="Go update Data"
                    onPress={() => this.putmsg()} />
            </View>
        );
    }
}
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});