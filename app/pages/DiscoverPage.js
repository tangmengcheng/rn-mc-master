
import React,{Component} from 'react';
import {
    StyleSheet,
    SrollView,
    Text,
    View,
    Image,
} from 'react-native';

class Discover extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <View style={styles.container}>
                <Text>
                    这是发现的页面
                </Text>
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

export const LayoutComponent=Discover;
export function mapStateToProps(state) {
    return{
    }
}
