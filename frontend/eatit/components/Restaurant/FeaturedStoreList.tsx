import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import FeaturedStoreCard from "./FeaturedStoreCard";

import { wrapperMargin, headerFontSize } from "@/constants/Default";

import { getData } from "@/hooks/useFetch";

const FeaturedStoreList = () => {
  const url = "http://localhost:3000/api/restaurants";
  const [data, setData] = useState([]);

  useEffect(() => {
    getData(url, {
      method: "GET",
      header: {
        "Content-Type": "application/json",
      },
    })
      .then((response: any) => {
        setData(response.restaurants);
      })
      .catch((error: any) => {
        console.error("Error:", error);
      });
    console.log(data);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Featured Stores</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.storeList}
      >
        {data.map((item: any) => (
          <FeaturedStoreCard key={item._id} item={item} />
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
