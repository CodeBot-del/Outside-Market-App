import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import {Icon} from 'react-native-elements';

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
    },
    {
        id:'789',
        icon:'trash-outline',
        color: 'red',
    }
];

const FeedbackOptions = () => {

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