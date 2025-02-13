import { View, Text, FlatList } from "react-native";
import products from "../assets/products.json";
import ProductListItem from "../components/ProductListItem";

export default function HomeScreen() {
  return (
    <FlatList
      data={products} // The list of items to be displayed, coming from the 'products' array (see import)
      renderItem={(
        { item } // Function to render each item in the list
      ) => <ProductListItem product={item} />}
    />
  );
}
