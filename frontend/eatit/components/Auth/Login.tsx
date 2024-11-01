import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import React, { useState } from "react";

interface LoginProps {
  visible: boolean;
}

const Login = ({ visible }: LoginProps) => {
  const handleClose = () => {
    visible;
  };
  return (
    <View style={styles.modal}>
      <Text>Login</Text>
      <TouchableOpacity onPress={() => handleClose}>
        <Text>Close</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Login;
