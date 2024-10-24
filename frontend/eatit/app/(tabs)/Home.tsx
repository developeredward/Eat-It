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

const data = [
  {
    id: 1,
    title: "Burger King",
    price: 10,
    image:
      "https://www.pngplay.com/wp-content/uploads/9/McDonalds-Background-PNG-Image.png",
  },
  {
    id: 2,
    title: "McDonalds",
    price: 20,
    image:
      "https://www.pngplay.com/wp-content/uploads/9/McDonalds-Transparent-Free-PNG.png",
  },
  {
    id: 3,
    title: "KFC",
    price: 15,
    image:
      "https://www.pngplay.com/wp-content/uploads/9/KFC-Logo-PNG-Free-File-Download.png",
  },
  {
    id: 4,
    title: "Starbucks",
    price: 5,
    image:
      "https://www.pngplay.com/wp-content/uploads/8/Starbucks-Coffee-Logo-PNG-Clipart-Background.png",
  },
];

export default function Home() {
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
