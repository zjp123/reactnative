import React from 'react'
import {StyleSheet, View, Text} from 'react-native'


export default class ViewStudy extends React.Component{



    render(){

        return (
           <View style={stylestudy.container}>
               <Text>hellow  word</Text> 
           </View>
        )
    }
}


const stylestudy = StyleSheet.create({
    container:{
        margin:5,
        width:100,
        height:100,
        backgroundColor:'red'
    }
})