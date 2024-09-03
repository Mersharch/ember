import { View, Text, Image, ScrollView, FlatList } from "react-native";
import React from "react";
import { Link } from "expo-router";
import {
  getScreenHeight,
  getScreenPercent,
  getScreenWidth,
} from "../../../utils/responsiveness";
import ProductCard from "../../../components/ProductCard";
import LoadingProductCard from "../../../components/LoadingProductCard";
import { CategoryProps, Product } from "../../../types";
import { Icon } from "@rneui/themed";
import { HomeCats } from "../../../data";

const Category = ({ category, description, products }: CategoryProps) => {
  return (
    <View className="flex space-y-3">
      <View className="flex space-y-2">
        <Link
          href={{
            pathname: `/products`,
            params: { category },
          }}
          className="flex flex-row space-x-1"
        >
          <Text className="font-gilroy-bold text-xl">{category}</Text>
          <Icon
            name="chevron-forward-outline"
            type="ionicon"
            size={getScreenPercent(20)}
          />
        </Link>
        <Text className="font-gilroy-medium text-sm">{description}</Text>
      </View>
      <FlatList
        data={products}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View className="w-5" />}
        horizontal
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            horizontal={category.toLowerCase() === "featured"}
          />
        )}
        keyExtractor={(item) => JSON.stringify(item.id)}
      />
    </View>
  );
};

const Home = () => {
  return (
    <ScrollView
      className="flex-1 bg-background px-2 pt-5 "
      showsVerticalScrollIndicator={false}
    >
        <Text className="font-gilroy-bold text-2xl text-center text-primary mb-5">
          Shop Ember
        </Text>
      <View className="mb-40">
        <FlatList
          data={HomeCats}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View className="h-10" />}
          renderItem={({ item }) => (
            <Category
              category={item.category}
              description={item.description}
              products={item.products}
            />
          )}
          keyExtractor={(item) => item.category}
        />
      </View>
    </ScrollView>
  );
};

export default Home;
