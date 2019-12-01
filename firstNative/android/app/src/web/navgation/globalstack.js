//把需要路由控制的页面导进来

//再倒入路由插件

import { createAppContainer } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';
// import App  from '../page/main/main'
import GoodsDetail  from '../page/product/detail'  
import BottomNavBar  from '../navgation/entry'  
import ShouPing  from '../page/shoupinghaibao'  


const AppNavigator = createStackNavigator(
    {
        shouping:{ 
            screen:ShouPing,
            navigationOptions:()=>({
                header:null
            })
        },
        entry:{
            screen:BottomNavBar,
            navigationOptions:()=>({
                header:null
            })
        },
        // main:{
        //     screen:App,
        //     navigationOptions:()=>({
        //         header:null
        //     })
        // },
        goodsdetail:{   
            screen:GoodsDetail,
            navigationOptions:()=>({
                title:"商品详情"
            })

        }
    },
    {
        initialRouteName:"shouping" 
    }
)

export default createAppContainer(AppNavigator);
   
// export default createStackNavigator( 
//     {
//         main:{
//             screen:App,
//             navigationOptions:()=>({
//                 hearder:null
//             })
//         },
//         goodsdetail:{
//             screen:GoodsDetail,
//             navigationOptions:()=>({
//                 title:"商品详情"
//             })

//         }
//     },
//     {
//         initialRouterName:"main"
//     }
// )

// export default createAppContainer(AppNavigator);