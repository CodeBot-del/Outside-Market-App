import { FlatList, Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import {Icon} from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const data = [
    {
        id: "123",
        title:'Explore',
        icon:'earth',
        image: 'https://www.freeiconspng.com/thumbs/compass-icon/compass-icon-27.png',
        screen: 'ExploreScreen',
    },
    {
        id:'456',
        title:'Home',
        icon:'home',
        image: 'https://www.clipartmax.com/png/small/2-21103_home-house-silhouette-icon-building-transparent-background-home-icon.png',
        screen: 'HomeScreen',
    },
    {
        id:'789',
        title:'List',
        icon:'bars',
        image: 'https://assets.stickpng.com/images/588a6507d06f6719692a2d15.png',
        screen: 'ListScreen',
    }
];

const NavOptions = () => {

    const navigation = useNavigation();

  return (
    <View  style={[tw`h-12`,{position: 'relative', alignItems: 'center', justifyContent: 'space-between',}]}>

        <FlatList
            style={[tw``,{position: 'relative',}]}
            data={data}
            keyExtractor={(item) => item.id}
            horizontal
            renderItem={({item}) => (
                <TouchableOpacity 
                onPress={()=>navigation.navigate(item.screen)}
                style={[tw``, {justifyContent: 'center', alignItems: 'center',}]}>
                    <View style={[tw``, styles.container]}>
                        
                        <Icon 
                            type='antdesign'
                            color='black'
                            name={item.icon}
                            style={[ tw`bg-white rounded-full p-2`]}
                        />
                    </View>
                </TouchableOpacity>
            )}
        />
    </View>
    
  )
}

export default NavOptions
const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        width: 110,
    }
})