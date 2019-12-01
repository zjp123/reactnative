import { createBottomTabNavigator } from 'react-navigation-tabs';
import App  from '../page/main/main'
import Person  from '../page/person/person'
import WebSearch from '../page/webserach'
// import ShouPing  from '../page/shoupinghaibao'  



export default createBottomTabNavigator(
    {
        
        main:{
            screen:App,
            navigationOptions:()=>({
                tabBarLabel:"首页"
            })
        },
        webserach:{
            screen:WebSearch,
            navigationOptions:()=>({
                tabBarLabel:"搜索"
            })

        },
        person:{
            screen:Person,
            navigationOptions:()=>({
                tabBarLabel:"个人"
            })

        },
        
    }
    
)