import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native'


const Catalog = ( {ǹavigation} ) => {

  const back = () => {
    navigation.replace('Login')
  }

  return(
    <SafeAreaView style={Styles.container}>
      <View style={Styles.container}>
        <TouchableOpacity style={Styles.backButton} onPress={back}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <ScrollView></ScrollView>
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
    width: 100,
    height: 100,
  },
})

export default Catalog