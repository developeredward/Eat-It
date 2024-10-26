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
          <FeaturedStoreCard key={item.id} item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    height: 350,
  },
  title: {
    paddingLeft: wrapperMargin,
    paddingRight: wrapperMargin,
    fontSize: headerFontSize,
    fontWeight: "bold",
  },
  storeList: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    marginTop: 20,
    paddingLeft: wrapperMargin,
  },
});

export default FeaturedStoreList;
