import React, { Component } from 'react'
import { Text, View, StatusBar, Image, Dimensions, TouchableNativeFeedback} from 'react-native'
import ViewPager from "@react-native-community/viewpager";

class ShouPing extends Component {

  constructor(props) {
      super(props)
      this.state = {
          leavetim:3,
          sp:[
              {uri: require('../images/sp1.jpeg')},
              {uri: require('../images/sp2.jpeg')}, 
              {uri: require('../images/sp3.jpg')}, 
          ]
      }
      this.tiaozhuan = this.tiaozhuan.bind(this)    
  }
  componentDidMount() {
    (function goShouye(){
        // console.log(this)
        if(this.state.leavetim<=0) return;
        setTimeout(() => {
            
            this.setState({
                leavetim: this.state.leavetim - 1
            })
            goShouye.call(this)
  
        }, 1000);
    }).call(this)
  }
  tiaozhuan(){
      console.log('sss')
      if(this.state.leavetim>0) return;

      const {navigation} = this.props
      navigation.replace("entry") 


  }
  render() {
    return (
        <View style={styles.viewPager}>
            <StatusBar hidden={true}></StatusBar>

            <ViewPager
            style={styles.viewPager}
            initialPage={0}>
                {/* <View style={styles.pageStyle} key="1">
                    <Text>First page</Text>
                </View>
                <View style={styles.pageStyle} key="2">
                    <Text>Second page</Text>
                </View> */}
                {
                    this.state.sp.map((v,i)=>{
                        return (
                             <View style={styles.pageStyle} key={i}>
                                 <Image resizeMode="stretch"  style={styles.imageStyle} source={v.uri}></Image>
                             </View>
                            
                        )
                   })
                }
            </ViewPager>
            {/* 跳转按钮 */}
            <TouchableNativeFeedback onPress={this.tiaozhuan}>
                <View style={[styles.btn, this.state.leavetim==0?styles.btnActive:''] }>
                    <Text style={styles.textStyle}>{"跳过" + "(" + this.state.leavetim +  'S)'}</Text>
                </View>
            </TouchableNativeFeedback>   
        </View>
    )
  }
}

export default ShouPing

const styles = {
    imageStyle:{
        width:Dimensions.get("window").width,
        // height:Dimensions.get("window").height 
        height:"100%"
    },
    btn:{
    //    flex:1,
       width:40,
       height:30,
       borderWidth:0,
       position:"absolute",
       bottom:60,
       alignItems:"center",
       alignContent:"center",
       marginLeft:"50%",
       transform: [{translateX:-50}],
       lineHeight:30,
       backgroundColor:'rgba(200,220,220,.5)',
       backgroundColor:'rgba(240,240,240,.8)'

       
    },
    btnActive:{
        borderWidth:1,
        backgroundColor:'rgba(200,220,220,.5)',


    },
    textStyle:{
    },
    viewPager: {
      flex: 1,
      width:Dimensions.get("window").width,
      height:"100%"
    },
    pageStyle: {
      alignItems: 'center',

    }
  }