import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import {Icon} from 'react-native-elements';

const FloatButton = () => {
  return (
    <TouchableOpacity style={[tw`rounded-full p-3`,{top:'90%', zIndex: 999999, width:50, left:'40%', backgroundColor:'#9a031e'}]}>
        <Icon type='ionicon' color='white' name='trash-outline'
        /> 
    </TouchableOpacity>
  )
}

export default FloatButton

const styles = StyleSheet.create({})