import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, Button } from 'react-native'

class Serachbar extends Component {
  render() {
    return (
      <View style={styles.searchbar}>
        <TextInput style={styles.textStyle}></TextInput>
        <Button style={styles.btnStyle} title="搜索"></Button>
      </View>
    )
  }
}

export default Serachbar


const styles = StyleSheet.create({
    
    searchbar:{
      height:40,
    //   backgroundColor:"green",
      flexDirection:'row',
      paddingHorizontal:10,
      marginTop:10,
      marginBottom:10

    },
    textStyle:{
        flex:1,
        height:40,
        borderWidth:2,
        borderColor:'#ccc',
        lineHeight:40,
        marginRight:10


        
    },
    btnStyle:{
        // width:36,
        // height:36,
        color:'#fff',
        // lineHeight:36,
        fontSize:14,
        // paddingHorizontal:5,
    }
  });