import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  mainCont: {
    flex: 1
  },
  descriptionBg: {
    //  width: '100%',
    height: '45%',
    marginStart: 30,
    marginEnd: 30,
    marginTop: 25,
    backgroundColor: Colors.transparent,
    borderColor: '#696969',
    borderWidth: 1,
    textAlign: 'left'
  },
  txtBg: {
    // width: '100%',
    // height: '100%',
    textAlignVertical: 'top',
    marginStart: 30,
    marginEnd: 30,
    marginTop: 25,
    backgroundColor: Colors.transparent,
    borderColor: '#696969',
    borderWidth: 1
  },
  btnBg: {
    marginStart: 30,
    marginEnd: 30,
    marginTop: 30,
    height: 45,
    backgroundColor: Colors.transparent,
    borderColor: '#696969',
    borderWidth: 1
  },
  buttonText: {
    marginTop: 5,
    width: '100%',
    textAlign: 'center',
    color: '#696969',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: Fonts.size.h6,
    fontFamily: Fonts.type.bold,
    height: '100%'
  },

  placeholder: {
    marginStart: 30,
    marginEnd: 30,
    marginTop: 20,
    height: '30%',
    backgroundColor: Colors.transparent,
    borderColor: '#696969',
    borderWidth: 1
  },
  previewImage: {
    width: '100%',
    height: '100%'
  }
})
