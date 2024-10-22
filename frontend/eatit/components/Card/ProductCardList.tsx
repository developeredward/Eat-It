import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
const { primaryColor, secondaryColor } = require("@/constants/Colors");
const { wrapperMargin, headerFontSize } = require("@/constants/Default");
import ProductCard from "./ProductCard";

const ProductCardList = () => {
  return (
    <View>
      <View style={styles.headContainer}>
        <Text style={styles.title}>Popular Food</Text>
        <TouchableOpacity>
          <Text style={{ color: secondaryColor }}>See All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cardContainer}
      >
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  headContainer: {
    flexDirection: "row",
    width: "100%",
    paddingLeft: wrapperMargin,
    paddingRight: wrapperMargin,
    justifyContent: "space-between",
    alignItems: "baseline",
    marginTop: 30,
  },
  title: {
    fontSize: headerFontSize,
    fontWeight: "bold",
  },
  scrollViewContainer: {
    backgroundColor: primaryColor,
    height: "100%",
  },
  cardContainer: {
    backgroundColor: primaryColor,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 30,
    marginTop: 30,
    height: 300,
    paddingLeft: wrapperMargin,
  },
});

export default ProductCardList;
