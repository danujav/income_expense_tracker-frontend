import React, { Component } from 'react';
import { View, Text,StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { TextArea, Stack, Center, NativeBaseProvider, Button } from "native-base"

export default class Expense extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      
          <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
    
            
      <View style={styles.container}>
          <View style={styles.firstView}>
          <NativeBaseProvider>
            <Stack style={{marginLeft: 95, marginTop: 10}} space={4} w="60%">
            <TextArea  h={10} placeholder="Date here..." />
            </Stack>

            <View style={styles.balanceBox}>
              <Stack style={{marginLeft: 5, marginTop: 10}} space={4} w="96%">
                <TextArea  h={20} placeholder="Amount..." />
              </Stack>
            </View>

            <Stack style={{marginLeft: 9, marginTop: 20}} space={4} w="96%">
                <TextArea  h={150} placeholder="Keep note here..." />
            </Stack>

            <Stack style={{marginLeft: 9, marginTop: 20}} space={4} w="96%">
                <TextArea  h={10} placeholder="Catagory like clothes, bills, communications, eating out etc.." />
            </Stack>


          </NativeBaseProvider>
          </View>

          <View style={styles.secondView}>
          <NativeBaseProvider>
              <Button
                style={styles.button}
                size="lg"
                variant="outline"
                colorScheme="secondary"
                onPress={()=>{
                  
              }}
              >
                EXPENSE
              </Button>
            </NativeBaseProvider>
          </View>
      </View>


  
    </KeyboardAvoidingView>






          
       
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  firstView: {
    flex: 3,
    backgroundColor: 'white'
  },
  secondView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#3498db'
  },
  button: {
    marginTop: 40,
    marginLeft: 150,
    borderRadius: 500,
    width: 115,
    height: 115,
    color: 'white',
    fontWeight: 'bold'
  },
  balanceBox: {
    width: 320,
    height: 95,
    backgroundColor: '#e74c3c',
    marginTop: 50,
    marginLeft: 55
  }

})
