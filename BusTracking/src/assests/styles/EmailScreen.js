import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  emailContainer: {
    // backgroundColor: 'red',
  },
  input: {
    borderWidth: 0,
  },
  container: {
    flex: 1,
    paddingTop: 65,
    backgroundColor: 'white',
  },
  labelInput: {
    color: '#673AB7',
  },
  formInput: {
    borderBottomWidth: 1.5,

    marginLeft: wp('5'),
    marginRight: wp('5'),
    borderColor: '#333',
  },
  cellStyle: {
    borderBottomWidth: 2,
    borderColor: 'gray',
  },
  cellFocused: {
    borderColor: '#673AB7',
    borderBottomWidth: 3,
  },
  placeholder: {
    width: 16,
    height: 16,
    borderRadius: 100,
    opacity: 0.4,
    backgroundColor: '#cacaca',
  },
  masked: {
    width: 16,
    height: 16,
    borderRadius: 100,
    opacity: 1,
    backgroundColor: '#673AB7',
  },
  textStyle: {fontFamily: 'Poppins-Medium', fontSize: 22, color: '#cacaca'},
});

export default styles;
