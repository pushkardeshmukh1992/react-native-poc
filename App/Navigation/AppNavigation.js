import { StackNavigator, TabNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import FeedScreen from '../Containers/FeedScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
// const PrimaryNav = StackNavigator({
//   LaunchScreen: { screen: LaunchScreen }
// }, {
//   // Default config for all screens
//   headerMode: 'none',
//   initialRouteName: 'LaunchScreen',
//   navigationOptions: {
//     headerStyle: styles.header
//   }
// })

const MainScreenNavigator = TabNavigator({
  LaunchScreen: { screen: LaunchScreen },
  Collections: { screen: FeedScreen },
  Feed : { screen: FeedScreen },
  Account : { screen: FeedScreen },
}, {
    initialRouteName: 'LaunchScreen',
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#fff',
      labelStyle: {
        fontSize: 7,
      },
      showIcon: true,
      style: {
        backgroundColor: '#24a8e8',
      },
    }
});

export default MainScreenNavigator
