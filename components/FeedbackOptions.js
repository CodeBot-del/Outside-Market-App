import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import tw from 'tailwind-react-native-classnames';
import {Icon} from 'react-native-elements';
import {db} from './config'; 


const data = [
    {
        id: "123",
        icon:'thumbs-down-sharp',
        color: '#d62828',
        function: 'reject',
    },
    {
        id:'456',
        icon:'thumbs-up-sharp',
        color: 'green',
        function: 'agree',
    },
    {
        id:'789',
        icon:'trash-outline',
        color: 'red',
        function: 'deleteShop',
    }
];

const FeedbackOptions = () => {
    const shopRef = db.collection('stores');
    const [shop, setShop] = useState([]);
    
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

    function deleteShop(shop) {
        // prevent the default action
        shopRef.doc(shop.id).delete().then(()=> {
            alert('Store successfully deleted');
            console.log(shop.id);
        }).catch(error => {
            alert(error);
        })
    }

    function reject(shop) {
        console.log("Reject shop pressed")
    }

    function agree(shop) {
        console.log("agree shop pressed")
    }

  return (
    
    <FlatList
        style={[tw`h-12`,{position: 'relative',}]}
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({item}) => (
            <TouchableOpacity 
            // onPress={()=>}
            style={[tw`ml-12`, {justifyContent: 'center'}]}>
                <View style={tw``}>
                    <Icon 
                        type='ionicon'
                        color={item.color}
                        name={item.icon}
                    />
                </View>
            </TouchableOpacity>
        )}
    />
    
  )
}

export default FeedbackOptions