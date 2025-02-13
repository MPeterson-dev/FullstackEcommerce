import { Text } from "react-native";

export default function ProductListItem({ product }) {
  return <Text style={{ fontSize: 30 }}>{product.name}</Text>; // Displays the 'name' property of each product in large text
}
