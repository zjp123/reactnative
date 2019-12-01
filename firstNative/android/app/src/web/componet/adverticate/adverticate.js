import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, Dimensions, Image } from 'react-native'

class Asverticate extends Component {

  constructor(props) {
      super(props)
      this.state ={
        advList:[
            {name:'广告1', uri:require('../../images/hh.png'), color:'pink'},
            {name:'广告2', uri:require('../../images/bb.png'), color:'orange'},
            {name:'广告3', uri:require('../../images/cc.png'), color:'green'},
          ],
          count:0,
          

      } 
      this.move = this.move.bind(this)


  }
  move(){
      const len = this.state.advList.length
      
      this.timer = setInterval(() => {
        let nextpage = this.state.count ++
         if(nextpage>=len-1){
            nextpage = 0
            this.setState({count:nextpage})
         }
        //  console.log(this.state.count)
        let offsetx = Dimensions.get('window').width * this.state.count
        this.refs.zjpScrollview.scrollTo({x:offsetx, y: 0, animated: true})
      }, 1500)

   
      
  }
  componentDidMount() {
      this.move()
  }
  
  componentWillUnmount() {
      clearInterval(this.timer)
  }
  
  render() {
    return (
    <View style={styles.container}>
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          ref="zjpScrollview"
        >
            {
                this.state.advList.map((v,i)=>{
                return (
                    <View key={v.color} style={[styles.adverticate, {backgroundColor:(v.color)}]}>
                        <Image style={styles.image} source={v.uri}></Image>
                    </View>
                 ) 
                })
            }
            
            {/* <View style={[styles.adverticate, {backgroundColor:'orange'}]}>
                <Text>广告     vv2</Text>
            </View>
            <View style={[styles.adverticate, {backgroundColor:'black'}]}>
                <Text>广告 3</Text>
            </View> */}
        </ScrollView>
    </View>
    )
  }
}

export default Asverticate

const styles = StyleSheet.create({
    container:{
      height:200
    },
    adverticate:{
      height:200,
      width:Dimensions.get('window').width,
      backgroundColor:"yellow"
    },
    image:{
        width:'100%',
        height:'100%'
    }
  });