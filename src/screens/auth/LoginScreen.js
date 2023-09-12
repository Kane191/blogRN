import React from 'react';
import styles from '../../styles/styles';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';

const LoginScreen = ({ navigation, route }) => {
  const { params: { token } } = route;
  return (
    <ScrollView style={{ ...styles.container, ...styles.contCenter }}>
      <Image
        style={{ ...styles.img, ...styles.img2 }}
        source={require('../../../assets/chat.png')}
      />
      <Text>This is the deep link message: {token}</Text>
      <Text style={styles.heading2}>Sign In</Text>
      <View style={styles.form}>
        <TextInput style={styles.formInput} placeholder='Email' />
        <TextInput style={styles.formInput} secureTextEntry={true} placeholder='Password' />
      </View>
      <TouchableOpacity
        style={{ ...styles.btnPurple, ...styles.btnRegister }}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.btnTextWhite}>Login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default LoginScreen;