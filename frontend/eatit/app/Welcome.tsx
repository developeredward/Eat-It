import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  StyleSheet,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { Link, useNavigation } from "expo-router";
import { primaryColor, secondaryColor, altColor } from "@/constants/Colors";
import { wrapperMargin, iconSize } from "@/constants/Default";
import {
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";

import { postData } from "@/hooks/useFetch";
import { useAuth } from "@/Context/AuthContext";

const Welcome = () => {
  const navigation = useNavigation<any>();
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [registerModalVisible, setRegisterModalVisible] = useState(false);

  const { login, register, authState } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const openLoginModal = () => {
    setLoginModalVisible(true);
  };
  const openRegisterModal = () => {
    setRegisterModalVisible(true);
  };

  // const handleLogin = () => {
  //   if (!email || !password) {
  //     setErrorMessage("Please fill all required fields");
  //     return;
  //   }

  //   postData(
  //     "http://192.168.8.127:3000/api/auth/login",
  //     {
  //       "Content-Type": "application/json",
  //     },
  //     { email, password }
  //   )
  //     .then((response) => {
  //       console.log(response);
  //       if (response.status === 400) {
  //         setErrorMessage("Invalid email or password");
  //       } else if (response.status === 404) {
  //         setErrorMessage("User not found");
  //       } else if (response.status === 200) {
  //         setEmail("");
  //         setPassword("");
  //         setLoginModalVisible(false);
  //       } else {
  //         setErrorMessage("An error occured");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //       setErrorMessage(error.msg);
  //     });
  // };

  const handleLogin = async () => {
    try {
      const response = await login!(email, password);
      console.log(response);
      if (response.status === 400) {
        setErrorMessage("Invalid email or password");
      } else if (response.status === 404) {
        setErrorMessage("User not found");
      } else if (response.status === 200) {
        setEmail("");
        setPassword("");
        setLoginModalVisible(false);

        // Redirect to home page
        navigation.navigate("(tabs)");
        console.log(authState);
      } else {
        setErrorMessage("An error occured");
      }
    } catch (error) {
      console.error("Error:", error);
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("An unknown error occurred");
      }
    }
  };

  // const handleRegister = () => {
  //   if (!email || !password || !name || !phoneNumber) {
  //     setErrorMessage("Please fill all required fields");
  //     return;
  //   }

  //   postData(
  //     "http://192.168.8.127:3000/api/auth/register",
  //     {
  //       "Content-Type": "application/json",
  //     },
  //     { email: email, password: password, name: name, phone: phoneNumber }
  //   )
  //     .then((response) => {
  //       console.log(response);
  //       if (response.status === 400) {
  //         setErrorMessage("User already exists");
  //       } else if (response.status === 200) {
  //         setEmail("");
  //         setPassword("");
  //         setName("");
  //         setPhoneNumber("");
  //         setRegisterModalVisible(false);
  //       } else {
  //         setErrorMessage("An error occured");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //       setErrorMessage(error.msg);
  //     });
  // };

  const handleRegister = async () => {
    try {
      const response = await register!(name, email, phoneNumber, password);
      console.log(response);
      if (response.status === 400) {
        setErrorMessage("User already exists");
      } else if (response.status === 200) {
        setEmail("");
        setPassword("");
        setName("");
        setPhoneNumber("");
        setRegisterModalVisible(false);
      } else {
        setErrorMessage("An error occured");
      }
    } catch (error) {
      console.error("Error:", error);
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("An unknown error occurred");
      }
    }
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
              <TouchableOpacity
                style={styles.close}
                onPress={() => setLoginModalVisible(false)}
              >
                <Ionicons color={altColor} name="close" size={iconSize} />
              </TouchableOpacity>
              <View style={styles.title}>
                <Text style={styles.header}>Welcome back!</Text>
                <Text style={styles.desc}>Login to continue</Text>
                {errorMessage && (
                  <Text style={styles.error}>{errorMessage}</Text>
                )}
              </View>
              <View style={styles.inputContainer}>
                <View style={{ gap: 10 }}>
                  <Text style={styles.btnTitle}>
                    Email <Text>*</Text>{" "}
                  </Text>

                  <View style={styles.inputField}>
                    <Ionicons
                      name="mail-outline"
                      color={secondaryColor}
                      size={iconSize - 10}
                    />
                    <TextInput
                      value={email}
                      autoCapitalize="none"
                      onChangeText={(text) => setEmail(text)}
                      placeholderTextColor={secondaryColor}
                      autoFocus={true}
                      style={styles.input}
                      placeholder="Enter your email..."
                    />
                  </View>
                </View>
                <View style={{ gap: 10 }}>
                  <Text style={styles.btnTitle}>
                    Password <Text>*</Text>{" "}
                  </Text>
                  <View style={styles.inputField}>
                    <Ionicons
                      name="lock-closed-outline"
                      color={secondaryColor}
                      size={iconSize - 10}
                    />
                    <TextInput
                      autoCapitalize="none"
                      value={password}
                      onChangeText={(text) => setPassword(text)}
                      placeholderTextColor={secondaryColor}
                      style={styles.input}
                      placeholder="Enter your password..."
                    />
                  </View>
                </View>

                <View style={styles.altActions}>
                  <TouchableOpacity style={styles.checkboxContainer}>
                    <MaterialCommunityIcons
                      size={iconSize - 10}
                      name="checkbox-blank-outline"
                    />
                    {/* <MaterialCommunityIcons name="checkbox-outline" /> */}

                    <Text>Remember me</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <Text style={{ color: altColor, textAlign: "center" }}>
                      Forgot Password?
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={[
                  styles.btnContainer,
                  { top: 50, marginLeft: 0, marginRight: 0 },
                ]}
              >
                {/* <Link
                  href={"/(tabs)/Home"}
                  style={[styles.btn, { backgroundColor: secondaryColor }]}
                  asChild
                > */}
                <TouchableOpacity
                  onPress={() => handleLogin()}
                  style={[styles.btn, { backgroundColor: secondaryColor }]}
                >
                  <Text style={{ color: "#ffffff", fontWeight: "bold" }}>
                    Login
                  </Text>
                </TouchableOpacity>
                {/* </Link> */}
                <View
                  style={{
                    flexDirection: "row",
                    gap: 5,
                    top: 20,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={[
                      styles.desc,
                      {
                        color: secondaryColor,
                        textAlign: "center",
                        alignItems: "center",
                        justifyContent: "center",
                      },
                    ]}
                  >
                    Don't have ant account?{" "}
                  </Text>
                  <TouchableOpacity
                    style={{
                      alignItems: "center",
                      borderBottomWidth: 1,
                      borderBottomColor: "#00A2E3",
                    }}
                    onPress={() => {
                      setRegisterModalVisible(true);
                      setLoginModalVisible(false);
                    }}
                  >
                    <Text
                      style={[
                        styles.desc,
                        {
                          color: "#00A2E3",
                          textAlign: "center",
                          alignItems: "center",
                          justifyContent: "center",
                        },
                      ]}
                    >
                      Sign Up
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
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
              <TouchableOpacity
                style={styles.close}
                onPress={() => setRegisterModalVisible(false)}
              >
                <Ionicons color={altColor} name="close" size={iconSize} />
              </TouchableOpacity>
              <View style={styles.title}>
                <Text style={styles.header}>Create an Account</Text>
                <Text style={styles.desc}>Complete the form to register</Text>
                {errorMessage && (
                  <Text style={styles.error}>{errorMessage}</Text>
                )}
              </View>
              <View style={styles.inputContainer}>
                <View style={{ gap: 10 }}>
                  <Text style={styles.btnTitle}>
                    Name <Text>*</Text>{" "}
                  </Text>
                  <View style={styles.inputField}>
                    <AntDesign
                      name="user"
                      color={secondaryColor}
                      size={iconSize - 10}
                    />
                    <TextInput
                      value={name}
                      placeholderTextColor={secondaryColor}
                      onChangeText={(text) => setName(text)}
                      style={styles.input}
                      placeholder="Enter your name..."
                    />
                  </View>
                </View>
                <View style={{ gap: 10 }}>
                  <Text style={styles.btnTitle}>
                    Email <Text>*</Text>{" "}
                  </Text>
                  <View style={styles.inputField}>
                    <Ionicons
                      name="mail-outline"
                      color={secondaryColor}
                      size={iconSize - 10}
                    />
                    <TextInput
                      placeholderTextColor={secondaryColor}
                      textContentType="emailAddress"
                      inputMode="email"
                      autoCapitalize="none"
                      value={email}
                      onChangeText={(text) => setEmail(text)}
                      style={styles.input}
                      placeholder="Enter your email..."
                    />
                  </View>
                </View>
                <View style={{ gap: 10 }}>
                  <Text style={styles.btnTitle}>
                    Phone Number <Text>*</Text>{" "}
                  </Text>
                  <View style={styles.inputField}>
                    <AntDesign
                      name="phone"
                      color={secondaryColor}
                      size={iconSize - 10}
                    />
                    <TextInput
                      placeholderTextColor={secondaryColor}
                      textContentType="telephoneNumber"
                      inputMode="tel"
                      value={phoneNumber}
                      onChangeText={(text) => setPhoneNumber(text)}
                      style={styles.input}
                      placeholder="Enter your phone number..."
                    />
                  </View>
                </View>
                <View style={{ gap: 10 }}>
                  <Text style={styles.btnTitle}>
                    Password <Text>*</Text>{" "}
                  </Text>
                  <View style={styles.inputField}>
                    <Ionicons
                      name="lock-closed-outline"
                      color={secondaryColor}
                      size={iconSize - 10}
                    />
                    <TextInput
                      placeholderTextColor={secondaryColor}
                      secureTextEntry={true}
                      textContentType="password"
                      value={password}
                      onChangeText={(text) => setPassword(text)}
                      autoCapitalize="none"
                      style={styles.input}
                      placeholder="Enter your password..."
                    />
                  </View>
                </View>
              </View>
              <View
                style={[
                  styles.btnContainer,
                  { top: 0, marginTop: 20, marginLeft: 0, marginRight: 0 },
                ]}
              >
                <TouchableOpacity
                  onPress={() => handleRegister()}
                  style={[styles.btn, { backgroundColor: secondaryColor }]}
                >
                  <Text style={{ color: "#ffffff", fontWeight: "bold" }}>
                    Sign Up
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: "row",
                    gap: 5,
                    marginTop: 20,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={[
                      styles.desc,
                      {
                        color: secondaryColor,
                        textAlign: "center",
                        alignItems: "center",
                        justifyContent: "center",
                      },
                    ]}
                  >
                    Already have an account?{" "}
                  </Text>

                  <TouchableOpacity
                    style={{
                      alignItems: "center",
                      borderBottomWidth: 1,
                      borderBottomColor: "#00A2E3",
                    }}
                    onPress={() => {
                      setRegisterModalVisible(false);
                      setLoginModalVisible(true);
                    }}
                  >
                    <Text
                      style={[
                        styles.desc,
                        {
                          color: "#00A2E3",
                          textAlign: "center",
                          alignItems: "center",
                          justifyContent: "center",
                        },
                      ]}
                    >
                      Login
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
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
  error: {
    color: "red",
    // textAlign: "center",
    marginTop: 10,
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
    top: 80,
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
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    height: "80%",
    marginTop: "auto",
  },
  close: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  title: {
    marginTop: 60,
    marginLeft: wrapperMargin,
    gap: 10,
  },
  inputContainer: {
    marginTop: 30,
    marginLeft: wrapperMargin,
    marginRight: wrapperMargin,
    gap: 30,
  },
  inputField: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: primaryColor,
    gap: 10,
    borderRadius: 10,
    height: 50,
    width: "100%",
  },
  input: {
    width: "100%",
  },
  altActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  checkboxContainer: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  btnTitle: {
    color: secondaryColor,
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default Welcome;
