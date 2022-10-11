import { StyleSheet, Text, View, SafeAreaView, Image  } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import Map from '../components/Map';
import { WebView } from 'react-native-webview';

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
            
            <View style={[tw`bg-gray-100`,{top:-20, height: '80%'}]}>
              <WebView
            style={{top:-20, 
                    height: 600,
                    width: '100%'
                  }}
            source={{ uri: 'https://www.google.com/maps/@-6.7871694,39.2479307,15z' }}
          />
          </View>
        <NavOptions style={[tw``,]}/>
      </View>
    </SafeAreaView>
  )
}

export default ExploreScreen

const styles = StyleSheet.create({})