import { useNavigation, useTheme } from '@react-navigation/native';
import React, {useState, useEffect} from 'react'
import { View, Text, Image } from 'react-native'
import { connect } from 'react-redux';
import { styles } from './styles';
import PropTypes from 'prop-types';
import {setTokenInterceptor} from '@utils/setTokenInterceptor.js';

const SplashScreen = ({...props}) => {

    const {isLoggedIn, user} = props;

    const [isVisible, setIsVisible] = useState(true);
    const navigation = useNavigation();

    const theme = useTheme();
    const {background,dark} = theme;

    const hideSplashScreen = () => {
        setIsVisible(false);
    }

    useEffect(() => {
        setTimeout(() => {
            if(isLoggedIn) {
                setTokenInterceptor(user);
            }
            hideSplashScreen();
            navigation.navigate(isLoggedIn ? 'Home' : 'Login');
        }, 1000);
    }, []);

    const renderSplash = () => {
        return (
            <View style={styles().SplashScreen_RootView}>
                <View style={styles().SplashScreen_ChildView}>
                    <Image source={dark ? require('@Asset/splash_icon_light.png') : require('@Asset/splash_icon_dark.png')} 
                        style={{ width: 150, height: 150, resizeMode: "contain" }} />
                </View>
            </View>
        )
    }

    return (
        <View style={styles(background).MainContainer}>
            {isVisible === true ? renderSplash(): null}
        </View>
    )
}


SplashScreen.propTypes = {
    user: PropTypes.object.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,

};

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
        isLoggedIn: state.auth.isLoggedIn,
        accessToken: state.auth.accessToken
    }
}

const mapDispatchToProps = (disptach) => { return {} }


export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
