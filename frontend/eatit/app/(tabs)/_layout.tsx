import React from "react";
import {
  Octicons,
  Ionicons,
  SimpleLineIcons,
  Feather,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";
import { SafeAreaView, View, Text, Image, StyleSheet } from "react-native";
import { Tabs } from "expo-router";
import Header from "@/components/Header/Header";
import HeaderLeft from "@/components/Header/HeaderLeft";

const { secondaryColor } = require("@/constants/Colors");
const { iconSize, wrapperMargin } = require("@/constants/Default");

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarShowLabel: false }}>
      <Tabs.Screen
        name="Home"
        options={{
          title: "",
          headerBackground: () => <Header />,
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={30} color={color} fill={color} />
          ),
          headerRight: () => (
            <Ionicons
              name="notifications-outline"
              style={{ marginRight: wrapperMargin }}
              size={iconSize}
              color={secondaryColor}
            />
          ),
          headerLeft: () => <HeaderLeft />,
        }}
      />
      <Tabs.Screen
        name="Discover"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="explore" size={iconSize} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Cart"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="cart" size={iconSize} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
