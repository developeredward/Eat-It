import Featured from "@/components/Card/Featured";
import Search from "@/components/Home/Search";
import { StyleSheet, View, Text } from "react-native";

const { primaryColor, secondaryColor } = require("@/constants/Colors");

export default function Home() {
  return (
    <View style={styles.container}>
      <Search />
      <Featured />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: primaryColor,
    height: 400,
  },
});
