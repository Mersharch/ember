import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useLayoutEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import "react-native-gesture-handler";
import { Pressable, Text } from "react-native";
import { getScreenPercent } from "../utils/responsiveness";
import { Icon } from "@rneui/themed";
import Animated from "react-native-reanimated";
import Splash from "@components/Splash";

export default function Layout() {
  const [fontsLoaded, fontError] = useFonts({
    gilroy: require("../assets/fonts/Gilroy-Regular.ttf"),
    gilroyBold: require("../assets/fonts/Gilroy-Bold.ttf"),
    gilroyLight: require("../assets/fonts/Gilroy-Light.ttf"),
    gilroyHeavy: require("../assets/fonts/Gilroy-Heavy.ttf"),
    gilroyMedium: require("../assets/fonts/Gilroy-Medium.ttf"),
  });

  const [appReady, setAppReady] = useState(false);
  const [splashAnimationFinished, setSplashAnimationFinished] = useState(false);

  useLayoutEffect(() => {
    if (fontsLoaded || fontError) {
      setAppReady(true);
    }
  }, [fontsLoaded, fontError]);

  if (!appReady || !splashAnimationFinished) {
    return <Splash callback={() => setSplashAnimationFinished(true)} />;
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
