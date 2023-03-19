import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import Geofencing from 'react-native-geo-fencing';
import { request, PERMISSIONS } from 'react-native-permissions';

class GeofencingExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      geofences: [],
      location: null,
      errorMessage: '',
      geofenceStatus: '',
    };
  }

  componentDidMount() {
    this.requestLocationPermission();
  }

  requestLocationPermission = async () => {
    try {
      const granted = await request(PERMISSIONS.IOS.LOCATION_ALWAYS);
      if (granted === 'granted') {
        this.getCurrentLocation();
        this.createGeofences();
      } else {
        this.setState({
          errorMessage: 'Location permission denied',
        });
      }
    } catch (err) {
      console.warn(err);
    }
  };

  getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const location = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        this.setState({ location });
      },
      (error) => {
        console.warn(error.code, error.message);
        this.setState({ errorMessage: error.message });
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );
  };

  createGeofences = () => {
    const geofences = [
      {
        id: 'geofence-1',
        latitude: this.state.location.latitude,
        longitude: this.state.location.longitude,
        radius: 1000,
        transitionType: Geofencing.ENTER,
      },
      {
        id: 'geofence-2',
        latitude: this.state.location.latitude + 0.01,
        longitude: this.state.location.longitude + 0.01,
        radius: 500,
        transitionType: Geofencing.EXIT,
      },
    ];

    Geofencing.addGeofences(geofences, () => {
      console.log('Geofences added');
    });
    this.setState({ geofences });
  };

  onGeofenceEnter = (event) => {
    console.log('Geofence entered: ', event.id);
    this.setState({
      geofenceStatus: `You entered geofence ${event.id}`,
    });
  };

  onGeofenceExit = (event) => {
    console.log('Geofence exited: ', event.id);
    this.setState({
      geofenceStatus: `You exited geofence ${event.id}`,
    });
  };

  render() {
    const { geofenceStatus } = this.state;

    return (
      <View>
        <Text>{geofenceStatus}</Text>
      </View>
    );
  }
}

export default GeofencingExample;
