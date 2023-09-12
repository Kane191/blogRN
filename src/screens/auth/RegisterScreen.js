import React, { useState, useContext } from 'react';
import styles from '../../styles/styles';
import AuthContext from '../../context/AuthContext';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [registerData, setRegisterData] = useState({firstName: '', lastName: '', email: '', password: ''});
  const { register } = useContext(AuthContext);
  return (
    <ScrollView style={{ ...styles.container, ...styles.contCenter }}>
      <Image
        style={{ ...styles.img, ...styles.img2 }}
        source={require('../../../assets/chat.png')}
      />
      <Text style={styles.heading2}>Sign Up</Text>
      <View style={styles.form}>
        <TextInput style={styles.formInput} placeholder='First name' 
          value={registerData.firstName}
          onChangeText={(text)=> setRegisterData({...registerData, firstName: text})}
        />
        <TextInput style={styles.formInput} placeholder='Last name' 
          value={registerData.lastName}
          onChangeText={(text)=> setRegisterData({...registerData, lastName: text})}
        />
        <TextInput style={styles.formInput} placeholder='Email' 
          value={registerData.email}
          onChangeText={(text)=> setRegisterData({...registerData, email: text})}
        />
        <TextInput style={styles.formInput} secureTextEntry={true} placeholder='Password' 
          value={registerData.password}
          onChangeText={(text)=> setRegisterData({...registerData, password: text})}
        />
      </View>
      <TouchableOpacity
        style={{ ...styles.btnPurple, ...styles.btnRegister }}
        onPress={() => register(registerData)}
      >
        <Text style={styles.btnTextWhite}>Register</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default RegisterScreen;
