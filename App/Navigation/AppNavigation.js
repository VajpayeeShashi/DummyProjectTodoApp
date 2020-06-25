import { createAppContainer } from 'react-navigation'
import DummyLoadMoreScreen from '../Containers/DummyLoadMoreScreen'
import EditToDoScreen from '../Containers/EditToDoScreen'
import AddToDoScreen from '../Containers/AddToDoScreen'
import FirstScreen from '../Containers/FirstScreen'
import { createStackNavigator } from 'react-navigation-stack'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  DummyLoadMoreScreen: { screen: DummyLoadMoreScreen },
  EditToDoScreen: { screen: EditToDoScreen },
  AddToDoScreen: { screen: AddToDoScreen },
  FirstScreen: { screen: FirstScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
