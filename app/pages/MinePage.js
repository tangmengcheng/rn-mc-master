
import React,{Component} from 'react';
import {
    StyleSheet,
    SrollView,
    Text,
    View,
    Image,
    TouchableHighlight
} from 'react-native';

class Mine extends Component{
    constructor(props){
        super(props);

    }
    login(){
        const {actions} = this.props;
        /*修改为当前的用户*/
        let temp={
            username:'智能ABC'
        };
        actions.modifyUserName(temp);
    }
    render(){
        const {userReducer}=this.props;
        return(
           <View style={styles.container}>
               <Text>
                   这是{userReducer.username}的页面
               </Text>
               <Text>
                   这是用户密码：{userReducer.password}
               </Text>
               <View>
                   <TouchableHighlight onPress={this.login.bind(this)} underlayColor={'#DDDDDD'}>
                       <View>
                           <Text>
                           登录
                           </Text>
                       </View>
                   </TouchableHighlight>
               </View>
           </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
});

export const LayoutComponent=Mine;
export function mapStateToProps(state) {
    return{
        userReducer:state.userReducer,
    }
}

