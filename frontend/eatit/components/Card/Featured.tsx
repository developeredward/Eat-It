import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";

const {
  primaryColor,
  secondaryColor,
  altColor,
} = require("@/constants/Colors");
const {
  wrapperMargin,
  wrapperPadding,
  headerFontSize,
  paragraphFontSize,
} = require("@/constants/Default");

const Featured = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContent}>
        <Text style={styles.textColor}>Special Deals 🔥</Text>
        <Text style={[styles.textColor, styles.strong]}>50% OFF</Text>
        <Text style={[styles.textColor, styles.paragraph]}>
          and get free delivery
        </Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.textColor}>Order Now</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imgPlaceholder}>
        <Image
          style={{ objectFit: "contain" }}
          width={150}
          height={150}
          source={{
            uri: "https://www.transparentpng.com/thumb/food/740sAx-burger-food-hd-pic.png",
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: secondaryColor,
    height: 150,
    borderRadius: 20,
    marginLeft: wrapperMargin,
    marginRight: wrapperMargin,
    marginTop: 10,
  },
  textContent: {
    padding: wrapperPadding,
    gap: 8,
  },
  strong: {
    fontWeight: "bold",
    fontSize: headerFontSize,
  },
  paragraph: {
    fontSize: paragraphFontSize - 5,
    color: primaryColor,
  },
  textColor: {
    color: primaryColor,
  },
  btn: {
    backgroundColor: altColor,
    height: 30,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    top: 5,
  },
  imgPlaceholder: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Featured;
