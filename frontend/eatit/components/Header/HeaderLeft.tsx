import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { wrapperMargin } from "@/constants/Default";

const HeaderLeft = () => {
  return (
    <View style={styles.headInfoContainer}>
      <Image
        height={50}
        width={50}
        style={styles.headInfoImage}
        source={{
          uri: "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
        }}
      />
      <View style={styles.headInfoTextContent}>
        <Text style={styles.headerInfoText}>Hi, John Doe</Text>
        <Text style={styles.headerInfoPara}>What can we get you?</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: wrapperMargin,
    height: 50,
    gap: 10,
    width: "100%",
  },
  headInfoImage: {
    borderRadius: 100,
  },
  headerInfoText: {
    fontSize: 12,
    color: "#656565",
  },
  headerInfoPara: {
    fontSize: 15,
  },
  headInfoTextContent: {
    justifyContent: "center",
    gap: 6,
  },
});

export default HeaderLeft;
