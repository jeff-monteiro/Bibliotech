import React from 'react'
import { StyleSheet, Text, TextInput, View, Dimensions, TouchableOpacity} from 'react-native'

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
    <TouchableOpacity style={Styles.button} onPress={doLogin}>
      <Text style={Styles.buttonText}>Login</Text>
    </TouchableOpacity>
  </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3D4D84',
    justifyContent: 'center',
    padding: 16,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  textInput: {
    width: width - 64,
    backgroundColor: '#C4C4C4',
    padding: 10,
    marginBottom: 16,
    borderRadius: 5,
  },
  button: {
    margin: 16,
  },
    buttonText: {
      alignSelf: 'center',
      color: '#FFFFFF',
      fontSize: 18,
    }
})

export default Login