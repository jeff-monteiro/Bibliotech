import React from 'react'
import { StyleSheet, Text, Button, TextInput, View, Dimensions} from 'react-native'

const {width} = Dimensions.get('window')

const Login = ( {navigation} ) => {

  const doLogin = () => {
    navigation.replace('Catalog')
  }

  return (
  <View style={Styles.container}>
    <Text style={Styles.label}>Usuário</Text>
      <TextInput style={Styles.textInput} />
    <Text style={Styles.label}>Senha</Text>
      <TextInput style={Styles.textInput}/>
    <Button style={Styles.button} onPress={doLogin}>
      <Text style={Styles.buttonText}>Login</Text>
    </Button>
  </View>
  )

  const formLoginButton = () => {
    
  }
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
    }
})

export default Login