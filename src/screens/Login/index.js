import React, { useEffect } from 'react'
import { View, Text, ScrollView, TextInput, TouchableOpacity, } from 'react-native'
import { styles } from './styles';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { scale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import * as yup from 'yup';
import { Formik, Field } from 'formik';
import { loginUser } from '@Api/Auth';

const signInValidationSchema = yup.object().shape({
    email: yup.string()
        .email('Please enter a valid email')
        .required('Email is requred'),
    password: yup.string().required('Password is required')
});


const Login = () => {

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
                            console.log("values ", values);
                            loginUser(values).then(res => {
                                console.log("Response ", res);
                            }).catch(err => {
                                console.log("Error ", err);
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
                                            <Text style={{ fontSize: 10, color: 'red' }}> {errors.email}</Text>}
                                    </View>

                                    <View style={styles().wrapper}>
                                        <View style={styles(background, text, lightGray5).input}>

                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <View>
                                                    <TextInput
                                                        placeholder="Enter Password"
                                                        secureTextEntry={true}
                                                        style={{ height: scale(50), color: text }}
                                                        name="password"
                                                        onChangeText={handleChange('password')}
                                                    />

                                                    {(errors.password && touched.password) &&
                                                        <Text style={{ fontSize: 10, color: 'red' }}> {errors.password}</Text>}
                                                </View>


                                                <TouchableOpacity style={{ alignSelf: 'center' }}>
                                                    <Icon name="key-outline" size={20} color={text} />
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
                                        <Text style={{ color: '#fff' }}>
                                            Login
                                        </Text>
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

export default Login;
