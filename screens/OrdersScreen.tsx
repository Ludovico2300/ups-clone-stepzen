import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn";
import { useOrders } from "../hooks/useOrders";

export default function OrdersScreen() {
  const { orders, loading, error } = useOrders();
  const tw = useTailwind();

  return (
    <SafeAreaView>
      <Text style={tw("text-red-500")}>There are {orders?.length} Orders!</Text>
    </SafeAreaView>
  );
}
