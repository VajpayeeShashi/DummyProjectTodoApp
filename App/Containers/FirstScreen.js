import React, { Component } from 'react'
import { ScrollView, TextInput, TouchableOpacity, FlatList, AsyncStorage, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import EventBus from 'react-native-event-bus'
import styles from './Styles/FirstScreenStyle'
import { Image, Text, View } from 'react-native-animatable'
import Images from '../Themes/Images'
import Store from 'react-native-fs-store'

class FirstScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true,
      page: 0,
      posts: []
    }
  }
  state = {
    arrayList: []
  }
  onScroll = () => {
    this.setState({hasScrolled: true})
  }
  componentDidMount (): void {
    const AsyncStorage = new Store('store1')
    console.log('hi in asyncstorage....')
    // AsyncStorage.getItem('aray').then((value) => {
    //   if (value) {
    //     console.log('value in first screen', JSON.parse(value))
    //     this.setState({arrayList: JSON.parse(value)})
    //     console.log('TRY length in asyncstorage....', JSON.parse(value).length)
    //     console.log('all value asyncstorage....', JSON.parse(value))
    //   }
    //   console.log('no value in first screen')
    // }).done()

    EventBus.getInstance().addListener('arayListUpdate', this.listener = data => {
      console.log('no value in EventBus.getInstance')
      AsyncStorage.getItem('aray').then((value) => {
        if (value) {
          console.log('value in first screen', JSON.parse(value))
          // this.setState({arrayList: JSON.parse(value)})
          this.setState({
            isLoading: false,
            page: 0,
            arrayList: JSON.parse(value)
          }, function () {
            // call the function to pull initial 12 records
            this.addRecords(0)
          })
          console.log('TRY length in asyncstorage....', JSON.parse(value).length)
          console.log('all value asyncstorage....', JSON.parse(value))
        }
        console.log('no value in first screen')
      }).done()
    })
  }
  addRecords = (page) => {
    console.log('addRecords methods...')
    const newRecords = []
    for (var i = page * 12, il = i + 12; i < il && i <
    this.state.arrayList.length; i++) {
      newRecords.push(this.state.arrayList[i])
    }
    // this.setState({
    //   posts: [...this.state.posts, ...newRecords]
    // })
    this.setState({
      arrayList: newRecords
    })
   // console.log('LengthaddRecords methods...', this.statearrayList.length)
  }

  onScrollHandler = () => {
    console.log('onScrollHandler')
    this.setState({
      page: this.state.page + 1
    }, () => {
      this.addRecords(this.state.page)
    })
  }
  SearchFilterFunction (text) {
    console.log('hi keyboard SearchFilterFunction...')
    // passing the inserted text in textinput
    const newData = this.state.arrayList.filter(function (item) {
      // applying filter for the inserted text in search bar
      const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase()
      const textData = text.toUpperCase()
      return itemData.indexOf(textData) > -1
    })
    this.setState({
      // setting the filtered newData on datasource
      // After setting the data it will automatically re-render the view
      arrayList: newData,
      text: text
    })
  }
  renderFooter () {
    return (
      <View style={styles.footer}>
        <TouchableOpacity activeOpacity={0.4} onPress={this.addRecords(1)} style={styles.loadMoreBtn}>
          <Text style={styles.btnText}>Load More</Text>
          {
            (this.state.fetching_from_server)
              ? <ActivityIndicator color='white' style={{ marginLeft: 8 }} />
              : null
          }
        </TouchableOpacity>
      </View>
    )
  }
  render () {
    return (
      <ScrollView style={styles.container}>
        <View>
          <View style={styles.roundedBack}>
            <TextInput style={styles.textInputStyleSecond}
              placeholder={'Search'}
              onChangeText={text => this.SearchFilterFunction(text)}
            />
            <TouchableOpacity onPress={() => this.addScreen()} style={styles.clickBg}>
              <Image source={Images.serchBtn} style={styles.imgStyle} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.addScreen()} style={styles.clickBg}>
              <Image source={Images.plusBtn} style={styles.imgStyle} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={this.state.arrayList}
            ItemSeparatorComponent={this.ListViewItemSeparator}
            keyExtractor={(item, index) => index.toString()}
            ListFooterComponent={this.renderFooter.bind(this)}
            renderItem={({item, index}) => (
              <View style={styles.roundedBackDynamic}>
                <Text style={styles.textInputStyle}
                  onPress={this.getListViewItem.bind(this, item)}>{item.title}</Text>
                <View style={styles.viewBg} />
                {/* <View style={styles.clickBg}> */}
                {/*  <Image source={item.imageTakenPerson} style={styles.imgStyle} /> */}
                {/* </View> */}
                <View style={styles.viewBg} />
                <TouchableOpacity onPress={() => this.nextScreen(index)} style={styles.clickBg}>
                  <Image source={Images.editbtn} style={styles.imgStyle} />
                </TouchableOpacity>
                <View style={styles.viewBg} />
                <TouchableOpacity onPress={this.deleteItem.bind(this, index)} style={styles.clickBg}>
                  <Image source={Images.deletebtn} style={styles.imgStyle} />
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </ScrollView>
    )
  }
  nextScreen (index) {
   // console.log('the index of the item to edit is', index)
    const { navigate } = this.props.navigation
    navigate('EditToDoScreen', {'userKey': index})
  }
  addScreen () {
    const { navigate } = this.props.navigation
    navigate('AddToDoScreen')
  }
  deleteItem = async (index) => {
    let cList = this.state.arrayList
    cList.splice(index, 1)
    this.setState({arrayList: cList})
   // currentListOfItems.push(descriptionObj)
    await AsyncStorage.setItem('aray', JSON.stringify(cList))
   // alert(item.title)
  }
  getListViewItem = (item) => {
    alert(item.title)
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

export default connect(mapStateToProps, mapDispatchToProps)(FirstScreen)
