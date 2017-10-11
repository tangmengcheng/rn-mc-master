/**
 * Created by osx on 2017/10/11.
 */
import * as types from './actionTypes';

export let modifyUserName=(username)=>{
    console.log(username);
    return Object.assign({
        type:types.LOGIN
    },username)
};
