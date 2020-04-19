import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    // height: hp('8'),
    // width: wp('8'),
    flexDirection: 'row',
    paddingTop: 10,
    // opacity: 50,
  },
  buttonVisible: {
    alignItems: 'center',
    backgroundColor: '#cacaca',
    height: hp('5'),
    width: wp('15'),
  },
  buttonNotVisible: {
    alignItems: 'center',
    backgroundColor: 'rgba(202,202,202,0.7)',
    height: hp('5'),
    width: wp('15'),
    // opacity: 50,
  },
  greyedText: {
    color: 'rgba(202,202,202,0.7)',
  },
  visibleText: {
    color: 'black',
  },
});
export default styles;
