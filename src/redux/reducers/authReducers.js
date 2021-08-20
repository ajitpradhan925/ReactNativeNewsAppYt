import {UPDATE_ONBOARDING_STATUS} from '../constants';

const initialState = {
    isOnboardingDisabled: false
}


const authReducer = (state = initialState, action) => {
    const {status, type} = action;

    switch(type) {
        case UPDATE_ONBOARDING_STATUS:
            return {...state, isOnboardingDisabled: status};

        default:
            return state;
    }
};


export default authReducer;