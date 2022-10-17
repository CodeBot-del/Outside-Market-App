import { StyleSheet, Text,TextInput, View, SafeAreaView, Image, Button, TouchableOpacity, FlatList, Alert  } from 'react-native'
import React, {useState, useEffect} from 'react'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import {db} from '../components/config'

const HomeScreen = () => {
    const [storeName, setStoreName] = useState('');
    const [location, setLocation] = useState('');
    // const [name, setName] = useState([]);
    // const [loc, setLoc] = useState([]);
    const [shop, setShop] = useState([]);
    const shopRef = db.collection('stores');
    const [shopId, setShopId] = useState('');

    useEffect( () => {
        shopRef
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
                setShop(shops)
            }
        )
    }, [])

    let shops = [];

    function create(){
        // Add a new document in collection "cities"
        // check if the field are empty
        if(storeName === '' || location === ''){
            alert('Please fill in all the fields')
        }else{
            db.collection("stores").add({
                name: storeName,
                location: location,
            })
            .then(() => {
                alert('Store added successfully');
                // set states to empty
                setStoreName('');
                setLocation('');
                console.log("Document successfully written!");
            })
            .catch((error) => {
                alert(error);
                setStoreName('');
                setLocation('');
                console.error("Error writing document: ", error);
            });
        }
        


    }

    // function deleteDoc (id){
    //     db.collection("stores").doc(id).delete().then(() => {
    //         alert("Store successfully deleted!");
    //         console.log(id);
    //     }).catch((error) => {
    //         alert(error);
    //         console.error("Error removing document: ", error);
    //     });
    // }

    const deleteShop =  (shop) =>{
        shopRef.doc(shop.id).delete().then(()=> {
            alert('Store successfully deleted');
            console.log(shop.id);
        }).catch(error => {
            alert(error);
        })
    }
    

    const feedbackAlert = () =>

        

        Alert.alert(
        shop.name,
        "Choose Feedback Recieved",
        [
            {
            text: "Agreed",
            onPress: () => console.log("Agreed pressed")
            },
            {
            text: "Disagreed",
            onPress: () => {
                deleteShop(shop);
            },
            style: "cancel"
            },
            { text: "Cancel", onPress: () => console.log("Cancel Pressed"), style: "cancel" }
        ]
    );


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
            
            <View style={[tw`bg-white p-2`,{top:-20, height: '80%'}]}>
            <Text style={tw`font-semibold p-1`}>Add an unvisited store</Text>
            <TextInput value={storeName} onChangeText={(storeName) => {setStoreName(storeName)}} placeholder='Enter store name' style={[styles.textBoxes, tw``]}></TextInput>
            <Text></Text>
            <TextInput value={location} onChangeText={(location) => {setLocation(location)}} placeholder='Enter location' style={[styles.textBoxes, tw``]}></TextInput>
            <Text></Text>
            {/* <Button title='Add' style={styles.btn} onClick={create}></Button> */}
            <TouchableOpacity style={styles.btn} onPress={create}><Text style={tw`text-white font-semibold`}>Add</Text></TouchableOpacity>

            <View>
                <Text style={tw`text-center text-xl font-semibold text-gray-500`}>Pending Stores</Text>
            </View>
            <View style={[{width: '100%', height: '70%', flex: 1}, tw``]}>
                <FlatList
                    style={{height: '100%'}}
                    data={shop}
                    numColumns={1}
                    renderItem={({item}) => (
                        <TouchableOpacity
                            style={styles.row}
                            onPress={feedbackAlert}
                            // onClick={setShopId(item.id)}
                        >
                            <View style={styles.innerContainer}>
                                <Text style={styles.itemHeading}>{item.id}</Text>
                                <Text style={styles.itemText}>{item.location}</Text>
                            </View>

                        </TouchableOpacity>
                    )}
                />
            </View>
            






            </View>
            <NavOptions style={tw``}/>
        </View>
    </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    text:{
        color: "white",
        fontSize: 20,
    },
    textBoxes:{
        width: '100%',
        fontSize: 16,
        padding: 10,
        borderColor: 'gray',
        borderWidth: 0.2,
        borderRadius: 10,
    },
    btn:{
        width: 50,
        height: 30,
        padding: 3,
        backgroundColor: 'gray',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    row:{
        backgroundColor: '#e5e5e5',
        padding: 15,
        borderRadius: 15,
        margin: 5,
        marginHorizontal: 10,
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
});