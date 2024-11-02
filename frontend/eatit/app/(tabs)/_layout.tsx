import React from "react";
import { Ionicons, MaterialIcons, Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { Tabs } from "expo-router";
import Header from "@/components/Header/Header";
import HeaderLeft from "@/components/Header/HeaderLeft";

const { altColor, secondaryColor } = require("@/constants/Colors");
const { iconSize, wrapperMargin } = require("@/constants/Default");

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: altColor,
        tabBarInactiveTintColor: secondaryColor,
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          title: "",
          headerBackground: () => <Header />,
          tabBarIcon: ({ color }) => (
            <Entypo
              style={{ marginRight: wrapperMargin + 40 }}
              name="home"
              size={30}
              color={color}
              fill={color}
            />
          ),

          headerRight: () => (
            <TouchableOpacity>
              <Ionicons
                name="notifications-outline"
                style={{ marginRight: wrapperMargin }}
                size={iconSize}
                color={secondaryColor}
              />
            </TouchableOpacity>
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
            <Ionicons
              style={{ marginLeft: wrapperMargin + 40 }}
              name="cart"
              size={iconSize}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
