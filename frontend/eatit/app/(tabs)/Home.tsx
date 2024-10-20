import Featured from "@/components/Card/Featured";
import ProductCardList from "@/components/Card/ProductCardList";
import Search from "@/components/Home/Search";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const { primaryColor, secondaryColor } = require("@/constants/Colors");
const { wrapperMargin, headerFontSize } = require("@/constants/Default");

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
    height: "100%",
  },
  cardContainer: {
    backgroundColor: primaryColor,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 30,
    marginTop: 30,
    height: 300,
    paddingLeft: wrapperMargin,
  },
});
