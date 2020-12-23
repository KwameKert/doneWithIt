import React from 'react';
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {AppForm, AppFormField, SubmitButton} from '../components/forms';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen(props) {
    return (
        <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/logo-red.png")}
      />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log("values here: ", values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          placeholder="Name"
          icon="account"
          name="name"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <AppFormField
          placeholder="Email"
          icon="email"
          name="email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
        />

        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
          icon="lock"
          name="password"
          textContentType="password"
          secureTextEntry={true}
        />

        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
    );
}


const styles = StyleSheet.create({
    container: {
      padding: 10,
    },
    logo: {
      width: 80,
      height: 80,
      alignSelf: "center",
      marginTop: 30
    },
  });


export default RegisterScreen;