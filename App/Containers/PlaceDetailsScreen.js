import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity, ListView, ActivityIndicator } from 'react-native'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'
import ApiEndPoints from '../Services/ApiEndPoints.js'

import { Images } from '../Themes'
// Styles
import styles from './Styles/PlaceDetailsScreenStyles'

export default class FeedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: null,
      isLoading: true
    }
  }

  componentDidMount() {
    console.log(this.props.navigation.state.params.id)
    return ApiEndPoints.getDestination(this.props.navigation.state.params.id)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        // let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.setState({
          place: responseJson[0],
          isLoading: false,
        }, function () {
          // do something with new state
        });
        console.log(this.state.place)
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render () {
    // this.getDestination(state.params.id)
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={styles.mainContainer}>
        <Image style={{ alignItems: 'center' }} source={require('../Images/launch-icon.png')} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Text style={{ color: 'white'}}>Place Details Screenasd</Text>
          </View>
          {/* <DevscreensButton /> */}
          <Text>Name: {this.props.navigation.state.params.name}</Text>
          <Text>Place details: {!this.state.isLoading ? this.state.place.socialIdentity.google: null}</Text>
        </ScrollView>
      </View>
    )
  }
}
