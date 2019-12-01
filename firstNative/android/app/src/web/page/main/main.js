

import React, {Component} from 'react';
// import ViewStudy from './android/viewStudy/viewcommon'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

import Asverticate from '../../componet/adverticate/adverticate'
import Goodslist from '../../componet/goodslist/goodslist'
import Searchbar from '../../componet/serach/searcbar'
 


class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
      return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" hidden={false}/>
            <Searchbar></Searchbar>
            <Asverticate></Asverticate>
            <Goodslist {...this.props}></Goodslist>
        </View>
      )
    }
  } 
  


// const App = () => {
//   return(

//      <View style={styles.container}>
//        <StatusBar barStyle="dark-content" hidden={false}/>
//        <Searchbar></Searchbar>
//        <Asverticate></Asverticate>
//        <Goodslist {...this.props}></Goodslist>
//      </View>

//   )
  // return (
  //   <Fragment>
  //     <StatusBar barStyle="dark-content" hidden={true}/>
  //     <SafeAreaView>
  //       <ScrollView
  //         contentInsetAdjustmentBehavior="automatic"
  //         style={styles.scrollView}>
  //         <Header />
  //         {global.HermesInternal == null ? null : (
  //           <View style={styles.engine}>
  //             <Text style={styles.footer}>Engine: Hermes</Text>
  //           </View>
  //         )}
          
  //       </ScrollView>
  //     </SafeAreaView>
  //   </Fragment>
  // );
// };

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#f5fcff'
  }
});

export default App;
