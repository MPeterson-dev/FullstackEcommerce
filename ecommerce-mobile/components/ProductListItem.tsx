import { Text } from "react-native";

// @ts-ignore
export default function ProductListItem({ product }) {
  return <Text style={{ fontSize: 30 }}>{product.name}</Text>;
}
