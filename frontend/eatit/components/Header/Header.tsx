import { View, Text, StyleSheet } from "react-native";
import React from "react";

const { primaryColor } = require("@/constants/Colors");

const Header = () => {
  return <View style={styles.header}></View>;
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: primaryColor,
    height: 100,
  },
});

export default Header;
