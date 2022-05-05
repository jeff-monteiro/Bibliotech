import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, View, TouchableOpacity, TextInput, Text, Image, Searchbar } from 'react-native'

import img from './produto.jpg'
import produto2 from './produto2.jpg'
import produto3 from './produto3.jpg'
import produto4 from './produto4.jpg'

const {width} = Dimensions.get('window')


const Catalog = ({navigation}) => {

  const backLog = () => {
    navigation.replace('Login')
  }
  
  return(
    <SafeAreaView style={Styles.container}>
      <View style={Styles.container}>
        <TouchableOpacity style={Styles.backButton} onPress={backLog} color="#000000">
          <Ionicons name="chevron-back" size={24} color='#000000'/>
        </TouchableOpacity>
        <Text style={Styles.title}>Categorias</Text>
        <TextInput style={Styles.textInput} />
        <ScrollView>
          <View style={Styles.viewerContainer}>
            <Image source={img} style={Styles.images}/>
              <Text>Description: That book talk about the adventures of the boy and friends of him.</Text>
            <Image source={produto2} style={Styles.images}/>
              <Text>Description: That book talk about the adventures of the boy and friends of him.</Text>
            <Image source={produto3} style={Styles.images}/>
              <Text>Description: That book talk about the adventures of the boy and friends of him.</Text>
            <Image source={produto4} style={Styles.images}/>
              <Text>Description: That book talk about the adventures of the boy and friends of him.</Text>  
          </View>
        </ScrollView>
      </View>
      
    </SafeAreaView>
  ) 
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffdb58',
    justifyContent: 'center',
    padding: 16,
  },
  backButton: {
    width: 50,
    height: 50,
    color:'#000000',
    marginBottom: -45,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000000',
  },
  textInput: {
    width: width - 32,
    backgroundColor: '#ffffff',
    padding: 13,
    marginBottom: 16,
    borderRadius: 25,
  },
  images: {
    borderRadius: 8,
  },
  viewerContainer: {
    alignItems: 'center',
  }
})

export default Catalog