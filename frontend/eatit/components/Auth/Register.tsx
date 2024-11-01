import { View, Modal, TouchableOpacity, StyleSheet, Text } from "react-native";
import React from "react";

interface RegisterProps {
  visible: boolean;
}

const Register = ({ visible }: RegisterProps) => {
  return (
    <Modal visible={visible}>
      <View>
        <Text>Login</Text>
        <TouchableOpacity>
          <Text>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default Register;
