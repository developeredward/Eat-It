import { View, Text, StyleSheet } from "react-native";
import React from "react";
import FeaturedStoreCard from "./FeaturedStoreCard";

import { wrapperMargin, headerFontSize } from "@/constants/Default";

const FeaturedStoreList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Featured Stores</Text>
      <View style={styles.storeList}>
        <FeaturedStoreCard />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingLeft: wrapperMargin,
    paddingRight: wrapperMargin,
    height: 200,
  },
  title: {
    fontSize: headerFontSize,
    fontWeight: "bold",
  },
  storeList: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default FeaturedStoreList;
