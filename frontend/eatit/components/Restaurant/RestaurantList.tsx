import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Store from "./Store";

import { primaryColor } from "@/constants/Colors";
import { wrapperMargin, headerFontSize } from "@/constants/Default";

interface RestaurantListProps {
  data: { id: Number; [key: string]: any }[];
}

const RestaurantList: React.FC<RestaurantListProps> = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headTitle}>Recommended For You</Text>
      <View style={styles.cards}>
        {data.map((item: any) => (
          <Store key={item._id} item={item} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: wrapperMargin,
    marginRight: wrapperMargin,
    marginTop: 30,
    height: 400,
  },
  headTitle: {
    fontSize: headerFontSize,
    fontWeight: "bold",
    textAlign: "justify",
    paddingTop: 20,
  },
  cards: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginTop: 20,
  },
});

export default RestaurantList;
