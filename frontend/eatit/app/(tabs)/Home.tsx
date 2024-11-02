import { useEffect, useState } from "react";
import Featured from "@/components/Card/Featured";
import ProductCardList from "@/components/Card/ProductCardList";
import Search from "@/components/Home/Search";
import FeaturedStoreList from "@/components/Restaurant/FeaturedStoreList";
import RestaurantList from "@/components/Restaurant/RestaurantList";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const { primaryColor, secondaryColor } = require("@/constants/Colors");
const { wrapperMargin, headerFontSize } = require("@/constants/Default");
import { getData } from "@/hooks/useFetch";

export default function Home() {
  const url = "http://192.168.8.127:3000/api/restaurants";
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
      <Search />
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        showsVerticalScrollIndicator={false}
      >
        <Featured />
        <ProductCardList />
        <RestaurantList data={data} />
        <FeaturedStoreList data={data} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: primaryColor,
  },
  scrollViewContainer: {
    backgroundColor: primaryColor,
  },
});
