import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  subHeaderText: {
    fontSize: 14,
    color: '#FF6D6D',
    fontWeight: '600',
    marginBottom: 20,
  },
  topCardContainer: {
    width: 100,
    height: 150,
    marginLeft: 15,
    marginRight: 15,
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
  },
  innercardContent: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  blurView: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  bgImg: {
    width: 170,
    height: 170,
    position: 'absolute',
    top: -height + 300,
    left: -100,
    zIndex: -1,
  },
  bgImg1: {
    width: 170,
    height: 170,
    position: 'absolute',
    top: -height + 450,
    right: -100,
    zIndex: -1,
  },
  readyText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  topCardHeading: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000000',
  },
});

export default styles;
