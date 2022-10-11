import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'

import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';

const ListScreen = () => {
  return (
    <SafeAreaView  style={tw`bg-white h-full`}>
        <View style={tw`p-2 pl-4`}>
            <Image 
                style={{
                    width: 100, height: 100, resizeMode: 'contain'
                }}
                source={
                    require('../assets/logo.png')
                }
            />
            
            <View style={[tw`bg-gray-100`,{top:-20, height: '80%'}]}>
            <Text style={tw`p-2`}>This is the List stuff...</Text>
            </View>
            <NavOptions style={tw``}/>
        </View>
    </SafeAreaView>
  )
}

export default ListScreen

const styles = StyleSheet.create({})