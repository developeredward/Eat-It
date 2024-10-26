import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { EvilIcons } from "@expo/vector-icons";
import React from "react";

import { primaryColor, secondaryColor } from "@/constants/Colors";

interface FeaturedStoreCardProps {
  item: { [key: string]: any };
}

const FeaturedStoreCard: React.FC<FeaturedStoreCardProps> = ({ item }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <ImageBackground
        source={{
          uri: "https://www.fastfoodclub.com/wp-content/uploads/2024/09/Get-Ready-for-New-Flavors-McDonalds-Menu-Updates-You-Cant-Miss.png",
        }}
        resizeMode="cover"
        imageStyle={styles.info}
        style={styles.info}
      >
        <View style={styles.category}>
          <Text style={{ color: "#ffffff" }}>🍔 Fast food</Text>
        </View>
        <LinearGradient
          colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.54)", "rgba(0,0,0,1)"]}
          style={styles.infoText}
        >
          <View>
            <Text style={styles.heading}>McDonald's</Text>
            <Text style={styles.dist}>24 Min | Pick up | Delivery</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.btn}>
              <EvilIcons name="heart" size={24} color="#ffffff" />
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    width: 300,
    height: 200,
    borderRadius: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.02,
  },
  info: {
    height: "100%",
    width: "100%",
    borderRadius: 20,
  },
  category: {
    position: "absolute",
    top: 2,
    margin: 10,
    height: 30,
    minWidth: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
  },

  infoText: {
    flexDirection: "row",
    color: "#ffffff",
    height: 120,
    width: "100%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    position: "absolute",
    bottom: 0,
    gap: 10,
    padding: 20,
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  heading: {
    fontSize: 22,
    color: "#ffffff",
    fontWeight: "bold",
  },

  btn: {
    backgroundColor: secondaryColor,

    padding: 10,
    borderRadius: 10,
  },

  dist: {
    fontSize: 12,
    color: "#ffffff",
    top: 5,
  },
});

export default FeaturedStoreCard;
