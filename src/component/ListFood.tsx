import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import Animated from 'react-native-reanimated';

export default function ListFood(props: any) {
  return (
    <Pressable onPress={()=>{props.onPress()}}>
      <Animated.View entering={props.FadeInRight} style={styles.cardContainer}>
        <View style={styles.cardContent}>
          <View style={{flex: 0.5, alignItems: 'center'}}>
            <Text style={styles.pizzaName}>pizza</Text>
            <Text style={styles.pizzaPrice}>300</Text>
          </View>
          <View style={{flex: 0.5}}>
            <Image source={props.img} style={styles.image} />
          </View>
        </View>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: '90%',
    height: 130,
    marginTop: 5,
    marginBottom: 5,
    alignSelf: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    elevation: 2,
    borderRadius: 10,
  },
  cardContent: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 10,
  },
  pizzaName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  pizzaPrice: {
    marginTop: 5,
    fontSize: 14,
    backgroundColor: '#FF6D6D',
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 30,
    color: 'white',
    fontWeight: '700',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    flex: 1,
  },
});
