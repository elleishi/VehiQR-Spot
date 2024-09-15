import { StyleSheet, View, Text, TextInput, Image, KeyboardAvoidingView, Platform, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useState } from 'react';
import { auth } from '../FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const logIn = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('Logged in with:', userCredential.user.email);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
            >
                <View style={styles.innerContainer}>

                    <View style={styles.imageContainer}>
                        <Image source={require('../assets/images/top.png')} style={styles.topImage} />
                        <Image source={require('../assets/images/vehiQR-spot-full.png')} style={styles.logo} />
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder='Email'
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            style={styles.ForInput}
                        />
                        <TextInput
                            placeholder='Password'
                            secureTextEntry={true}
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            style={styles.ForInput}
                        />
                    </View>

                    <TouchableOpacity onPress={logIn} style={styles.buttonContainer}>
                        <Text style={styles.ForButton}>LOG IN</Text>
                    </TouchableOpacity>

                    <View style={styles.bottomImageContainer}>
                        <Image source={require('../assets/images/bot.png')} style={styles.bottomImage} />
                    </View>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    innerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },

    imageContainer: {
        width: '100%',
        flex: 1,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 30
    },
    topImage: {
        position: 'absolute',
        top: -670,
    },

    logo: {
        padding: 10,
        top: -280,
    },

    inputContainer: {
        flex: 1,
        justifyContent: 'center',
    },

    ForInput: {
        borderWidth: 1,
        padding: 15,
        height: 50,
        width: 280,
        borderRadius: 8,
        borderColor: '#314026',
        marginBottom: 15,
    },
    buttonContainer: {
        flex: 1,
    },

    ForButton: {
        padding: 15,
        height: 50,
        width: 180,
        borderRadius: 60,
        backgroundColor: '#314026',
        textAlign: 'center',
        color: '#ffffff',
        fontWeight: '900',
        top: 80
    },

    bottomImageContainer: {
        width: '100%',
        flex: 1,
        top: 180
    },
    
    bottomImage: {
        width: '100%',
        height: 300,
        position: 'absolute',
        bottom: -300,
    }

});

export default LoginScreen;
