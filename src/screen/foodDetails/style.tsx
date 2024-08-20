import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('screen');

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
  },
  img: {
    width: width - 200,
    height: width - 200,
  },
  logoContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginVertical: 20,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
    letterSpacing: 0.5,
    textAlign: 'center',
    width: 100,
  },
  itemDecription: {
    fontSize: 14,
    fontWeight: '600',
    color: 'black',
    letterSpacing: 0.5,
    textAlign: 'center',
    width: 250,
    marginTop: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FF6D6D',
    letterSpacing: 1,
  },
  star: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'blue',
    position: 'absolute',
    right: 15,
    top: 15,
  },
});

export default style;
