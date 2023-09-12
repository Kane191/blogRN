import React from 'react';
import styles from '../styles/styles';
import { View, Text, Image, StyleSheet, TouchableOpacity, Button } from 'react-native';
import * as Linking from 'expo-linking';

const StartScreen = ({navigation}) => {
  const Url_A = "myapp://app/register"
  const Url_B = "myapp://app/login/come-from-url";
  return (
    <View style={styles.container}>
        <Text style={styles.heading}>Blogify</Text>
        <Button title='Register' onPress={() => Linking.openURL(Url_A)}/>
        <Button title='Deep Link Button' onPress={() => Linking.openURL(Url_B)}/>
        <Image source={require('../../assets/birdChat.png')} style={{...styles.img, ...styles.mt20}}/>
        <Text style={styles.heading3}>Let's get started</Text>
        <Text style={styles.txt}>Discover, engage, and share your thoughts on our Blog App – the perfect platform to explore diverse topics and connect with like-minded individuals.</Text>
        <View style={styles.btnCont}>
            <TouchableOpacity style={styles.btnPurple} onPress={()=>navigation.navigate('Register')}>
                <Text style={styles.btnTextWhite}>Create Account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('Login')}>
                <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default StartScreen;