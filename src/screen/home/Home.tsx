import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {burgerData, data1, pizzaData} from '../../listOfData/ListOfData';
import ListFood from '../../component/ListFood';
import styles from './styles';
import Animated, {
  FadeInLeft,
  FadeInRight,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

const {width, height} = Dimensions.get('screen');

export default function Home() {
  const [data, setData] = useState(data1);
  const [imgFlag, setImgFlag] = useState(1);
  const scrollY = useSharedValue(0);

  const changeBgColor = (id: any) => {
    setImgFlag(id);
    for (let i = 0; i < data.length; i++) {
      data[i].isactive = id == data[i].id;
    }
    setData([...data]);
  };

  const topCard = ({item}: any) => {
    return (
      <TouchableOpacity
        style={[styles.topCardContainer]}
        onPress={() => changeBgColor(item.id)}>
        <View
          style={[
            styles.blurView,
            item.isactive
              ? {backgroundColor: '#FF6D6D'}
              : {
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  borderWidth: 0.4,
                  borderColor: 'gray',
                },
          ]}>
          <View style={styles.innercardContent}>
            <Image source={item.img} style={styles.image} />
            <Text
              style={[
                styles.topCardHeading,
                item.isactive && {color: '#FFFFFF'},
              ]}>
              {item.text}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${scrollY.value}rad`,
        },
      ],
    };
  });

  const flatListAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: scrollY.value * -100,
        },
      ],
      opacity: 1 - scrollY.value,
    };
  });

  return (
    <View style={styles.container}>
      <View style={{paddingHorizontal: 20, marginTop: 10}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
            <Image source={require('../../img/food.png')} />
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                color: '#FF6D6D',
                letterSpacing: 1,
              }}>
              Fasfu
            </Text>
          </View>
          <Image source={require('../../img/message.png')} />
        </View>
        <Text style={styles.headerText}>Order now</Text>
        <Text style={styles.subHeaderText}>What do you want to eat today?</Text>
      </View>

      <ScrollView
        onScroll={event => {
          scrollY.value = event.nativeEvent.contentOffset.y / 100;
        }}
        scrollEventThrottle={16}>
        <View style={{height: 180}} />
        <Text style={styles.readyText}>Ready in 15 minutes!</Text>
        <View style={{paddingHorizontal: 20, flex: 1}}>
          {imgFlag == 1 && (
            <FlatList
              data={burgerData}
              renderItem={({item, index}) => (
                <ListFood
                  {...item}
                  index={index}
                  FadeInRight={FadeInRight.duration(index * 1000)}
                />
              )}
            />
          )}
          {imgFlag == 2 && (
            <FlatList
              data={pizzaData}
              renderItem={({item, index}) => (
                <ListFood
                  {...item}
                  index={index}
                  FadeInRight={FadeInRight.duration(index * 1000)}
                />
              )}
            />
          )}
        </View>
        <View style={{height: 50}} />
      </ScrollView>

      {/* top card */}
      <Animated.View
        style={[{position: 'absolute', top: 120}, flatListAnimatedStyle]}>
        <FlatList
          style={{height: 170, width: '100%'}}
          data={data}
          renderItem={topCard}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </Animated.View>

      {/* bg image */}
      <View>
        {imgFlag == 1 && (
          <Animated.Image
            entering={FadeInLeft.duration(700)}
            source={require('../../img/burger2.png')}
            style={[styles.bgImg, animatedStyle]}
          />
        )}
        {imgFlag == 2 && (
          <Animated.Image
            entering={FadeInLeft.duration(700)}
            source={require('../../img/pizza5.png')}
            style={[styles.bgImg, {top: -height + 200}, animatedStyle]}
          />
        )}
      </View>
      <View>
        {imgFlag == 1 && (
          <Animated.Image
            entering={FadeInRight.duration(700)}
            source={require('../../img/burger1.png')}
            style={[styles.bgImg1, animatedStyle]}
          />
        )}
        {imgFlag == 2 && (
          <Animated.Image
            entering={FadeInRight.duration(700)}
            source={require('../../img/pizza4.png')}
            style={[styles.bgImg1, {top: -height + 500}, animatedStyle]}
          />
        )}
      </View>
    </View>
  );
}
