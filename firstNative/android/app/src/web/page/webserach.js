import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { WebView } from 'react-native-webview';

class WebSearch extends Component {

  render() {
    return (
      //外面加view要设置宽高或者加上flex:1
      <View style={{flex:1}}>
         <WebView source={{ uri: 'https://www.baidu.com/' }} />
      </View>
    )
  }
}

export default WebSearch