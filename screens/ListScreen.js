import { StyleSheet, Text, View, SafeAreaView, Image, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react';
import Swiper from 'react-native-swiper';
import {db} from '../components/config'
import {Icon} from 'react-native-elements';

import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';

const ListScreen = () => {

    const [agreedShop, setAgreedShop] = useState([]);
    const [rejectedShop, setRejectedShop] = useState([]);


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
            
            <View style={[tw``,{top:-20, height: '80%'}]}>
                {/* PASS THE SWIPE VIEW */}
            <Swiper showsButtons={false} style={{}}>
                <View style={{alignItems: 'center'}}>
                    <Text style={[tw`font-semibold text-xl`, {color: '#9a031e',}]}>
                        Accepted
                    </Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Text style={[tw`text-xl font-semibold`, {color: '#9a031e'}]}>
                        Rejected
                    </Text>
                </View>
            </Swiper>
            </View>
            <NavOptions style={tw``}/>
        </View>
    </SafeAreaView>
  )
}

export default ListScreen

const styles = StyleSheet.create({})