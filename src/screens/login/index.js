import React from 'react'
import { SafeAreaView, StyleSheet, Text,TextInput } from 'react-native';

const Login = (props) => {
  return (
  <SafeAreaView style={Styles.container}>
    <Text style={Style.label}>Email</Text>
    <TextInput />
    <Text style={Style.label}>Senha</Text>
    <TextInput />
  </SafeAreaView>
  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3D4D84',
    justifyContent: 'center',
    padding: 16,
  }
  label: {
    fontSize: Normal,
  }
  textInput: {}
})

export default Login