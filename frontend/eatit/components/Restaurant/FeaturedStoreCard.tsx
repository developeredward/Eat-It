import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import React from "react";

interface FeaturedStoreCardProps {
  item: { [key: string]: any };
}

const FeaturedStoreCard: React.FC<FeaturedStoreCardProps> = ({ item }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.imagePlacholder}>
        <Image
          style={styles.image}
          width={100}
          height={200}
          source={{
            uri: "https://www.transparentpng.com/thumb/food/yUN9iB-food-burger-clipart-transparent.png",
          }}
        />
      </View>
      <View style={styles.info}>
        <View style={styles.infoText}>
          <Text style={styles.heading}>Burger Meal</Text>
          <Text style={styles.price}>$10</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    width: 300,
    height: 200,
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
    paddingLeft: 10,
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
    fontSize: 16,
    fontWeight: "600",
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    top: 20,
  },

  imagePlacholder: {
    // backgroundColor: "red",
  },
  image: {
    objectFit: "contain",
  },
});

export default FeaturedStoreCard;
