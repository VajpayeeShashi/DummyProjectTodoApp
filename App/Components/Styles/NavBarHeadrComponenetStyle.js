import { StyleSheet } from 'react-native'
import Colors from '../../Themes/Colors'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  bground: {
    textAlign: 'center',
    fontSize: 10,
    color: Colors.fire,
    backgroundColor: Colors.transparent,
    borderColor: '#696969',
    borderWidth: 1
  },
  headerTxt: {
    color: '#696969'
  },
  navBtnImg: {
    alignItems: 'center',
    marginStart: 10,
    height: 40,
    width: 35
  },
  navLeftBtn: {
    margin: 2
  }
})
