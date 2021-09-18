import React, { useEffect } from 'react'
import { View, Text, ScrollView, TextInput, TouchableOpacity, } from 'react-native'
import { styles } from './styles';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { scale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';

const Register = () => {

    const navigation = useNavigation();

    const { colors: { background, text, lightGray5, card, secondary, primary }, dark } = useTheme();

    useEffect(() => {
    }, []);

    return (
        <View style={styles(background).loginMain}>
            <ScrollView showsHorizontalScrollIndicator={false}>
                <View style={styles().headerContainer}>
                    <Text style={styles(background, text).welcomeText}>
                        Welcome
                    </Text>
                    <Text style={styles(background, text, lightGray5).signInText}>
                        Sign up to access more features.
                    </Text>
                </View>

                <View style={styles().formContainer}>
                    <View style={styles().inputContainer}>

                    <View style={styles().wrapper}>
                            <TextInput
                                style={styles(background, text, lightGray5).input}
                                placeholder="Enter Name"
                            />
                        </View>


                        <View style={styles().wrapper}>
                            <TextInput
                                style={styles(background, text, lightGray5).input}
                                placeholder="Enter Email"
                                keyboardType="email-address"
                            />
                        </View>

                        <View style={styles().wrapper}>
                            <View style={styles(background, text, lightGray5).input}>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View>
                                        <TextInput
                                            placeholder="Enter Password"
                                            secureTextEntry={true}
                                            style={{ height: scale(50), color: text }}
                                        />
                                    </View>


                                    <TouchableOpacity style={{ alignSelf: 'center' }}>
                                        <Icon name="key-outline" size={20} color={text} />
                                    </TouchableOpacity>
                                </View>


                            </View>
                        </View>

                    </View>

                    <View style={styles().btnContainer}>
                        <TouchableOpacity
                            style={{ backgroundColor: dark ? card : secondary, height: scale(50), borderRadius: scale(10), flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#fff' }}>
                                Login
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles().footerContainer}>
                    <View style={styles().footerContainerInner}>
                        <Text style={styles().newUserText}>
                            I am already a member,
                        </Text>

                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={styles(background, text, lightGray5, primary, dark).signText}> 
                                Sing In</Text>
                        </TouchableOpacity>
                    </View>


                    <TouchableOpacity>
                        <Text style={{color: lightGray5}}>
                            Skip
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default Register;
