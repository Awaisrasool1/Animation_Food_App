import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import Home from '../screen/home/Home';
import FoodDetails from '../screen/foodDetails/FoodDetails';
const Stack = createSharedElementStackNavigator();

const Navigation = () => {
  return (
    <>
      <Stack.Navigator initialRouteName={'Home'} screenOptions={({}) => ({})}>
        <Stack.Screen
          name={'Home'}
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'foodDetails'}
          component={FoodDetails}
          options={{
            headerShown: false,
            transitionSpec: {
              open: {animation: 'timing', config: {duration: 500}},
              close: {animation: 'timing', config: {duration: 500}},
            },
          }}
          sharedElements={() => {
            return ['img'];
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default Navigation;
