import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native'
import { styles } from './styles';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { scale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import * as yup from 'yup';
import { Formik } from 'formik';
import { registerUser } from '@Api/Auth';
import {showSnackBar} from '@utils/SnackBar.js';

const signUpValidationSchema = yup.object().shape({
    name: yup
        .string()
        .required('Name is required'),
    email: yup
        .string()
        .email('Please enter valid email')
        .required('Email is required'),
    password: yup
        .string()
        .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
        .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
        .matches(/\d/, 'Password must have a number')
        .matches(
            /[!@#$%^&*()\-_"=+{}; :,<.>]/,
            'Password must have a special character',
        )
        .min(8, ({ min }) => `Passowrd must be at least ${min} characters`)
        .required('Password is required'),
})

const Register = () => {

    const navigation = useNavigation();

    const [showSpinner, setShowSpinner] = useState(false);
    const [showPassword, setShowPassword] = useState(true);


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

                    <Formik
                        validationSchema={signUpValidationSchema}
                        initialValues={{
                            name: '',
                            email: '',
                            password: ''
                        }}
                        onSubmit={(values) => {
                            setShowSpinner(true);
                            console.log("values ", values);
                            registerUser(values).then(res => {
                                console.log("Response ", res);
                                setShowSpinner(false);
                                Alert.alert(
                                    " ",
                                    res.msg,
                                    [
                                        {
                                            text: 'Ok',
                                            onPress: () => {
                                                navigation.navigate('Login');
                                            }
                                        }
                                    ]
                                )
                                // navigation.navigate('Home');
                            }).catch(err => {
                                console.log("Error ", err.response.data?.msg);
                                setShowSpinner(false);
                                showSnackBar(err.response.data?.msg, 'ERROR');
                            })
                        }}
                    >
                        {({ handleSubmit, isValid, values, errors, handleChange, touched }) => (
                            <>
                                <View style={styles().inputContainer}>

                                    <View style={styles().wrapper}>
                                        <TextInput
                                            style={styles(background, text, lightGray5).input}
                                            placeholder="Enter Name"
                                            name="name"
                                            onChangeText={handleChange('name')}
                                            placeholderTextColor={text}
                                        />

                                        {(errors.name && touched.name) &&
                                            <Text style={{ fontSize: scale(10), color: 'red', marginTop: scale(5) }}>{errors.name}</Text>
                                        }
                                    </View>


                                    <View style={styles().wrapper}>
                                        <TextInput
                                            style={styles(background, text, lightGray5).input}
                                            placeholder="Enter Email"
                                            keyboardType="email-address"
                                            name="email"
                                            onChangeText={handleChange('email')}
                                            placeholderTextColor={text}
                                        />

                                        {(errors.email && touched.email) &&
                                            <Text style={{ fontSize: scale(10), color: 'red', marginTop: scale(5) }}>{errors.email}</Text>
                                        }

                                    </View>

                                    <View style={styles().wrapper}>
                                        <View style={styles(background, text, lightGray5).input}>

                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <View>
                                                    <TextInput
                                                        placeholder="Enter Password"
                                                        secureTextEntry={showPassword}
                                                        style={{ height: scale(50), color: text }}
                                                        name="password"
                                                        onChangeText={handleChange('password')}
                                                        placeholderTextColor={text}
                                                    />

                                                    {(errors.password && touched.password) &&
                                                        <Text style={{ fontSize: scale(10), color: 'red', marginTop: scale(5) }}>{errors.password}</Text>
                                                    }
                                                </View>


                                                <TouchableOpacity 
                                                    onPress={() => setShowPassword(prevState => !prevState)}
                                                    style={{ alignSelf: 'center' }}>
                                                    <Icon name={showPassword ? 'key-outline' : 'key'} size={20} color={text} />
                                                </TouchableOpacity>


                                            </View>


                                        </View>
                                    </View>

                                </View>

                                <View style={styles().btnContainer}>
                                    <TouchableOpacity
                                         onPress={handleSubmit} 
                                        style={{ backgroundColor: dark ? card : secondary, height: scale(50), borderRadius: scale(10), flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ color: '#fff' }}>
                                            Register
                                        </Text>

                                        {showSpinner && (<ActivityIndicator color={'#fff'} />)}
                                    </TouchableOpacity>
                                </View>

                            </>
                        )}
                    </Formik>

                </View>

                <View style={styles().footerContainer}>
                    <View style={styles().footerContainerInner}>
                        <Text style={styles().newUserText}>
                            I am already a member,
                        </Text>

                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={styles(background, text, lightGray5, primary, dark).signText}>
                                Sign In</Text>
                        </TouchableOpacity>
                    </View>


                    <TouchableOpacity>
                        <Text style={{ color: lightGray5 }}>
                            Skip
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default Register;
