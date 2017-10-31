import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity, ListView, ActivityIndicator } from 'react-native'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'
// import ApiEndPoints from '../Services/ApiEndPoints.js'

import { Images } from '../Themes'
// Styles
import styles from './Styles/PlaceDetailsScreenStyles'

export default class FeedScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Text style={{ color: 'white'}}>Place Details Screen</Text>
          </View>
          {/* <DevscreensButton /> */}
        </ScrollView>
      </View>
    )
  }
}
