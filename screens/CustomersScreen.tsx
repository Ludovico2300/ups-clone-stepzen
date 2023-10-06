import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabStackParamList } from "../navigatore/TabNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigatore/RootNavigator";

export type CustomersScreenNvigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Customers">,
  NativeStackNavigationProp<RootStackParamList>
>;

export default function CustomersScreen() {
  const tw = useTailwind();
  const navigation = useNavigation();

  return (
    <ScrollView>
      <Text style={tw("text-red-500")}>CustomersScreen</Text>
    </ScrollView>
  );
}
