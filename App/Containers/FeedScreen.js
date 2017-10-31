import React, { Component } from 'react'
import { Button, ScrollView, Text, Image, View, TouchableOpacity, ListView, ActivityIndicator } from 'react-native'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'
import ApiEndPoints from '../Services/ApiEndPoints.js'

import { Images } from '../Themes'
// Styles
import styles from './Styles/FeedScreenStyles'
import Cookie from 'react-native-cookie'
export default class FeedScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    return ApiEndPoints.getBusinessListing()
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson.status),
        }, function () {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render () {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Text style={{ color: 'white'}}>Feed Screen</Text>
          </View>
          <View style={{ flex: 1, paddingTop: 20 }}>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={(rowData) =>
              <View>
                  <Button
                    onPress={() => this.props.navigation.navigate('PlaceDetailsScreen', { name: rowData.businessName})}
                    title="Details"
                  />
                <Image source={{ uri: rowData.image ? rowData.image : '../images/ir.png'}} style={{ height: 50, width: 50 }} resizeMode='stretch' />
                <Text style={{ color: 'white' }}>{rowData.businessName}, {rowData.address}</Text>
              </View>}
            />
          </View>

          {/* <DevscreensButton /> */}
        </ScrollView>
      </View>
    )
  }
}
