import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import { primaryColor, secondaryColor, altColor } from "@/constants/Colors";
import { wrapperMargin, iconSize } from "@/constants/Default";
import { Ionicons } from "@expo/vector-icons";

const Welcome = () => {
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [registerModalVisible, setRegisterModalVisible] = useState(false);

  const openLoginModal = () => {
    setLoginModalVisible(true);
  };
  const openRegisterModal = () => {
    setRegisterModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={[styles.circles, styles.circle1]}></View>
        <View style={[styles.circles, styles.circle2]}></View>
        <View style={[styles.circles, styles.circle3]}></View>
        <Image
          style={[styles.locationDesign, styles.location1]}
          source={require("@/assets/images/blue.png")}
        />
        <Image
          style={[styles.locationDesign, styles.location2]}
          source={require("@/assets/images/gray.png")}
        />
        <Image
          style={[styles.locationDesign, styles.location3]}
          source={require("@/assets/images/orange.png")}
        />
        <Image
          source={require("@/assets/images/welcome.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.header}> Welcome to Eat It </Text>
        <Text style={styles.desc}>
          Order your favorite food from your favorite restaurant
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => openRegisterModal()}
        >
          <Text style={{ color: "#ffffff", fontSize: 15, fontWeight: "bold" }}>
            Sign Up
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btn, { top: 15, backgroundColor: secondaryColor }]}
          onPress={() => openLoginModal()}
        >
          <Text style={{ color: "#ffffff", fontSize: 15, fontWeight: "bold" }}>
            Login
          </Text>
        </TouchableOpacity>

        {loginModalVisible && (
          <Modal
            transparent={true}
            animationType="slide"
            visible={loginModalVisible}
            onRequestClose={() => setLoginModalVisible(false)}
          >
            <View style={styles.modal}>
              <Text>Login</Text>
              <TouchableOpacity
                style={styles.close}
                onPress={() => setLoginModalVisible(false)}
              >
                <Ionicons name="close" size={iconSize} />
              </TouchableOpacity>
            </View>
          </Modal>
        )}
        {registerModalVisible && (
          <Modal
            transparent={true}
            animationType="slide"
            visible={registerModalVisible}
            onRequestClose={() => setRegisterModalVisible(false)}
          >
            <View style={styles.modal}>
              <Text>Register</Text>
              <TouchableOpacity
                style={styles.close}
                onPress={() => setRegisterModalVisible(false)}
              >
                <Ionicons color={altColor} name="close" size={iconSize} />
              </TouchableOpacity>
            </View>
          </Modal>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: primaryColor,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 400,
    marginTop: -50,
  },
  textContainer: {
    marginTop: 80,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    color: secondaryColor,
  },
  desc: {
    fontSize: 14,
    color: secondaryColor,
  },
  image: {
    width: 350,
    height: 350,
    objectFit: "contain",
  },
  circles: {
    position: "absolute",
    top: 0,
    borderRadius: 1000,
    borderWidth: 1,
    borderColor: secondaryColor,
  },
  circle1: {
    width: 380,
    height: 380,
    top: 12,
    borderColor: secondaryColor,
    opacity: 0.5,
  },
  circle2: {
    width: 420,
    height: 420,
    top: -6,
    opacity: 0.3,
  },
  circle3: {
    width: 480,
    height: 480,
    top: -36,
    opacity: 0.1,
  },
  btnContainer: {
    marginLeft: wrapperMargin,
    marginRight: wrapperMargin,
    top: 100,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    backgroundColor: altColor,
    width: "80%",
    height: 50,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  locationDesign: {
    position: "absolute",
    width: 40,
    height: 40,
    objectFit: "contain",
  },
  location1: {
    top: 100,
    left: 10,
    transform: [{ rotate: "-30deg" }],
  },
  location2: {
    top: 10,
    right: 7,
    transform: [{ rotate: "45deg" }],
  },
  location3: {
    top: 380,
    left: 320,
    transform: [{ rotate: "130deg" }],
  },
  modal: {
    backgroundColor: "#ffffff",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    top: "50%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  close: {
    position: "absolute",
    top: 10,
    right: 20,
  },
});

export default Welcome;
