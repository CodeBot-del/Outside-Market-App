import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import { WebView } from 'react-native-webview';

const Map = () => {
  return (
    <View style={{flex:1}}>
        <WebView
      style={styles.container}
      source={{ uri: 'https://expo.dev' }}
    />
    </View>
    
  )
}

export default Map

const styles = StyleSheet.create({
    container:{
        flex: 1,
        top:-20, 
        height: '80%'
    }
})