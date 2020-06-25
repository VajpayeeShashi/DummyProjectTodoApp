import React, { Component } from 'react'
import { Text, View } from 'react-native'

// Styles
import styles from './Styles/LaunchScreenStyles'
import FullButton from '../Components/FullButton'

export default class LaunchScreen extends Component {
  render () {
    return (
      <View style={styles.mainVie}>
        <Text style={styles.centered}> Welcome in React Native!! </Text>
        <FullButton text={'Go To Demo App.'}
          onPress={() => this.nextScreen()} />
      </View>
    )
  }
  nextScreen () {
    const { navigate } = this.props.navigation
    navigate('FirstScreen')
  }
}
