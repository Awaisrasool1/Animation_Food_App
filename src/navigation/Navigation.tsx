import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import Home from '../screen/home/Home';
import FoodDetails from '../screen/foodDetails/FoodDetails';

const Stack = createSharedElementStackNavigator();

const Navigation = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="foodDetails"
          component={FoodDetails}
          options={{
            headerShown: false,
            transitionSpec: {
              open: {animation: 'timing', config: {duration: 400}},
              close: {animation: 'timing', config: {duration: 400}},
            },
          }}
          sharedElements={route => {
            const {image} = route.params;
            console.log(image.id)
          return ['image'+image.id];
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default Navigation;
