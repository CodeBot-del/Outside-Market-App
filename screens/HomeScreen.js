import { StyleSheet, Text,TextInput, View, SafeAreaView, Image, Button } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import {useState} from 'react/cjs/react.development';
import {db} from '../components/config'

const HomeScreen = () => {
    const [storeName, setStoreName] = useState('');
    const [location, setLocation] = useState('');

    function create(){
        // Add a new document in collection "cities"
        db.collection("stores").add({
            name: "Nakiette Pharmacy",
            location: "Mwenge",
        })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });


    }

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
            <TextInput value={storeName} onChangeText={(storeName) => {setStoreName(storeName)}} placeholder='Enter store name' style={[styles.textBoxes, tw``]}></TextInput>
            <TextInput value={location} onChangeText={(location) => {setLocation(location)}} placeholder='Enter location' style={[styles.textBoxes, tw``]}></TextInput>
            <Button title='Add' style={styles.btn} onClick={create}></Button>
            






            </View>
            <NavOptions style={tw``}/>
        </View>
    </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    text:{
        color: "blue",
    },
    textBoxes:{
        width: '100%',
        fontSize: 18,
        padding: 12,
        borderColor: 'gray',
        borderWidth: 0.2,
        borderRadius: 10,
    },
    btn:{
        width: 10,
        padding: 3,
    }
});