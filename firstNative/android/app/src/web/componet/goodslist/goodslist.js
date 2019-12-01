import React, { Component } from 'react'
import { Text, View, StyleSheet,  FlatList, RefreshControl, TouchableNativeFeedback} from 'react-native'

export default class Goodslist extends Component {

  constructor(props) {
      super(props)
      this.state = {
        goodslist:[
            {name:'小米', desc:'dflkdlsdl'},
            {name:'华为', desc:'dflkdlsdl'},
            {name:'哦跑', desc:'dflkdlsdl'},
            {name:'魅族', desc:'dflkdlsdl'},
            {name:'诺基亚', desc:'dflkdlsdl'},
        ],
        refreshing:false
      }
      this._onRefresh = this._onRefresh.bind(this)
      this._goDetail = this._goDetail.bind(this) 
      this.renderMovie =  this.renderMovie.bind(this)
  }
  _goDetail(item){ 
    console.log("item") 
    const  { navigation } = this.props
    console.log(navigation)
    navigation.push('goodsdetail', item.name) 

  }
  renderMovie({item}){

    return (
          
            <TouchableNativeFeedback onPress={this._goDetail}> 
                <View style={styles.box} >
                    <View style={styles.left}></View>
                    <View style={styles.zibox}>
                        <Text style={styles.zitop}>{item.name}</Text>
                    
                        <Text style={styles.zitop}>{item.desc}</Text>
                    </View>
                </View>
            </TouchableNativeFeedback>
              )
    
  }
  _onRefresh(){
      this.setState({refreshing:true})
      console.log(666)
     setTimeout(() => {
         let goodslist = Array.from(Array(10)).map((v, i)=>{
             console.log(i)
            return {name:'小米' + i, desc:'说' + i}
            
         })
         goodslist =  this.state.goodslist.concat(goodslist)
        //  list = list.concat(goodslist)
          this.setState({goodslist}, ()=>{ this.setState({refreshing:false}) })  
          console.log(88)

        // let goodslist = Array.from(new Array(10)).map((val, i)=>(
        //     {
        //         name: 'Loaded row' + i,
        //         desc: i
        //     }
        // )).concat(this.state.goodslist);
        // this.setState({goodslist})
        // this.setState({refreshing:false})


     }, 2000);
     
  }
  _getItemStyle= ()=>{
      return <View style={styles.getitemstyle}></View>
  }
  render() {
    return (
        // <View style={styles.goodslist}>

            <FlatList
                data={this.state.goodslist}
                renderItem={this.renderMovie}
                style={styles.list}
                keyExtractor={item => item.name}
                ItemSeparatorComponent={this._getItemStyle}
                refreshControl={
                    <RefreshControl
                      refreshing={this.state.refreshing}
                      onRefresh={this._onRefresh.bind(this)}
                      title="正在刷新"
                      colors={['red', 'yellow']}
                      progressBackgroundColor="skyblue"
                      progressViewOffset={20}
                    />
                  }
            />
        // </View> 
  
    )
  }
}
// export default class Goodslist extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             isRefreshing: false,
//             loaded: 0,
//             //使用map创建对象数组
//             rowData: Array.from(new Array(5)).map((val, i)=>({
//                 text: 'Inital row' + i,
//                 clicks: 0
//                 })
//             )
//         }
//     }
//     //传递当前的对象，将clicks+1，刷新界面
//     _onClick22(row) {
//         console.log('1111' + row.text);
//         row.clicks++;
//         this.setState({
//             rowData: this.state.rowData,
//         })
//     }
//     render(){
//         //map遍历并创建Row类,row是数组的对象，i是索引位置
//         const rows = this.state.rowData.map((row, i)=>{
//             // <Row key={i} data={row} onClick={this._onClick22}/>

//             console.log('4444' + i);
//             return (
//                  <View key={row.text} style={{height:30,borderBottomColor:"red",borderStyle:"solid", borderBottomWidth:1}}>
//                      <Text>{row.text}</Text>
//                  </View>
//                 )
//         });
//         return(
//             <ScrollView style={{flex: 1, backgroundColor: '#ffaaff'}}
//                         refreshControl={
//                             <RefreshControl refreshing={this.state.isRefreshing}
//                                             onRefresh={this._onRefresh.bind(this)}
//                                             tintColor="#ff0000"
//                                             title="Loading..."
//                                             titleColor="#00ff00"
//                                             />
//                         }>
//                 {rows}
//             </ScrollView>
//         )
//     }
//     _onRefresh(){
//         console.log('dd')
//         this.setState({
//             isRefreshing: true
//         });
//         console.log('ee')

//         let that = this
//         console.log('aa')
//         //间隔5秒结束下拉刷新
//         setTimeout(()=>{
//             //.concat拼接字符串，数组
//             let rowData = Array.from(new Array(10)).map((val, i)=>({
//                 text: 'Loaded row' + (+that.state.loaded + i),
//                 clicks: 0
//             }))
//                 .concat(that.state.rowData);
//                 console.log('bb')

//                 that.setState({
//                     loaded: that.state.loaded + 10,
//                     isRefreshing: false,
//                     rowData: rowData
//                 })
//                 console.log('cc')

//         }, 2000);
//     }
// }

const styles = StyleSheet.create({
    goodslist:{
      flex:1,
      backgroundColor:'red',
    //   flexDirection:'row',
    },
    box:{
      flexDirection:"row",
    //   marginBottom:20,
    // marginHorizontal:10
    marginVertical:10
    
      
    

    },
    getitemstyle:{
          borderWidth:1,
      borderBottomColor:"#eee",
      borderStyle:"solid",
    },
    left:{
        marginRight:20,

        width:50,
        height:50,
        backgroundColor:"blue",
    },
    zibox:{
       display:"flex",
       flexDirection:"column",
       borderWidth:1,
       borderStyle:"solid",
       borderColor:"#fff",
       justifyContent:"space-between",
       height:50

    },
    zitop:{
        // flex:1
    }
    
  });