import { StackNavigator, TabNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import FeedScreen from '../Containers/FeedScreen'
import PlaceDetailsScreen from '../Containers/PlaceDetailsScreen'

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

const FeedTab = StackNavigator({
  FeedHome: {
    screen: FeedScreen,
    path: '/',
    navigationOptions: {
      title: 'Feed',
    },
  },
  PlaceDetailsScreen: {
    screen: PlaceDetailsScreen,
    path: '/feed/:name',
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name}`,
    }),
  },
});

const MainScreenNavigator = TabNavigator(
  {
    LaunchScreen:{ 
      screen: LaunchScreen, 
      path: '/' ,
    },
    FeedTab: { 
      screen: FeedTab, 
      path: 'feed' ,
      navigationOptions: {
        tabBarLabel: 'Feed',
      },
    },
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
