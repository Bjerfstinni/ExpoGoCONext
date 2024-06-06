import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const SignUp = ({ navigation }) => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('User');

  const handleSignUp = async () => {
    try {
      const response = await fetch('http://192.168.217.62:5000/SignUp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fname, lname, email, password, role }),
      });
      const data = await response.json();
      if (data.status === 'okay') {
        Alert.alert('Registration Successful', 'You have successfully registered!');
        navigation.navigate('Home', { firstName: fname });
      } else {
        Alert.alert('Registration Failed', data.error || 'An error occurred');
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred during registration');
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={fname}
        onChangeText={setFname}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lname}
        onChangeText={setLname}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={styles.roleContainer}>
        <View style={styles.roleOption}>
          <CheckBox value={true} disabled={true} />
          <Text style={styles.roleText}>Admin</Text>
        </View>
        <View style={styles.roleOption}>
          <CheckBox value={role === 'User'} onValueChange={() => setRole('User')} />
          <Text style={styles.roleText}>User</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.toggleContainer}>
        <Text style={styles.toggleText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.linkText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  roleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 10,
  },
  roleOption: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  roleText: {
    marginLeft: 5,
  },
  button: {
    backgroundColor: '#044556',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  toggleContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  toggleText: {
    color: 'black',
    textAlign: 'center',
  },
  linkText: {
    color: '#007bff',
    textAlign: 'center',
  },
});
