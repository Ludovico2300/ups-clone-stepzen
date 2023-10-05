import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn";

export default function OrdersScreen() {
  const tw = useTailwind();

  return (
    <SafeAreaView>
      <Text style={tw("text-red-500")}>OrdersScreen</Text>
    </SafeAreaView>
  );
}
