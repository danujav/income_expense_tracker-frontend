/* import 'react-native-gesture-handler'; */
import React, { Component } from 'react';
import { Text, Alert, View, StyleSheet, Image } from 'react-native';
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

  backToLogin(json) {
    if(json != null) {
      this.props.navigation.replace('Login')
    }
  }

  render() {
    return (      
      <NativeBaseProvider>
    
      <View style={styles.container}>
      <Image
          style={styles.backgroundImage}
          source={require('../assets/svg.png')}
        />
        <View style={{marginBottom: 100}}>
        <TextInput
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
           label='Email'
          style={styles.input}
        />

        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
           label='Name'
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
                    .then((json) => this.backToLogin(json)
                    );

                    
                    
              }}
              >
                Sign in
              </Button>
              
              </View>
              <Text style={{marginBottom:30, fontSize:20}}>Already have an account?</Text>
              <Button
                style={styles.button1}
                size="lg"
               /*  variant="outline" */
                colorScheme="primary"
                onPress={()=>{
                  this.props.navigation.replace('Login')
                }}
              >
                Log in
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
    width: 300,
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
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover'
  },
  button1: {
    marginTop: -15,
    marginBottom: 30,
    marginLeft: -13,
    width: 115,
    height: 45,
    color: 'white',
    fontWeight: 'bold'
  } 
});