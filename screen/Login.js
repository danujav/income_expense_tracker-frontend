/* import 'react-native-gesture-handler'; */
import React, { Component } from 'react';
import { Text, Alert, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { TextArea, Stack, Center, NativeBaseProvider, Button } from "native-base"

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      username: '',
      password: '',
    };
  }

  abc() {
    console.log('hi')
  }

  saveLogin() {
    fetch('http://localhost:9000/expense/', {
  method: 'POST',
  body: JSON.stringify({
    email: this.state.email,
    name: this.state.name,
    password: this.state.password,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
  }

  go = () => {
           const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (reg.test(this.state.email) === true){
               alert('valid');
           }
           else{
               alert();
           }
 
  }
  
  /* onLogin() {
    const { username, password } = this.state;

    Alert.alert('Credentials', `${username} + ${password}`);
  } */

  render() {
    return (
      <NativeBaseProvider>
      <View style={styles.container}>
        <TextInput
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
           label='Email'
          style={styles.input}
        />

        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
           label='User name'
          style={styles.input}
        />

        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          label='Password'
          secureTextEntry={true}
          style={styles.input}
        />

         <Button
                style={styles.button}
                size="lg"
               /*  variant="outline" */
                colorScheme="primary"
                onPress={()=>{
                  fetch('http://192.168.1.103:9000/user', {
                    method: 'POST',
                    headers: {
                      Accept: 'application/json',
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      email: this.state.email,
                      name: this.state.username,
                      password: this.state.password,
                    })
                    
                  })
                    .then((response) => response.json())
                    .then((json) => console.log(json));
                  
                  this.props.navigation.replace('Dashboard')
              }}
              >
                Get in
              </Button>
      </View>
      </NativeBaseProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  
  },


   input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  inputext: {
    width: 200,
    height: 44,
    padding: 10,
    textAlign:'center',
    fontWeight:'bold',
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  }, 
});