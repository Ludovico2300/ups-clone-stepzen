import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { OrderScreenNavigationProp } from "../screens/OrdersScreen";
import { Card, Icon } from "@rneui/themed";
import { useTailwind } from "tailwind-rn";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigator/RootNavigator";
import { TabStackParamList } from "../navigator/TabNavigator";

export type OrdersScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Orders">,
  NativeStackNavigationProp<RootStackParamList>
>;

type Props = {
  order: Order;
};

export default function OrderCard({ order }: Props) {
  const navigation = useNavigation<OrdersScreenNavigationProp>();
  const tw = useTailwind();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Order", { order })}>
      <Card containerStyle={tw("px-5 rounded-lg")}>
        <View style={tw("flex-row justify-between items-center")}>
          <View>
            <Icon
              name="truck-delivery"
              color={"#EB6A7C"}
              type="material-community"
            />
            <Text style={{ fontSize: 10 }}>
              {new Date(order.createdAt).toDateString()}
            </Text>
          </View>

          <View>
            <Text style={[tw("text-gray-400"), { fontSize: 10 }]}>
              {order.carrier}-{order.trackingId}
            </Text>
            <Text style={tw("text-gray-500 text-xl")}>
              {order.trackingItems.customer.name}
            </Text>
          </View>

          <View style={tw("flex-row items-center")}>
            <Text style={[tw("text-sm"), { color: "#EB6A7C" }]}>
              {order.trackingItems.items.length} x
            </Text>
            <Icon name="box" type="feather" style={tw("ml-2")} />
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
}
