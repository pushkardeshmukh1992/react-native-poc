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
    return ApiEndPoints.getDestinations()
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson),
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
          <View style={{ flex: 1, paddingTop: 10 }}>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={(rowData) =>
                <View style={{ flex: 1, flexDirection: 'row',  borderColor: '#CECECE', borderStyle: 'solid', borderBottomWidth: 1.0, paddingVertical: 16 }}>
                  <Image source={{ uri: rowData.image ? rowData.image : '../Images/ir.png' }} style={{ flex: 3, height: 110, width: 50, borderRadius: 100, marginHorizontal: 10 }} />
                  <View style={{ flexDirection: 'column', flex: 6 }}>
                    <Text style={{ fontSize: 20, color: 'black', paddingHorizontal: 8 }}>{rowData.name}</Text>
                    <Text style={{ color: '#aaa', fontSize: 16, paddingHorizontal: 4 }}> {rowData.type.toUpperCase()}</Text>
                    {/* <Text numberOfLines={1} style={{ color: 'black', paddingHorizontal: 8 }}> {rowData.address}</Text> */}
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start', paddingHorizontal: 8, paddingVertical: 8, justifyContent: 'space-between' }}>
                      <Image source={ require('../Images/Emoticons-05-512.png') } style={{ width: 20, height: 20, alignSelf: 'flex-end' }} />
                      <Text style={{ fontWeight: 'bold', color: 'black' }}> Stunning Today </Text>
                      <Text style={{ fontWeight: '300', alignSelf: 'flex-end', fontSize: 10, color: 'grey' }}> 23 minutes ago </Text>
                    </View>
                    <View style={{ paddingHorizontal: 8 }}>
                      <Button
                        onPress={() => this.props.navigation.navigate('PlaceDetailsScreen', { id: rowData._id, name: rowData.name })}
                        title="Details"
                      />
                    </View>
                  </View>
              </View>}
            />
          </View>

          {/* <DevscreensButton /> */}
        </ScrollView>
      </View>
    )
  }
}
