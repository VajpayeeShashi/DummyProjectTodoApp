import React, { Component } from 'react'
import { AsyncStorage, Text, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/EditToDoScreenStyle'
import { Image, View } from 'react-native-animatable'
import NavBarHeadrComponenet from '../Components/NavBarHeadrComponenet'
import EventBus from 'react-native-event-bus'
import ImagePicker from 'react-native-image-picker'
import Store from 'react-native-fs-store'

class EditToDoScreen extends Component {
  state = {
    description: '',
    pickedImage: ''
  }
  constructor (props) {
    super(props)
    console.log('The props are in ApiDemoScreen', this.props.navigation.state.params.userKey)
  }
  pickImageHandler () {
    var options = {
      title: 'Select Image',
      customButtons: [
        { name: 'customOptionKey', title: 'Choose Photo from Custom Option' }
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    }
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response)
      if (response.didCancel) {
        console.log('User cancelled image picker')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton)
        alert(response.customButton)
      } else {
        let source = response
        this.setState({
          pickedImage: source
        })
      }
    })
  }
  render () {
    return (
      <View style={styles.mainCont}>
        <NavBarHeadrComponenet
          title={'EDIT TO DO'}
          tapLeft={() => { this.props.navigation.pop() }} />
        <TextInput style={styles.txtBg}
          multiline
          numberOfLines={2}
          placeholder={'Description'}
          onChangeText={(text) => this.setState({description: text})} />
        <View style={styles.placeholder}>
          <Image source={this.state.pickedImage} style={styles.previewImage} />
        </View>
        <TouchableOpacity style={styles.btnBg} >
          <Text style={styles.buttonText} onPress={() => this.pickImageHandler()}>Change Image</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnBg} >
          <Text style={styles.buttonText} onPress={() => this.editIteminTodo()}>UPDATE</Text>
        </TouchableOpacity>
      </View>
    )
  }
  async editIteminTodo () {
    let descriptionObj = {
      title: this.state.description,
      imageTakenPerson: this.state.pickedImage
    }
    try {
      const AsyncStorage = new Store('store1')
      AsyncStorage.getItem('aray').then(async (value) => {
        if (value) {
          let currentListOfItems = JSON.parse(value)
          console.log('The edit list of items is', currentListOfItems)
          currentListOfItems[this.props.navigation.state.params.userKey] = descriptionObj
          await AsyncStorage.setItem('aray', JSON.stringify(currentListOfItems))
          console.log('TRY length in asyncstorage....', JSON.parse(value).length)
          console.log('all value asyncstorage....', JSON.parse(value))
          EventBus.getInstance().fireEvent('arayListUpdate', {params: await AsyncStorage.setItem('aray', JSON.stringify(currentListOfItems))
          })
        }
      }).done()
      //  console.log('value of stored item...', JSON.stringify(this.state.todoListArr))
      const { navigate } = this.props.navigation
      navigate('FirstScreen')
    } catch (error) {
      console.log('error in asyncstorage....')
      // Error saving data
    }

    // let cList = this.state.arrayList
    // cList.splice(index, 1)
    // this.setState({arrayList: cList})
    // // currentListOfItems.push(descriptionObj)
    // await AsyncStorage.setItem('aray', JSON.stringify(cList))
    //
    // var fruits = ['Banana', 'Orange', 'Apple', 'Mango']
    // fruits[0] = 'Kiwi'
    //
    // console.log('hi in edit todo....', this.state.description)
    //
    // const varId = this.props.navigation.state.params.userKey
    // AsyncStorage.setItem('aray', JSON.stringify(descriptionObj))
    // AsyncStorage.setItem('aray', JSON.stringify({varId: descriptionObj}))
    // console.log('updated value of', this.props.navigation.state.params.userKey)
    // console.log('updated value JSON.stringify(descriptionObj', JSON.stringify(descriptionObj))
    // const { navigate } = this.props.navigation
    // navigate('FirstScreen')
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditToDoScreen)
