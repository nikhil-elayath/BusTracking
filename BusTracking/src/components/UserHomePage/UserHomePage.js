import React, {Component} from 'react'
import {
  Text,
  View,
  Dimensions,
  PermissionsAndroid,
  StyleSheet,
} from 'react-native'
import Mapview, {PROVIDER_GOOGLE, Marker, Polyline} from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation'

export default class UserHomePage extends Component {
  state = {
    latitude: '',
    longitude: '',
  }
  componentDidMount = async () => {
    //askinf for permission of the users location
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    )
    if (granted) {
      await Geolocation.getCurrentPosition(async info => {
        console.log('info', info)
        await this.setState({
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
        })
      })
    } else {
      console.log('ACCESS_FINE_LOCATION permission denied')
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <View>
          <Text> User location </Text>
        </View>

        <Mapview
          testID='map'
          showsCompass
          showsTraffic
          showsUserLocation
          showsMyLocationButton
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          initialRegion={{
            //these locations are to be of the drivers which will be fetched from the database
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
    // justifyContent: 'flex-end',
    // alignItems: 'center',
  },
  // map: {

  //   // position: 'absolute',
  //   // top: 0,
  //   // left: 0,
  //   // right: 0,
  //   // bottom: 0,
  // },
  map: {
    height: Dimensions.get('window').height * 0.45,
  },
})
