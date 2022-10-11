import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';

const Map = () => {
  return (
    <View style={[tw`bg-gray-100`,{top:-20, height: '80%'}]}>
      <Text style={tw`p-2`}>Here is the Map stuff...</Text>
    </View>
  )
}

export default Map

const styles = StyleSheet.create({})