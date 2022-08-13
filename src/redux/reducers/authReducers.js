import {UPDATE_ONBOARDING_STATUS, UPDATE_USER_LOGIN, UPDATE_USER_ACCESS_TOKEN} from '../constants';

const initialState = {
    isOnboardingDisabled: false,
    isLoggedIn: false,
    user: {},
    accessToken: ""
}


const authReducer = (state = initialState, action) => {
    const {status, type, isLoggedIn, user, accessToken} = action;

    switch(type) {
        case UPDATE_ONBOARDING_STATUS:
            return {...state, isOnboardingDisabled: status};

        case UPDATE_USER_LOGIN:
            return {...state, user, isLoggedIn};

        case UPDATE_USER_ACCESS_TOKEN:
            return {...state, accessToken};
            
        default:
            return state;
    }
};


export default authReducer;