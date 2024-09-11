import { StyleSheet, View, Text, TextInput, Image, Button, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import { auth } from '../../FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth'


const LoginScreen = () => {
    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');

    const logIn = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('Logged in with:', userCredential.user.email)
        })
        .catch((error) => {
            console.error('Error:', error)
        })
    };

  return (
    <View style={{ flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
        }}>

            <View style={{ marginBottom: 50}}>
                <Image source={ require ('../../assets/images/top.png')} style={{ position: 'absolute', top: -600, bottom: 0, left: -390, right: 0 }} />
                <Image source={ require ('../../assets/images/vehiQR-spot-full.png')} style={{ position: 'absolute', top: -200, bottom: 0, left: -75, right: 0}} />
            </View>

            <View>
                <TextInput placeholder='Email' value={email} onChangeText={(text) => setEmail(text)} style = {[ styles.ForInput, { marginBottom: 10 }]}/>
                <TextInput placeholder='Password' secureTextEntry={true} value={password} onChangeText={(text) => setPassword(text)} style = {[ styles.ForInput, { marginBottom: 30 }]}/>            
            </View>

            <View>
                <TouchableOpacity onPress = {logIn}>
                    <Text style = {styles.ForButton}> LOG IN </Text>                    
                </TouchableOpacity>
            </View>

            <View style={{ marginBottom: 0}}>
                <Image source={ require ('../../assets/images/bot.png')} style={{ position: 'absolute', top: 100, bottom: 0, left: -250, right: 0, width: 500, height: 300}} />
            </View>
    </View>
    )
}

const styles = StyleSheet.create ({
    ForInput: {
    borderWidth: 1,
    padding: 12,
    width: 300,
    borderRadius: 8,
    borderColor: '#314026',
    marginBottom: 15
    },

    ForButton: {
    padding: 12,
    width: 180,
    borderRadius: 50,
    backgroundColor: '#314026',
    display: 'flex',
    padding: 15,
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: '800'
    }
});

export default LoginScreen;