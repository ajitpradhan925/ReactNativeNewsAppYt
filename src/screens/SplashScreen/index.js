import { useNavigation, useTheme } from '@react-navigation/native';
import React, {useState, useEffect} from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './styles';

const SplashScreen = () => {
    const [isVisible, setIsVisible] = useState(true);
    const navigation = useNavigation();

    const theme = useTheme();
    const {background,dark} = theme;

    const hideSplashScreen = () => {
        setIsVisible(false);
    }

    useEffect(() => {
        setTimeout(() => {
            hideSplashScreen();
            navigation.navigate('Tab');
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

export default SplashScreen;
