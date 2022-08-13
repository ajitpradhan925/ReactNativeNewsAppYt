import {persistCombineReducers} from 'redux-persist';
import Constants from '@Constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authReducer from './authReducers';

const config = {
    key: Constants.asyncStorageKey,
    storage: AsyncStorage,
    blacklist: []
}



const appReducer = persistCombineReducers(config, {
    auth: authReducer
});


const rootReducer = (state, action) => {
    return appReducer(state, action);
}



export default rootReducer;