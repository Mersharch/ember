import { View, Text } from "react-native";
import React from "react";
import {
  getScreenHeight,
  getScreenPercent,
  getScreenWidth,
} from "../utils/responsiveness";
import { Skeleton } from "moti/skeleton";
import { MotiView } from "moti";

const Colors = require("../constants/Colors");

const Spacer = ({ height = getScreenPercent(10) }) => <MotiView style={{ height }} />

interface Props {
  horizontal?: boolean;
}

const LoadingProductCard = ({ horizontal }: Props) => {
  return (
    <View className="flex space-y-2">
      <Skeleton
        width={getScreenWidth(horizontal ? 300 : 180)}
        height={getScreenHeight(200)}
        colorMode="light"
          />
           <Spacer />
      <Skeleton width={150} height={20} radius={0} colorMode="light" />
      <Spacer />
      <Skeleton width={150} height={20} radius={0} colorMode="light" />
    </View>
  );
};

export default LoadingProductCard;
