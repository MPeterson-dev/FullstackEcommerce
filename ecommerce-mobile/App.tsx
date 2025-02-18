import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "./global.css";
import { GluestackUIProvider } from "@/ui/gluestack-ui-provider";

export default function App() {
  return (
    <GluestackUIProvider>
      <View style={styles.container}>
        <Text>Hello Matthias</Text>
        <StatusBar style="auto" />
      </View>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
