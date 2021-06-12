import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, View, TouchableOpacity, TextInput, Text, Image } from 'react-native'
import img from './produto.jpg'

const {width} = Dimensions.get('window')


const Catalog = ({navigation} ) => {

  const backLog = () => {
    navigation.replace('Login')
  }

  return(
    <SafeAreaView style={Styles.container}>
      <View style={Styles.container}>
        <TouchableOpacity style={Styles.backButton} onPress={backLog}>
          <Ionicons name="chevron-back" size={24} color='#C4C4C4'/>
        </TouchableOpacity>
        <Text style={Styles.title}>Categorias</Text>
        <TextInput style={Styles.textInput}/>
        <ScrollView>
          <View>
            <Image source={img}/>
            <Text>Texto1</Text>
            <Text>Texto2</Text>
          </View>
        </ScrollView>
      </View>
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
  backButton: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 32,
    color: '#C4C4C4',
  },
  textInput: {
    width: width - 32,
    backgroundColor: '#C4C4C4',
    padding: 10,
    marginBottom: 16,
    borderRadius: 5,
  },
})

export default Catalog