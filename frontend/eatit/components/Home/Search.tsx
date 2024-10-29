import { View, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import React from "react";

const { secondaryColor } = require("@/constants/Colors");

const { iconSize, wrapperMargin } = require("@/constants/Default");

const Search = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchGroup}>
        <Feather name="search" size={iconSize - 5} color={secondaryColor} />
        <TextInput
          style={styles.inputField}
          placeholder="Search for food"
        ></TextInput>
      </View>
      <TouchableOpacity style={styles.filterGroup}>
        <Ionicons
          name="filter-circle-sharp"
          color={secondaryColor}
          size={iconSize + 15}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: wrapperMargin,
    paddingRight: wrapperMargin,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    width: "100%",
  },
  searchGroup: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    justifyContent: "flex-start",
    gap: 10,
    alignItems: "center",
    paddingLeft: 10,
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
  },
  filterGroup: {
    borderRadius: 100,
    flex: 0.14,
  },
  inputField: {
    height: 50,
    width: "100%",
  },
});

export default Search;
