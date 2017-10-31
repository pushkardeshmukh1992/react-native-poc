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
  FeedScreen: { screen: FeedScreen },
}, {
    initialRouteName: 'LaunchScreen',
    tabBarPosition: 'bottom',
});

export default MainScreenNavigator
