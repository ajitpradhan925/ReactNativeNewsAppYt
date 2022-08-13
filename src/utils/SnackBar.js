import Toast from 'react-native-simple-toast';
import SnackBar from 'react-native-snackbar';

export const showSnackBar = (msg, type = 'INFO') => {
    SnackBar.show({
        text: msg,
        duration: SnackBar.LENGTH_SHORT,
        backgroundColor: type == 'ERROR' ? '#f00' : '#000'
    });
};

export const showToast = (msg) => {
    Toast.show(msg)
};