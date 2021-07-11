/* import 'react-native-gesture-handler'; */
import React, { Component } from 'react';
import { Text, Alert, View, StyleSheet, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import { TextArea, Stack, Center, NativeBaseProvider, Button } from "native-base"
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.getData()
    
    this.state = {
      email: '',
      password: ''
    };
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

  checkUserAvailable(email, password) {
    fetch('http://192.168.1.103:9000/user')
    .then((response) => response.json())
    .then((json) => this.checkEquality(email, password, json));
  }
  checkEquality(email, password, json) {
    for(let i = 0; i < json.length; i++) {
      if(json[i].email == email) {
        if(json[i].password == password) {
          this.props.navigation.replace('Dashboard')
          return true
        } else {
          
          
        }
      } 
    }
    alert('email is not valid..!')
    
  }

  storeData = async (value) => {
    try {
      await AsyncStorage.setItem('isAlreadyLoged', 'true')
      /* console.log('data saved') */
    } catch (e) {
      // saving error
    }
  }

 getData = async () => {
    try {
      const value = await AsyncStorage.getItem('isAlreadyLoged')
      if(value !== null) {
        // value previously stored
        this.props.navigation.replace('Dashboard')
      }
    } catch(e) {
      // error reading value
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
        <View style={{marginBottom: 200}}>
        <TextInput
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
           label='Email'
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
                /* style={styles.button} */
                size="lg"
               /*  variant="outline" */
                colorScheme="primary"
                onPress={()=>{     
                  
                  
                  /* this.props.navigation.replace('Dashboard') */
                  this.checkUserAvailable(this.state.email, this.state.password)
                  this.storeData()
                  
                
                
              }}
              >
                Log in
              </Button>
          </View>
          <Text style={{marginBottom:30, fontSize:20}}>Don't you have an account?</Text>
          <Button
                style={styles.button1}
                size="lg"
               /*  variant="outline" */
                colorScheme="primary"
                onPress={()=>{
                  this.props.navigation.replace('Signup')
                }}
              >
                Sign in
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
    marginLeft: -15,
    width: 115,
    height: 45,
    color: 'white',
    fontWeight: 'bold'
  }
});