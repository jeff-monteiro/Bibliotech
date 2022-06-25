import React, { useState } from 'react'
import { StyleSheet, Text, Button, TextInput, SafeAreaView, Dimensions} from 'react-native'
import Toast from 'react-native-toast-message'
import uuid from 'react-native-uuid'
import AsyncStorage from '@react-native-async-storage/async-storage'


const {width} = Dimensions.get('window')

const Login = ( {navigation} ) => {

  const doLogin = () => {
    navigation.replace('Catalog')
  }

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleButton(){

    const id = uuid.v4()

    const newData = {
      id,
      email,
      password,
    }

    await AsyncStorage.setItem("@savepass:passwords", JSON.stringify(newData))
    Toast.show({
      type: "success",
      text: "Senha Cadastrada!"
    })
  }

  return (
  <SafeAreaView style={Styles.container}>
    <Text style={Styles.header}>Bibliotech</Text>
    <Text style={Styles.label}>Usuário</Text>
      <TextInput 
        style={Styles.textInput}
        onChangeText={setEmail}
        value={email}
       />
    <Text style={Styles.label}>Senha</Text>
      <TextInput 
        style={Styles.textInput}
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <Button
          title="Login" onPress={doLogin} color="#000000"
        />
      <Text style={Styles.google}>
        <Button title="Google" color="#000000"/>
      </Text>
  </SafeAreaView>
  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffdb58',
    justifyContent: 'center',
    padding: 16,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    marginTop:20,
    padding:6,
    color: '#000000',
  },
  textInput: {
    width: width - 64,
    backgroundColor: '#ffffff',
    padding: 13,
    marginBottom: 16,
    borderRadius: 25,
  },
  button: {
    margin: 16,
  },
  buttonText: {
    alignSelf: 'center',
    color: '#000000',
    fontSize: 18,
  },
  google: {
    marginTop: 120,
    alignItems: 'center',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 40,
  },
})

export default Login