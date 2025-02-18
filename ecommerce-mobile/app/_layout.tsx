import { Stack } from "expo-router";
import "./global.css";
import { GluestackUIProvider } from "@/ui/gluestack-ui-provider";

//Rendered everywhere in the application. "Global"
export default function RootLayout() {
  return (
    <GluestackUIProvider>
      <Stack />
    </GluestackUIProvider>
  );
}
