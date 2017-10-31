import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'

import { Images } from '../Themes'
import InstagramLogin from 'react-native-instagram-login'
// Styles
import styles from './Styles/LaunchScreenStyles'
import Cookie from 'react-native-cookie'

export default class LaunchScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
  }
  
  logout () {
    console.log('test')
    Cookie.clear().then(() => {
      this.setState({ token: null })
    })
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Text style={{ color: 'white'}}>App Home Screen</Text>
          </View>

          {/* <View style={styles.section} >
            <Image source={Images.ready} />
            <Text style={styles.sectionText}>
              This probably isn't what your app is going to look like. Unless your designer handed you this screen and, in that case, congrats! You're ready to ship. For everyone else, this is where you'll see a live preview of your fully functioning app using Ignite.
            </Text>
          </View> */}

          <View style={{ alignItems: 'center'}}>
            {!this.state.token ? (
              <TouchableOpacity style={{ borderRadius: 5, backgroundColor: 'orange', height: 30, width: 150, justifyContent: 'center', alignItems: 'center' }} onPress={() => this.refs.instagramLogin.show()}>
                <Text style={{ color: 'white' }}>Instagram Login</Text>
              </TouchableOpacity>
            ) : (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ margin: 10 }}>token: {this.state.token}</Text>
                  <TouchableOpacity style={{ borderRadius: 5, backgroundColor: 'green', height: 30, width: 100, justifyContent: 'center', alignItems: 'center' }} onPress={() => this.logout()}>
                    <Text style={{ color: 'white' }}>Logout</Text>
                  </TouchableOpacity>
                </View>
              )
            }
            <InstagramLogin
              ref='instagramLogin'
              clientId='9057283edced466ab6caa5dac86be81c'
              scopes={['public_content', 'follower_list']}
              redirectUrl='http://localhost:3000/auth/instagram/callback'
              onLoginSuccess={(token) => this.setState({ token })}
            />
          </View>

          <View style={{ height: 50 }}></View>
          <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Latitude: {this.state.latitude}</Text>
            <Text>Longitude: {this.state.longitude}</Text>
            {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
          </View>

          {/* <DevscreensButton /> */}
        </ScrollView>
      </View>
    )
  }
}
