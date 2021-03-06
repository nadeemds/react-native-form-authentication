import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomInput/CustomButton/CustomButton";

const SignInScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSignInPressed = () => {
    console.warn("UserSign pressed");
  };
  const onForgetPasswordPressed = () => {
    console.warn("Forget password pressed");
  };
  const onSignInwithGoogle = () => {
    console.warn("Sign in with google");
  };
  const onSignInwithFacebook = () => {
    console.warn("Sign in with facebook ");
  };
  const onSignInwithApple = () => {
    console.warn("Sign in with Apple");
  };
  const onSignUpPressed = () => {
    console.warn("Sign in with Apple");
  };
  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.heading}>Sign In Screen(Nad)</Text>
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomButton onPress={onSignInPressed} text="Sign In" type="PRIMARY" />
        <CustomButton
          onPress={onForgetPasswordPressed}
          text="Forget Password?"
          type="TERTIARY"
        />
        <CustomButton
          onPress={onSignInwithGoogle}
          text="Sign In with Google"
          type="PRIMARY"
          bgColor="#FAE9EA"
          fgColor="#DD4D44"
        />
        <CustomButton
          onPress={onSignInwithFacebook}
          text="Sign In with Facebook"
          type="PRIMARY"
          bgColor="#E7EAF4"
          fgColor="#4765A9"
        />
        <CustomButton
          onPress={onSignInwithApple}
          text="Sign In with Apple"
          type="PRIMARY"
          bgColor="#e3e3e3"
          fgColor="#363636"
        />
        <CustomButton
          onPress={onSignUpPressed}
          text="Don't have an account? create one."
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 30,
  },
});
