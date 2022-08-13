import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, TextInput, TouchableOpacity, ActivityIndicator, } from 'react-native'
import { styles } from './styles';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { scale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import * as yup from 'yup';
import { Formik, Field } from 'formik';
import { loginUser } from '@Api/Auth';
import {showSnackBar} from '@utils/SnackBar.js';
import { connect } from 'react-redux';
import * as authActions from '@Action/authActions.js';
import PropTypes from 'prop-types';
import {setTokenInterceptor} from '@utils/setTokenInterceptor.js';

const signInValidationSchema = yup.object().shape({
    email: yup.string()
        .email('Please enter a valid email')
        .required('Email is requred'),
    password: yup.string().required('Password is required')
});


const Login = ({...props}) => {

    const {updateUserLogin, updateUserAccessToken, user, isLoggedIn } = props;

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
                        Sign in to access more features.
                    </Text>
                </View>

                <View style={styles().formContainer}>
                    <Formik
                        validationSchema={signInValidationSchema}
                        initialValues={{
                            email: '',
                            password: ''
                        }}
                        onSubmit={async (values) => {
                            setShowSpinner(true);
                            console.log("values ", values);
                            loginUser(values).then(res => {
                                console.log("Response ", res);
                                setShowSpinner(false);
                                navigation.navigate('Home');
                                updateUserLogin(res, true);
                                updateUserAccessToken(res.token);
                                showSnackBar('Successfully LoggedIn');
                                setTokenInterceptor(res);

                                console.log("User coming from state", user);
                                console.log("iosLoggedIn coming from state", isLoggedIn);


                            }).catch(err => {
                                console.log("Error ", err.response.data?.msg);
                                setShowSpinner(false);
                                showSnackBar(err.response.data?.msg, 'ERROR');
                            })
                        }}>
                        {({ handleSubmit, isValid, values, errors, handleChange, touched }) => (

                            <>
                                <View style={styles().inputContainer}>
                                    <View style={styles().wrapper}>
                                        <TextInput
                                            style={styles(background, text, lightGray5).input}
                                            placeholder="Enter Email"
                                            keyboardType="email-address"
                                            name="email"
                                            onChangeText={handleChange('email')}
                                        />
                                        {(errors.email && touched.email) &&
                                            <Text style={{ fontSize: 10, color: 'red', marginTop: scale(5) }}> {errors.email}</Text>}
                                    </View>

                                    <View style={styles().wrapper}>
                                        <View style={styles(background, text, lightGray5).input}>

                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                {/* <View> */}
                                                    <TextInput
                                                        placeholder="Enter Password"
                                                        secureTextEntry={showPassword}
                                                        style={{ height: scale(50), color: text, width: '93%' }}
                                                        name="password"
                                                        onChangeText={handleChange('password')}
                                                    />

                                                    {(errors.password && touched.password) &&
                                                        <Text style={{ fontSize: 10, color: 'red', marginTop: scale(5) }}> {errors.password}</Text>}
                                                {/* </View> */}


                                                <TouchableOpacity 
                                                    onPress={() => setShowPassword(prevState => !prevState)}
                                                    style={{ alignSelf: 'center' }}>
                                                    <Icon name={showPassword ? 'key-outline' : 'key'} size={20} color={text} />
                                                </TouchableOpacity>
                                            </View>


                                        </View>
                                    </View>

                                    <View style={styles().forgotPasswordContainer}>
                                        <TouchableOpacity>
                                            <Text style={styles().forgotPasswordText}>
                                                Forgot Password
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>


                                <View style={styles().btnContainer}>
                                    <TouchableOpacity
                                        onPress={handleSubmit}
                                        style={{ backgroundColor: dark ? card : secondary, height: scale(50), borderRadius: scale(10), flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ color: '#fff', marginLeft: scale(5) }}>
                                            Login
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
                            I am new user,
                        </Text>

                        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                            <Text style={styles(background, text, lightGray5, primary, dark).signText}> Sign Up</Text>
                        </TouchableOpacity>
                    </View>


                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Text style={{ color: lightGray5 }}>
                            Skip
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

Login.propTypes = {
    user: PropTypes.object.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    updateUserLogin: PropTypes.func.isRequired,
    updateUserAccessToken: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
        isLoggedIn: state.auth.isLoggedIn
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateUserLogin: (user, isLoggedIn) => dispatch(authActions.updateUserLogin(user, isLoggedIn)),
    updateUserAccessToken: (token) => dispatch(authActions.updateUserAccessToken(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
