import { UPDATE_ONBOARDING_STATUS } from "../constants";

export const updateOnboarding = (status) => {
    return {
        type: UPDATE_ONBOARDING_STATUS,
        status
    }
}