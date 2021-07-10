import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  Button,
  Divider,
  Heading,
  VStack,
  Stack,
  Center,
  NativeBaseProvider,
} from "native-base"


export default class  extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.firstView}>
          <Text style={styles.text}> Income </Text>
          <Text style={styles.incomeAmount}> 20000 </Text>
          <Text style={styles.text}> Expense </Text>
          <Text style={styles.expenseAmount}> 5000 </Text>
          <View style={styles.balanceBox}>
            <Text style={styles.balanceText}> Balance </Text>
            <Text style={styles.balanceText}> 15000 </Text>
          </View>
          
        </View>

        <View style={styles.secondView}>
          <View>
            <NativeBaseProvider>
              <Button
                style={styles.button}
                size="lg"
                variant="outline"
                colorScheme="secondary"
                onPress={() => console.log("hello world")}
              >
                EXPENSE
              </Button>
            </NativeBaseProvider>
          </View>

          <View>
            <NativeBaseProvider>
              <Button
                style={styles.button2}
                size="lg"
                variant="outline"
                colorScheme="success"
                onPress={() => console.log("hello world")}
                >
                INCOME
              </Button>
            </NativeBaseProvider>
          </View>

        </View>
        
        
      </View>
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
  text: {
    color: 'grey',
    fontSize: 50,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold'
  }, 
  incomeAmount: {
    color: '#27ae60',
    fontSize: 40,
    textAlign: 'center',
    marginTop: -5,
    marginLeft: -10,
    fontWeight: 'bold',
    flexDirection:'row',
    flexWrap:'wrap'
  },
  expenseAmount: {
    color: 'red',
    fontSize: 40,
    textAlign: 'center',
    marginTop: -5,
    marginLeft: -10,
    fontWeight: 'bold',
    flexDirection:'row',
    flexWrap:'wrap'
  },
  balanceBox: {
    width: 250,
    height: 65,
    backgroundColor: '#2ecc71',
    marginTop: 50,
    marginLeft: 85
  },
  balanceText: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center'
  },
  button: {
    marginTop: 40,
    marginLeft: 30,
    borderRadius: 500,
    width: 115,
    height: 115,
    color: 'white',
    fontWeight: 'bold'
  },
  button2: {
    marginTop: 40,
    marginLeft: 5,
    borderRadius: 500,
    width: 115,
    height: 115,
    color: 'white',
    fontWeight: 'bold'
  },
})