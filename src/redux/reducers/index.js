import {persistCombineReducers} from 'redux-persist';
import Constants from '@Constants';
import AsyncStorage from '@react-native-community/async-storage';

const config = {
    key: Constants.asyncStorageKey,
    storage: AsyncStorage,
    blacklist: []
}



const appReducer = persistCombineReducers(config, {
    
});


const rootReducer = (state, action) => {
    return appReducer(state, action);
}



export default rootReducer;