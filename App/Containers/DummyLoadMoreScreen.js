import React, { Component } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/DummyLoadMoreScreenStyle'

class DummyLoadMoreScreen extends Component<{}> {
  constructor () {
    super()

    this.state =
    {
      loading: true,
      serverData: [],
      fetching_from_server: false
    }

    this.timer = -1

    this.page = 0
  }

  componentDidMount () {
    this.page = this.page + 1

    fetch('https://randomuser.me/api/?results=20&gender=female&inc=name&page=' + this.page)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ serverData: [ ...this.state.serverData, ...responseJson.results ], loading: false })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  loadMoreData = () => {
    this.page = this.page + 1

    this.setState({ fetching_from_server: true }, () => {
      clearTimeout(this.timer)

      this.timer = -1
      this.timer = setTimeout(() => {
        fetch('https://randomuser.me/api/?results=20&gender=female&inc=name&?nat=in&page=' + this.page)
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({ serverData: [ ...this.state.serverData, ...responseJson.results ], fetching_from_server: false })
          })
          .catch((error) => {
            console.error(error)
          })
      }, 1500)
    })
  }

  renderFooter () {
    return (
      <View style={styles.footer}>
        <TouchableOpacity activeOpacity={0.9} onPress={this.loadMoreData} style={styles.loadMoreBtn}>
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
      <View style={styles.container}>
        {
          (this.state.loading)
            ? (<ActivityIndicator size='large' />)
            : (
              <FlatList
                style={{ width: '100%' }}
                keyExtractor={(item, index) => index}
                data={this.state.serverData}
                renderItem={({ item, index }) =>
                  <View style={styles.item}>
                    <Text style={styles.text}>{ item.name.first.toUpperCase() } { item.name.last.toUpperCase() }</Text>
                  </View>
                }
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                ListFooterComponent={this.renderFooter.bind(this)}
              />
            )
        }
      </View>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(DummyLoadMoreScreen)
