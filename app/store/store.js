import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import config from '../common/configuration'

/**
 *  dispatch 日志
 *  @param store
 */
const logger = store => next => action => {
    if(config.debug){
        console.log('before state', store.getState())
        console.info('dispatching', action)
        let result = next(action)
        console.log('next state', store.getState())
        return result
    }
    else{
        let result = next(action)
        return result
    }


}
let createStoreWithMiddleware = applyMiddleware(thunk,logger)(createStore);
let store = createStoreWithMiddleware(rootReducer);

export default store;
