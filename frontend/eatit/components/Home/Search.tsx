import { View, Text, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import React from "react";

const { iconSize } = require("@/constants/Default");

const Search = () => {
  return (
    <View style={styles.container}>
      <Feather name="search" size={iconSize} />
      <TextInput
        style={styles.inputField}
        placeholder="Search for food..."
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginLeft: 40,
    flexDirection: "row",
    backgroundColor: "#ffffff",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30,
  },
  inputField: {
    height: 50,
    width: "50%",
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
  },
});

export default Search;
