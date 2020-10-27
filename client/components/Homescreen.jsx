/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, Image, Button } from 'react-native';
import * as Linking from 'expo-linking';
import styles from '../styles';

const logo = require('../../assets/jobhub-logo.jpg');

export default function Homescreen() {
  const handlePress = () => {
    Linking.openURL('http://localhost:3000/auth/linkedin');
  }

  return (
    <View style={styles.container}>
      <Image source={logo} style={{width: 75, height: 75}}/>
      <Text style={styles.loginText}>Login</Text>
      <Button style={styles.loginButton} title="Sign in with LinkedIn" onPress={handlePress} />
    </View>
  );
}
