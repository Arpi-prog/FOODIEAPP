import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AntDesign, Octicons, MaterialCommunityIcons, FontAwesome5, Feather, Entypo } from '@expo/vector-icons';

const SignupScreen = ({ navigation }) => {
    const [emailfocus, setEmailfocus] = useState(false);
    const [passwordfocus, setPasswordfocus] = useState(false);
    const [phonefocus, setPhonefocus] = useState(false);
    const [namefocus, setNamefocus] = useState(false);
    const [showpassword, setShowpassword] = useState(false);
    const [showcpassword, setShowcpassword] = useState(false);
    const [cpasswordfocus, setcPasswordfocus] = useState(false);

    // Form data
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setcPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [customError, setCustomError] = useState('');
    const [successmsg, setSuccessmsg] = useState(null);

    const handleSignup = () => {
        if (password !== cpassword) {
            setCustomError("Password doesn't match");
            return;
        } else if (phone.length !== 10) {
            setCustomError("Phone number should be 10 digits");
            return;
        }
        // Here you can handle the signup logic without Firebase
        setSuccessmsg('User created successfully (mock)');
    };

    return (
        <View style={styles.container}>
            {successmsg == null ? (
                <View style={styles.container}>
                    <Text style={styles.head1}>Sign Up</Text>
                    {customError !== '' && <Text style={styles.errormsg}>{customError}</Text>}
                    <View style={styles.inputout}>
                        <AntDesign name="user" size={24} color={namefocus === true ? colors.text1 : colors.text2} />
                        <TextInput
                            style={styles.input}
                            placeholder="Full Name"
                            onFocus={() => {
                                setEmailfocus(false);
                                setPasswordfocus(false);
                                setShowpassword(false);
                                setNamefocus(true);
                                setPhonefocus(false);
                                setCustomError('');
                            }}
                            onChangeText={(text) => setName(text)}
                        />
                    </View>

                    <View style={styles.inputout}>
                        <Entypo name="email" size={24} color={emailfocus === true ? colors.text1 : colors.text2} />
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            onFocus={() => {
                                setEmailfocus(true);
                                setPasswordfocus(false);
                                setShowpassword(false);
                                setNamefocus(false);
                                setPhonefocus(false);
                                setCustomError('');
                            }}
                            onChangeText={(text) => setEmail(text)}
                        />
                    </View>

                    <View style={styles.inputout}>
                        <Feather name="smartphone" size={24} color={phonefocus === true ? colors.text1 : colors.text2} />
                        <TextInput
                            style={styles.input}
                            placeholder="Phone Number"
                            onFocus={() => {
                                setEmailfocus(false);
                                setPasswordfocus(false);
                                setShowpassword(false);
                                setNamefocus(false);
                                setPhonefocus(true);
                                setCustomError('');
                            }}
                            onChangeText={(text) => setPhone(text)}
                        />
                    </View>

                    <View style={styles.inputout}>
                        <MaterialCommunityIcons name="lock-outline" size={24} color={passwordfocus == true ? colors.text1 : colors.text2} />
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            onFocus={() => {
                                setEmailfocus(false);
                                setPasswordfocus(true);
                                setShowpassword(false);
                                setNamefocus(false);
                                setPhonefocus(false);
                                setCustomError('');
                            }}
                            onChangeText={(text) => setPassword(text)}
                            secureTextEntry={!showpassword}
                        />
                        <Octicons name={showpassword ? "eye" : "eye-closed"} size={24} color="black" onPress={() => setShowpassword(!showpassword)} />
                    </View>

                    <View style={styles.inputout}>
                        <MaterialCommunityIcons name="lock-outline" size={24} color={cpasswordfocus == true ? colors.text1 : colors.text2} />
                        <TextInput
                            style={styles.input}
                            placeholder="Confirm Password"
                            onFocus={() => {
                                setEmailfocus(false);
                                setPasswordfocus(false);
                                setShowpassword(true);
                                setNamefocus(false);
                                setPhonefocus(false);
                                setCustomError('');
                            }}
                            onChangeText={(text) => setcPassword(text)}
                            secureTextEntry={!showcpassword}
                        />
                        <Octicons name={showcpassword ? "eye" : "eye-closed"} size={24} color="black" onPress={() => setShowcpassword(!showcpassword)} />
                    </View>

                    <Text style={styles.address}>Please enter your address</Text>
                    <View style={styles.inputout}>
                        <TextInput
                            style={styles.input1}
                            placeholder="Enter your Address"
                            onChangeText={(text) => setAddress(text)}
                            onPress={() => {
                                setEmailfocus(false);
                                setPasswordfocus(false);
                                setShowpassword(false);
                                setNamefocus(false);
                                setPhonefocus(false);
                                setCustomError('');
                            }}
                        />
                    </View>

                    <TouchableOpacity style={styles.btn1} onPress={handleSignup}>
                        <Text style={{ color: colors.col1, fontSize: titles.btntxt, fontWeight: "bold" }}>Sign up</Text>
                    </TouchableOpacity>

                    <Text style={styles.or}>OR</Text>
                    <Text style={styles.gftxt}>Sign In With</Text>

                    <View style={styles.gf}>
                        <TouchableOpacity>
                            <View style={styles.gficon}>
                                <AntDesign name="google" size={24} color="#EA4335" />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.gficon}>
                                <FontAwesome5 name="facebook-f" size={24} color="#4267B2" />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.hr80}></View>
                    <Text>Already have an account?
                        <Text style={styles.signup} onPress={() => navigation.navigate('login')}> Sign In</Text>
                    </Text>
                </View>
            ) : (
                <View style={styles.container1}>
                    <Text style={styles.successmessage}>{successmsg}</Text>
                    <TouchableOpacity style={styles.btn1} onPress={() => navigation.navigate('login')}>
                        <Text style={{ color: colors.col1, fontSize: titles.btntxt, fontWeight: "bold" }}>Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn1} onPress={() => setSuccessmsg(null)}>
                        <Text style={{ color: colors.col1, fontSize: titles.btntxt, fontWeight: "bold" }}>Go Back</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const colors = {
    col1: '#fff',    // White color
    col2: '#ff4242', // Red color
    text1: '#000',   // Black color
    text2: '#ff4242' // Red color
};

const titles = {
    title1: 30,
    btntxt: 20
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    container1: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 60,
    },
    head1: {
        fontSize: titles.title1,
        color: colors.text1,
        textAlign: 'center',
        marginVertical: 10,
    },
    inputout: {
        flexDirection: 'row',
        width: '80%',
        marginVertical: 10,
        backgroundColor: colors.col1,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        elevation: 20,
    },
    input: {
        fontSize: 18,
        marginLeft: 10,
        width: '80%',
    },
    forgot: {
        color: colors.text2,
        marginTop: 20,
        marginBottom: 10,
    },
    or: {
        color: colors.text1,
        marginVertical: 10,
        fontWeight: 'bold',
    },
    gftxt: {
        color: colors.text2,
        marginBottom: 10,
        fontSize: 25,
    },
    gf: {
        flexDirection: 'row',
    },
    gficon: {
        backgroundColor: 'white',
        width: 50,
        marginHorizontal: 10,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        elevation: 20,
    },
    signup: {
        color: colors.text1,
    },
    address: {
        fontSize: 18,
        color: colors.text2,
        textAlign: 'center',
        marginTop: 20,
    },
    errormsg: {
        color: 'red',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10,
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
    successmessage: {
        color: 'green',
        fontSize: 18,
        textAlign: 'center',
        margin: 10,
        borderColor: 'green',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
    btn1: {
        backgroundColor: colors.text2,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    hr80: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        width: '80%',
        marginVertical: 20,
    },
});

export default SignupScreen;
