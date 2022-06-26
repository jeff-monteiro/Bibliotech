import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Dimensions, SafeAreaView, StyleSheet, View, TouchableOpacity, TextInput, Text, Image, Searchbar } from 'react-native'

  

const Readingscreen = ({navigation}) => {

  const backRead = () => {
    navigation.replace('Catalog')
  }

  return (
    <SafeAreaView style={Styles.container}>
      <View>
        <TouchableOpacity style={Styles.backButton} onPress={backRead} color="#000000">
            <Ionicons name="chevron-back" size={24} color='#000000'/>
        </TouchableOpacity>
        <Text style={Styles.content}>Hello World</Text>
      </View>
    </SafeAreaView>
  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffdb58',
    justifyContent: 'center',
    padding: 0,
    alignItems: 'center',
  },
  backButton: {
    width: 50,
    height: 70,
    color:'#000000',
    marginTop: -200,
  },
  content:{
    alignItems: 'center',
    marginBottom: -50,
  }

  
})

export default Readingscreen