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
    const agreeRef = db.collection('agreed');
    const rejectRef = db.collection('rejected');

    function rejected () {
        rejectRef
        .onSnapshot(
            querySnapshot => {
                const shops = []
                querySnapshot.forEach((doc) => {
                    const {name, location} = doc.data();
                    shops.push({
                        id: doc.id,
                        name,
                        location,
                    })
                })
                setRejectedShop(shops)
            }
        )
    }

    function agreed () {
        agreeRef
        .onSnapshot(
            querySnapshot => {
                const shops = []
                querySnapshot.forEach((doc) => {
                    const {name, location} = doc.data();
                    shops.push({
                        id: doc.id,
                        name,
                        location,
                    })
                })
                setAgreedShop(shops)
            }
        )
    }

    useEffect( () => {
        rejected();
        agreed();
    },[]);


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
                        Accepted Stores
                    </Text>
                    <FlatList
                    style={{height: '100%', width:'100%', }}
                    data={agreedShop}
                    numColumns={1}
                    renderItem={({item}) => (
                        <View
                            style={styles.row}
                            // onClick={setShopId(item.id)}
                        >
                            <View style={styles.innerContainer}>
                                <Text style={styles.itemHeading}>{item.name}</Text> 
                                <Text style={styles.itemText}>{item.location}</Text>
                            </View>
                            </View>
                    )}
                />

                </View>
                <View style={{alignItems: 'center'}}>
                    <Text style={[tw`text-xl font-semibold`, {color: '#9a031e'}]}>
                        Rejected Stores
                    </Text>
                    <FlatList
                    style={{height: '100%', width:'100%', }}
                    data={rejectedShop}
                    numColumns={1}
                    renderItem={({item}) => (
                        <View
                            style={styles.row}
                            // onClick={setShopId(item.id)}
                        >
                            <View style={styles.innerContainer}>
                                <Text style={styles.itemHeading}>{item.name}</Text> 
                                <Text style={styles.itemText}>{item.location}</Text>
                            </View>
                            </View>
                    )}
                />
                </View>
            </Swiper>
            </View>
            <NavOptions style={tw``}/>
        </View>
    </SafeAreaView>
  )
}

export default ListScreen

const styles = StyleSheet.create({
    row:{
        backgroundColor: '#e5e5e5',
        padding: 15,
        borderRadius: 15,
        margin: 5,
        marginHorizontal: 10,
        width:'90%'
    },
    innerContainer:{
        alignItems: 'center',
        flexDirection: 'column',

    },
    itemHeading:{
        fontWeight: 'bold',
        fontSize: 18,
    },
    itemText:{
        fontWeight: '300'
    }
})