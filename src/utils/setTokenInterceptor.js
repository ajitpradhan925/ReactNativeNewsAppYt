import axios from 'axios';
import {showSnackBar} from '@utils/SnackBar.js';

export const setTokenInterceptor = (data={}, setToken=true, gbResponse=true) => {
    if(setToken) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
    }


    if(gbResponse) {
        axios.interceptors.response.use(
            function (response) {
                return response;
            },
            function (errors) {
                if (errors.response.status === 409) {
                    showSnackBar(errors.response.data?.msg, 'ERROR');
                } 
            }
        )
    }

};