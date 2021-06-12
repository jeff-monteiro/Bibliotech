import React from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, View, Dimensions } from 'react-native'

const {width} = Dimensions.get('window')

const Login = (props) => {
  return (
  <SafeAreaView style={Styles.container}>
    <Text style={Styles.label}>Email</Text>
    <TextInput style={Styles.textInput} />
    <Text style={Styles.label}>Senha</Text>
    <TextInput style={Styles.textInput}/>
  </SafeAreaView>
  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3D4D84',
    justifyContent: 'center',
    padding: 16,
    
  },
  label: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 16,
  },
  textInput: {
    width: width - 16,
    backgroundColor: '#C4C4C4',
    padding: 8,
    marginBottom: 16,
  },
})

export default Login