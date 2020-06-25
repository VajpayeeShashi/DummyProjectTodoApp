import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors } from '../../Themes/'
import Fonts from '../../Themes/Fonts'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  loadText: {
    textAlign: 'center',
    color: '#696969',
    fontSize: Fonts.size.h6,
    fontFamily: Fonts.type.bold,
    marginTop: 25,
    marginBottom: 25,
    textDecorationLine: 'underline'
  },
  roundedBack: {
    marginTop: 40,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.transparent,
    borderColor: '#696969',
    borderWidth: 1,
    marginStart: 20,
    marginEnd: 20
  },
  roundedBackDynamic: {
    height: 40,
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.transparent,
    borderColor: '#696969',
    borderWidth: 1,
    marginStart: 20,
    marginEnd: 20
  },
  roundedBackSec: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.transparent,
    borderColor: '#696969',
    borderWidth: 1,
    marginStart: 20,
    marginEnd: 20
  },
  textInputStyle: {
    width: '55%',
    paddingStart: 7,
    marginTop: 4,
   // flex: 2,
    backgroundColor: Colors.transparent
  },
  textInputStyleSecond: {
    width: '70%',
    paddingStart: 7,
    marginTop: 4,
    // flex: 2,
    backgroundColor: Colors.transparent
  },
  imgStyle: {
   // marginStart: 3,
    width: '55%',
    height: '55%',
    padding: 3
    // justifyContent: 'center',
    // alignContent: 'center',
    // alignItems: 'center'
  },
  viewImg: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  viewBg: {
    width: '.2%',
    // marginStart: 5,
    backgroundColor: '#696969'
    // height: 25
  },
  clickBg: {
   // padding: 5,
    width: '15%',
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  listText: {
    height: '100%',
    width: '100%',
    marginTop: 5,
    marginStart: 5,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
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
