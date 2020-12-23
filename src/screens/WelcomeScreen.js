import React from 'react';
import { View, ImageBackground, Button, StyleSheet,Image,  Text} from 'react-native';

import AppButton from '../components/AppButton';


function WelcomeScreen({navigation}) {
    return (
        <View style={styles.container}>
       
      <ImageBackground  
      blurRadius={3}
      source={require('../../assets/background.jpg')} 
      style={styles.background}>
        <View style={styles.logoContainer}>
        <Image source={require('../../assets/logo-red.png')} style={styles.logo} /> 
          <Text style={styles.tagline}>Sell What You Don't Need</Text>
        </View>

      <View  style={styles.buttonContainer}>
        <AppButton title="Login"  onPress={()=>navigation.navigate('Login')} />
          <AppButton title="Register" color="secondary" onPress={()=>navigation.navigate('Register')} />
      </View>

      </ImageBackground>
  
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
      },
      buttonContainer:{
        width: '100%',
        padding: 10
      },
    background: {
       flex:1,
       justifyContent: "flex-end",
       alignItems: "center",
       
    },
    logoContainer:{
        position: 'absolute',
        top: 100,
        alignItems: "center"
    },
    logo: {
      width: 100,
      height: 100
    },
    tagline: {
      fontSize: 20,
      fontWeight: "bold",
      paddingVertical: 30
    }
 
    // buttonItem: {
    //   alignContent:"flex-end"
    // }
  });

export default WelcomeScreen;