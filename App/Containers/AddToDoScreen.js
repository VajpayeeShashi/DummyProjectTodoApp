import React, { Component } from 'react'
import { Text, TextInput, TouchableOpacity, AsyncStorage, Button } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
// Styles
import EventBus from 'react-native-event-bus'
import styles from './Styles/AddToDoScreenStyle'
import NavBarHeadrComponenet from '../Components/NavBarHeadrComponenet'
import { Image, View } from 'react-native-animatable'
import ImagePicker from 'react-native-image-picker'
import Store from 'react-native-fs-store'

class AddToDoScreen extends Component {
  state = {
    description: '',
    pickedImage: ''
  }
  componentDidMount (): void {
    const AsyncStorage = new Store('store1')
    console.log('hi in asyncstorage....')
    AsyncStorage.getItem('aray').then((value) => {
      if (value) {
        console.log('TRY length in asyncstorage....', JSON.parse(value).length)
        console.log('all value asyncstorage....', JSON.parse(value))
      }
      console.log('no value in AddToDoScreen screen')
    }).done()
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
          title={'ADD TO DO'}
          tapLeft={() => { this.provps.navigation.pop() }} />
        <TextInput style={styles.txtBg}
          multiline
          numberOfLines={2}
          placeholder={'Description'}
          onChangeText={(text) => this.setState({description: text})} />
        <View style={styles.placeholder}>
          <Image source={this.state.pickedImage} style={styles.previewImage} />
        </View>
        <TouchableOpacity style={styles.btnBg} >
          <Text style={styles.buttonText} onPress={() => this.pickImageHandler()}>Pic Image</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnBg} >
          <Text style={styles.buttonText} onPress={() => this.addIteminTodo()} >DONE</Text>
        </TouchableOpacity>
      </View>
    )
  }
  async addIteminTodo () {
    console.log('hi in addIteminTodo....', this.state.description)
 //   let imageUrl = this.state.pickedImage
    let descriptionObj = {
      title: this.state.description
     // imageTakenPerson: imageUrl
    }
    try {
      const AsyncStorage = new Store('store1')
      AsyncStorage.getItem('aray').then(async (value) => {
        if (value != null) {
          let currentListOfItems = []
          currentListOfItems = JSON.parse(value)
       //   console.log('The current list of items is', currentListOfItems)
          currentListOfItems.push(descriptionObj)
          await AsyncStorage.setItem('aray', JSON.stringify(currentListOfItems))
          console.log('TRY length in asyncstorage....', JSON.parse(value).length)
          console.log('all value asyncstorage....', JSON.parse(value))
          EventBus.getInstance().fireEvent('arayListUpdate', {params: await AsyncStorage.setItem('aray', JSON.stringify(currentListOfItems))
          })
        } else {
          const AsyncStorage = new Store('store1')
          console.log('nulllllllllllll')
          let currentListOfItems = []
          currentListOfItems.push(descriptionObj)
          await AsyncStorage.setItem('aray', JSON.stringify(currentListOfItems))
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

export default connect(mapStateToProps, mapDispatchToProps)(AddToDoScreen)
