import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'

import { Images } from '../Themes'
// Styles
import styles from './Styles/FeedScreenStyles'
import Cookie from 'react-native-cookie'

export default class FeedScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Text style={{ color: 'white'}}>Feed Screen</Text>
          </View>

          {/* <DevscreensButton /> */}
        </ScrollView>
      </View>
    )
  }
}
