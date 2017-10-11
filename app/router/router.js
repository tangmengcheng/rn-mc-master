/**
 * Created by osx on 2017/10/11.
 */
import React,{Component} from 'react';
import {
    Navigator,
} from 'react-native';
import * as FootPage from '../pages/FootPage';
import connectComponent from '../reduxConnect/connectComponent';
const Foot=connectComponent(FootPage);
import {setNavigator,getNavigator} from './navigatorComponent';


class App extends Component{
    constructor(props){
        super(props);
    }
    renderScene(route,navigator){
        setNavigator(navigator);
        return<route.component navigator={navigator} {...route.params}/>;
    }
    configureScene(route,routeStack){
        return Navigator.SceneConfigs.PushFromRight;
    }
    render() {
        return (
            <Navigator
                initialRoute={{component: Foot}}
                navBarStyle={{backgroundColor: '#FFF'}}
                renderScene={this.renderScene}
                configureScene={this.configureScene}
            >
            </Navigator>
        )
    }
}
export const LayoutComponent=App;