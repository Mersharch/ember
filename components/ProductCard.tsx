import { View, Text, Pressable, Image } from "react-native";
import { getScreenHeight, getScreenWidth } from "../utils/responsiveness";
import { Product } from "../types";

interface ProductCard {
    product?: Product;
    showAdd?: boolean;
    horizontal?:boolean
}

const ProductCard = ({ product, horizontal, showAdd }: ProductCard) => {
  return (
    <Pressable className="flex space-y-2">
      <Image
        src={
          "https://plus.unsplash.com/premium_photo-1670076513880-f58e3c377903?q=80&w=1436&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        className="object-cover rounded-xl"
        style={{
          width: getScreenWidth(horizontal ? 300 : 180),
          height: getScreenHeight(200),
        }}
      />
      <Text className="font-bold text-base">Dining Set</Text>
      <Text className="font-bold text-primary">Ghc 1,299</Text>
    </Pressable>
  );
};

export default ProductCard;
