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
        src={product?.imageUrl}
        className="object-cover rounded-xl"
        style={{
          width: getScreenWidth(horizontal ? 320 : 180),
          height: getScreenHeight(200),
        }}
      />
      <Text className="font-bold text-base">{product?.name}</Text>
      <Text className="font-bold text-primary">Ghc {product?.price}</Text>
    </Pressable>
  );
};

export default ProductCard;
