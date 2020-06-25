import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { TextInput } from 'react-native'
import styles from './Styles/CustomInputComponenetStyle'
import PropTypes from 'prop-types'

export default class CustomInputComponenet extends Component {
  // // Prop type warnings
  static propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onPress: PropTypes.func,
    styles: PropTypes.object
  }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    return (
      <TextInput
        style={styles.input}
        underlineColorAndroid='transparent'
        placeholder={this.props.placeholder}
        placeholderTextColor='#696969'
        autoCapitalize='none'
        onChangeText={this.props.onChangeText} />
    )
  }
}
