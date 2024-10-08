import {View, Text, Image, Animated, Dimensions, FlatList} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {useRoute} from '@react-navigation/native';
import style from './style';
import Animate, {FadeInLeft} from 'react-native-reanimated';
import {FadeInDown} from 'react-native-reanimated';
import {detailData} from '../../listOfData/ListOfData';
import {SharedElement} from 'react-navigation-shared-element';

const {width, height} = Dimensions.get('screen');

export default function FoodDetails() {
  const Route: any = useRoute();
  const title = useRef(new Animated.Value(0)).current;
  const starBox = useRef(new Animated.Value(0)).current;
  const {image} = Route?.params;
  // console.log(Route?.params)
  useEffect(() => {
    setTimeout(() => {
      Animated.spring(title, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
      Animated.spring(starBox, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    }, 500);
  }, []);

  const scrollX = title.interpolate({
    inputRange: [0, 1],
    outputRange: [0, (width - 40) * 0.4],
  });
  const _scrollX = starBox.interpolate({
    inputRange: [0, 1],
    outputRange: [(width - 40) * 0.6, 0],
  });
  const RenderItem = ({item, index}: any) => {
    return (
      <Animate.View
        entering={FadeInLeft.delay(index == 0 ? 400 : index * 500).springify()}
        style={style.extraDetailBox}>
        <Image style={style.extraDetailImg} source={{uri: item.img}} />
        <View>
          <Text style={[style.extraDetailText, {marginTop: 5}]}>Extra</Text>
          <Text style={style.extraDetailText}>{item.name}</Text>
        </View>
      </Animate.View>
    );
  };
  return (
    <View style={style.container}>
      <Animated.View
        style={[style.logoContainer, {transform: [{translateX: scrollX}]}]}>
        <Image source={require('../../img/food.png')} />
        <Text style={style.title}>Fasfu</Text>
      </Animated.View>
      <View style={{alignItems: 'center'}}>
        <Animate.Text
          entering={FadeInDown.duration(1100)}
          style={style.itemName}>
          Neopolitan Pizza
        </Animate.Text>
        <Animate.Text
          entering={FadeInDown.duration(1200)}
          style={style.itemDecription}>
          Tamato paste, mezzarella cheese, milano tomato, basil
        </Animate.Text>
      </View>
      <View style={{alignItems: 'center', marginTop: 40}}>
        <View>
          <SharedElement id={'image' + Route.params.image.id}>
            <Image style={style.img} source={Route.params.image.img} />
          </SharedElement>
          <Animated.View
            style={[style.star, {transform: [{translateX: _scrollX}]}]}>
            <Image source={require('../../img/star.png')} />
          </Animated.View>
          <View style={style.quntatyBox}>
            <Text style={style.plusText}>+</Text>
            <Text style={style.plusText}>0</Text>
            <Text style={style.plusText}>-</Text>
          </View>
        </View>
      </View>
      <View style={{marginTop: 50}}>
        <Animate.Text
          entering={FadeInLeft.duration(1000)}
          style={[
            style.itemName,
            {textAlign: 'left', marginBottom: 15, marginLeft: 10},
          ]}>
          Extras
        </Animate.Text>
        <FlatList
          horizontal
          data={detailData}
          renderItem={RenderItem}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <Animate.View entering={FadeInLeft.duration(1000)} style={{flexDirection: 'row',alignItems:'center',marginLeft:40,marginTop:20,gap:20}}>
        <View style={{flexDirection: 'row',alignItems:'center'}}>
          <Text style={{fontWeight:'700',fontSize:16,color:'black'}}>$</Text>
          <Text style={{fontWeight:'700',fontSize:18,color:'black'}}> 18.99</Text>
        </View>
        <View
          style={{
            backgroundColor: '#FF6D6D',
            paddingVertical: 7,
            borderRadius: 7,
            paddingHorizontal: 20,
          }}>
          <Image
            source={require('../../img/cart.png')}
            style={{width: 20, height: 20}}
          />
        </View>
      </Animate.View>
    </View>
  );
}
