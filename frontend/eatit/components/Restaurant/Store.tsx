import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

import { primaryColor, altColor, secondaryColor } from "@/constants/Colors";

interface StoreProps {
  item: { id: string; [key: string]: any };
}

const Store: React.FC<StoreProps> = ({ item }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image
        style={{ objectFit: "contain" }}
        height={100}
        width={100}
        source={{
          uri: item.imageurl,
        }}
      />
      <Text style={styles.title}>{item.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: "#ffffff",
    marginBottom: 10,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.05,
  },
  title: {
    fontSize: 12,
    textAlign: "center",
    fontWeight: "500",
    top: 2,
  },
});

export default Store;
