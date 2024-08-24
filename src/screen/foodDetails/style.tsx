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
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: 'yellow',
    position: 'absolute',
    right: 15,
    top: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quntatyBox: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    backgroundColor: '#FF6D6D',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#FF6D6D',
    borderRadius: 5,
    position: 'absolute',
    bottom: 10,
    right: -20,
  },
  plusText: {
    fontSize: 14,
    color: 'white',
    width: 30,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  extraDetailBox: {
    width: 200,
    backgroundColor: '#f1f1f3',
    elevation: 3,
    flexDirection: 'row',
    gap: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    padding: 10,
    borderRadius: 15,
  },
  extraDetailText:{
    fontSize:13,
    fontWeight:'600',
    color:'black'
  },
  extraDetailImg: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
});

export default style;
