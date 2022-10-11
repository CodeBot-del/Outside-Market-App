import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import { store } from "./store";
import {SafeAreaProvider} from "react-native-safe-area-context";
// import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import ExploreScreen from './screens/ExploreScreen';
import ListScreen from './screens/ListScreen';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    
    <Provider store={store}>
      <NavigationContainer>
      <SafeAreaProvider>

        <Stack.Navigator>
          <Stack.Screen
            name='HomeScreen'
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name='ExploreScreen'
            component={ExploreScreen}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name='ListScreen'
            component={ListScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </SafeAreaProvider>
      </NavigationContainer>
      
      
      
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
