import { Platform, StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container:
  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: (Platform.OS === 'ios') ? 20 : 0
  },

  item:
  {
    padding: 10
  },

  separator:
  {
    height: 1,
    backgroundColor: 'rgba(0,0,0,0.4)'
  },

  text:
  {
    fontSize: 20,
    color: 'black'
  },

  footer:
  {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderTopWidth: 1.5,
    borderTopColor: 'black'
  },

  loadMoreBtn:
  {
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  btnText:
  {
    color: 'white',
    fontSize: 15,
    textAlign: 'center'
  }
})
