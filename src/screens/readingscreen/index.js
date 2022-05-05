import React from 'react'
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, View, TouchableOpacity, TextInput, Text, Image, Searchbar } from 'react-native'

const Readingscreen = () => {
  return (
    <SafeAreaView style={Styles.container}>
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