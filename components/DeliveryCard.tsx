import { View, Text } from "react-native";
import React from "react";

type Props = {
  customerOrder: Order;
};

export default function DeliveryCard({ customerOrder }: Props) {
  return (
    <View>
      <Text>{customerOrder.trackingId}</Text>
    </View>
  );
}
