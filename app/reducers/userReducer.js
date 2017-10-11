/**
 * Created by osx on 2017/10/11.
 */
import * as types from '../actions/actionTypes';
const initialState={
    username:'&_&',
    password:'123456'
};

let userReducer=(state=initialState,action)=>{
    switch (action.type){
        case types.LOGIN:
            console.log(action.username);
            return Object.assign({},state,{
                username:action.username
            });
        default:
            return state;
    }
};

export default userReducer;