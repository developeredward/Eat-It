import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import FeaturedStoreCard from "./FeaturedStoreCard";

import { wrapperMargin, headerFontSize } from "@/constants/Default";

interface FeaturedStoreListProps {
  data: { id: Number; [key: string]: any }[];
}

const FeaturedStoreList: React.FC<FeaturedStoreListProps> = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Featured Stores</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.storeList}
      >
        {data.map((item: any) => (
          <FeaturedStoreCard item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingLeft: wrapperMargin,
    paddingRight: wrapperMargin,
    height: 400,
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
