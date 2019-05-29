/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow
*/

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Button from 'react-native-button';

export default class App extends Component<Props> {
  render() {
    return (

      <View style={styles.container}>
        <LinearGradient style={{flex:1}}colors={['#56ccF2','#2F80ED']}>
          <View style={styles.placeholder}>
          </View>

          <View style={styles.logoContainer}>
            <Image style={styles.pnbImageLogo} source={require('./src/images/pnb-logo.png')} />
          </View>

          <View style={styles.loginContainer}>
            <View style={styles.loginFieldsContainer}>
              <Text style={styles.lblLogin}>Login</Text>
              <Text style={styles.lblCredentials}>Username</Text>
              <TextInput style={styles.txtCredentials} />
              <Text style={styles.lblCredentials}>Password</Text>
              <TextInput style={styles.txtCredentials} />
              <Button
                title='Log-in'
                containerStyle={{padding:10, marginTop:30, height:45, overflow:'hidden', borderRadius:5, backgroundColor:'#1976D2', opacity:1}}
                disabledContainerStyle={{backgroundColor:'grey'}}
                style={{fontSize:20, color:'white'}}>Log in
              </Button>
            </View>
          </View>

        </LinearGradient>
      </View>

      );
    }
  }

  const styles = StyleSheet.create({
      container: {
      flex: 1,
      // backgroundColor: '#64B5F6'
      },
      placeholder: {
      flex: .1,
      },
      logoContainer: {
      flex: .3,
      alignItems: 'center',
      },
      pnbImageLogo: {
        flex: 1,
        resizeMode: 'contain',
        aspectRatio: 0.6
      },
      loginContainer: {
        flex: .6,
        // backgroundColor: 'red',
        alignItems: 'center'
      },
      loginFieldsContainer:{
        flex: 1,
        width: '80%',
        // backgroundColor: 'yellow'
      },
      lblLogin:{
        fontSize: 35,
        color: 'white',
        fontWeight: 'bold',
        // backgroundColor: 'green',
        marginBottom: 25
      },
      lblCredentials:{
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 8
      },
      txtCredentials:{
        borderColor: 'white',
        backgroundColor: 'white',
        height: 40,
        padding: 10,
        marginBottom: 20,
        borderRadius: 30
      },
      btnLogin: {
        color: 'green',
        fontSize: 20
      }
  });
