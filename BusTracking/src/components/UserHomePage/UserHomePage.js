import React, {Component} from 'react';
import {Text, View, Dimensions, PermissionsAndroid} from 'react-native';
import Mapview, {PROVIDER_GOOGLE, Marker, Polyline} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

export default class UserHomePage extends Component {
  state = {
    latitude: '',
    longitude: '',
  };
  componentDidMount = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    console.log(granted);

    if (granted) {
      // console.log(navigator.geolocation.getCurrentPosition());
      console.log('You can use the ACCESS_FINE_LOCATION');
      let data = {};
      await Geolocation.getCurrentPosition(async info => {
        const location = JSON.stringify(info);
        console.log('printing location', location);
        await this.setState({
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
        });
      });
      console.log(data);
    } else {
      console.log('ACCESS_FINE_LOCATION permission denied');
    }
  };

  render() {
    return (
      <View>
        <Text> Drivers location </Text>
        {/* <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        /> */}
        <Mapview
          testID="map"
          showsCompass
          showsTraffic
          showsUserLocation
          showsMyLocationButton
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={{
            height: Dimensions.get('window').height - 100,
          }}
          initialRegion={{
            //these locations are to be of the drivers which will be fetched from the database
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    );
  }
}
