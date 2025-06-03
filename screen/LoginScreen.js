import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  
  const handleLogin = Async () => {

    if(!email.endsWhith('@gmail.com')){
      Alert.alert('Email Harus mengandung @gmail.com')
      return;
    }

    try{
      const storedata = await AsyncStorage.getItem('user', JSON.parse(storedata))
      const parsedata = parsedata? JSON.parse('user') : null;

      if(parsedata && parsedata.email === emal && parsedata.password === password){
        Alert.alert('Login Berhasil');
        return;
      } else {
        Alert.alert('email dan password salah');
        return;
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Perlu Registerv ulang');  
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        keyboardType="email-address"
      />

      <TextInput
        placeholder="Password"
        palceholderTextColor="#000"
        style={styles.input}
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={styles.buttonText}>Masuk</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
        <Text style={styles.link}>Belum punya akun? Daftar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    marginBottom: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  input: {
    height: 48,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
  link: {
    marginTop: 20,
    color: '#28a745',
    textAlign: 'center',
  },
});
