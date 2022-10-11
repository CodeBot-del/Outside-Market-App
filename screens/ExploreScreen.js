import { StyleSheet, Text, View, SafeAreaView, Image  } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import Map from '../components/Map';

const ExploreScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-2 pl-4`}>

            <Image 
                style={{
                    width: 100, height: 100, resizeMode: 'contain'
                }}
                source={
                    require('../assets/logo.png')
                }
            />
            <Map />

        <NavOptions style={[tw``,]}/>
      </View>
    </SafeAreaView>
  )
}

export default ExploreScreen

const styles = StyleSheet.create({})