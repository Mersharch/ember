import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useLayoutEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";
import "react-native-gesture-handler";
import { Pressable, Text } from "react-native";
import { getScreenPercent } from "../utils/responsiveness";
import { Icon } from "@rneui/themed";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    gilroy: require("../assets/fonts/Gilroy-Regular.ttf"),
    gilroyBold: require("../assets/fonts/Gilroy-Bold.ttf"),
    gilroyLight: require("../assets/fonts/Gilroy-Light.ttf"),
    gilroyHeavy: require("../assets/fonts/Gilroy-Heavy.ttf"),
    gilroyMedium: require("../assets/fonts/Gilroy-Medium.ttf"),
  });

  useLayoutEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerLeft: () => (
          <Pressable>
            <Text className="font-gilroy-bold text-2xl text-primary">
              Ember
            </Text>
          </Pressable>
        ),
        headerRight: () => (
          <Pressable>
            <Icon
              name="notifications-outline"
              type="ionicon"
              size={getScreenPercent(24)}
              className="text-accentForeground"
            />
          </Pressable>
        ),
        headerTitle: "",
      }}
    >
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
