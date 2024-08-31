import { Tabs } from 'expo-router';
import React from 'react';
import { Icon } from '@rneui/themed';
import { StyleSheet, View, Text } from 'react-native';

export default function TabLayout() {

  // Calculate total quantity of products in the cart
  return (
    <Tabs
      screenOptions={{
              tabBarActiveTintColor: "#E97563",
        tabBarInactiveTintColor: "#64748B",
        headerShown: true,
      }}>
      <Tabs.Screen
        name="(home)"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Icon name={focused ? 'grid' : 'grid-outline'} color={color} type="ionicon" />
          ),
        }}
      />
      {/* <Tabs.Screen
        name="(cart)"
        options={{
          title: 'Cart',
          tabBarIcon: ({ color, focused }) => (
            <Icon name={focused ? 'home' : 'home-outline'} color={color} type="" />
          ),
        }}
      /> */}
    </Tabs>
  );
}


