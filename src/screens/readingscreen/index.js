import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Dimensions, SafeAreaView, StyleSheet, View, TouchableOpacity, TextInput, Text, Image, Searchbar } from 'react-native'

  

const Readingscreen = ({navigation}) => {

  const backRead = () => {
    navigation.replace('Catalog')
  }

  return (
    <SafeAreaView style={Styles.container}>
      <TouchableOpacity style={Styles.backButton} onPress={backRead} color="#000000">
          <Ionicons name="chevron-back" size={24} color='#000000'/>
      </TouchableOpacity>
      <Text>Hello World</Text>
    </SafeAreaView>
  )
}

const Styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 300,
  }
})

export default Readingscreen