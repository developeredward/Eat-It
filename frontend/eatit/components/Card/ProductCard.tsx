import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import React from "react";

const {
  primaryColor,
  secondaryColor,
  altColor,
} = require("@/constants/Colors");
const {
  iconSize,
  wrapperMargin,
  wrapperPadding,
  headerFontSize,
  paragraphFontSize,
} = require("@/constants/Default");

const ProductCard = () => {
  return (
    <View>
      <TouchableOpacity style={styles.card}>
        <View style={styles.imagePlacholder}>
          <Image
            style={styles.image}
            width={230}
            height={200}
            source={{
              uri: "https://www.transparentpng.com/thumb/food/yUN9iB-food-burger-clipart-transparent.png",
            }}
          />
        </View>
        <View style={styles.info}>
          <View style={styles.infoText}>
            <Text style={styles.heading}>Burger Meal</Text>
            <Text style={styles.rating}>⭐ 4.9 (200 reviews)</Text>
            <Text style={styles.price}>$10</Text>
          </View>
          <View style={styles.btn}>
            <TouchableOpacity style={styles.btnWrapper}>
              <Feather name="shopping-cart" size={15} color={"#ffffff"} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    width: 200,
    height: 300,
    borderRadius: 20,
    padding: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.02,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  rating: {
    color: secondaryColor,
    fontSize: 12,
  },
  infoText: {
    gap: 10,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  heading: {
    fontSize: 18,
    fontWeight: "500",
  },
  price: {
    fontSize: 14,
    fontWeight: "600",
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    top: 20,
  },
  btnWrapper: {
    backgroundColor: altColor,
    width: 40,
    height: 40,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  imagePlacholder: {
    // backgroundColor: "red",
  },
  image: {
    objectFit: "contain",
  },
});

export default ProductCard;
