import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';

const data = [
    {
        id: "123",
        title:'Explore',
        image: 'https://www.freeiconspng.com/thumbs/compass-icon/compass-icon-27.png',
        screen: 'ExploreScreen',
    },
    {
        id:'456',
        title:'Home',
        image: 'https://www.clipartmax.com/png/small/2-21103_home-house-silhouette-icon-building-transparent-background-home-icon.png',
        screen: 'HomeScreen',
    },
    {
        id:'789',
        title:'List',
        image: 'https://assets.stickpng.com/images/588a6507d06f6719692a2d15.png',
        screen: 'ListScreen',
    }
];

const NavOptions = () => {
  return (
    
    <FlatList
        style={[tw`bg-white h-12`,{top: '165%'}]}
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({item}) => (
            <TouchableOpacity style={[tw`p-2 ml-12`, {justifyContent: 'center'}]}>
                <View style={tw``}>
                    <Image 
                    style={{width: 30, height: 30, resizeMode: 'contain'}}
                    source={{
                        uri: item.image
                    }}
                    />
                </View>
            </TouchableOpacity>
        )}
    />
    
  )
}

export default NavOptions