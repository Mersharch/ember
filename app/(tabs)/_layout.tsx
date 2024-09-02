import { Tabs } from "expo-router";
import React from "react";
import { Icon } from "@rneui/themed";
import { StyleSheet, View, Text } from "react-native";
import {
  getScreenHeight,
  getScreenPercent,
  getScreenWidth,
} from "../../utils/responsiveness";

export default function TabLayout() {
  // Calculate total quantity of products in the cart
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#E97563",
        tabBarInactiveTintColor: "#64748B",
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          height: getScreenHeight(60),
          backgroundColor: "rgba(233, 117, 99, 0.10)",
          bottom: getScreenPercent(50),
          marginHorizontal: getScreenPercent(70),
          borderRadius: getScreenPercent(40),
          width: getScreenWidth(250),
          paddingBottom: getScreenPercent(2),
        },
        tabBarItemStyle: {
          // paddingVertical: getScreenPercent(10),
          // margin: getScreenPercent(10),
          // borderRadius: getScreenPercent(100),
          // backgroundColor: 'white'
        },
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={focused ? "grid" : "grid-outline"}
              color={color}
              type="ionicon"
              size={getScreenPercent(24)}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(cart)"
        options={{
          title: "Cart",
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={focused ? "bag-handle" : "bag-handle-outline"}
              color={color}
              type="ionicon"
              size={getScreenPercent(24)}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(profile)"
        options={{
          title: "Cart",
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={focused ? "person" : "person-outline"}
              color={color}
              type="ionicon"
              size={getScreenPercent(24)}
            />
          ),
        }}
      />
    </Tabs>
  );
}
