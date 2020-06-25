import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native'
import styles from './Styles/NavBarHeadrComponenetStyle'
import NavigationBar from 'react-native-navbar'
import PropTypes from 'prop-types'
import Images from '../Themes/Images'
import { Image } from 'react-native-animatable'

export default class NavBarHeadrComponenet extends Component {
  // // Prop type warnings
  static propTypes = {
    title: PropTypes.string,
    onPress: PropTypes.func,
    styles: PropTypes.object,

    // navigator: PropTypes.object,
    barColor: PropTypes.string,
    imgUrl: PropTypes.number,
    rightImgUrl: PropTypes.number,
    tapRight: PropTypes.func,
    tapLeft: PropTypes.func

  }

  render () {
    return (
      <NavigationBar style={styles.bground}
        title={{ title: this.props.title || '', style: styles.headerTxt }}
        leftButton={this.props.tapLeft && <TouchableOpacity
          style={styles.navLeftBtn}
          onPress={() => this.props.tapLeft ? this.props.tapLeft() : null}>
          <Image source={Images.backArrow} style={styles.navBtnImg} />
        </TouchableOpacity>}
      />
    )
  }
}
