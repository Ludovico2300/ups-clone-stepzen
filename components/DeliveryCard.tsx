import { View, Text } from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn";
import { Card, Icon } from "@rneui/themed";

type Props = {
  customerOrder: Order;
};

export default function DeliveryCard({ customerOrder }: Props) {
  const tw = useTailwind();

  return (
    <Card
      containerStyle={[
        tw("rounded-lg my-2"),
        {
          backgroundColor: "#59C1CC",
          padding: 0,
          paddingTop: 16,
          shadowColor: "black",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
        },
      ]}
    >
      <View>
        <Icon name="box" type="entypo" size={50} color={"white"} />
        <View>
          <Text
            style={tw("text-xs text-center uppercase font-bold text-white")}
          >
            {customerOrder.carrier} - {customerOrder.trackingId}
          </Text>
          <Text style={tw("text-lg text-center font-bold text-white")}>
            Expexted Delivery:
            {new Date(customerOrder.createdAt).toLocaleDateString()}
          </Text>
        </View>

        <Card.Divider color="white" />

        <View style={tw("mx-auto py-2")}>
          <Text style={tw("text-base text-center text-white font-bold")}>
            Address
          </Text>
          <Text style={tw("text-sm text-center text-white")}>
            {customerOrder.Address}
          </Text>
          <Text style={tw("text-sm text-center text-white italic")}>
            Shipping Cost: €{customerOrder.shippingCost}
          </Text>
        </View>
      </View>
      <Card.Divider color="white" />
      <View style={tw("p-5")}>
        {customerOrder.trackingItems.items.map((item: Items) => (
          <View
            style={tw("flex-row justify-between items-center")}
            key={item.item_id}
          >
            <Text style={tw("text-sm italic text-white")}>{item.name}</Text>
            <Text style={tw("text-xl text-white")}>x {item.quantity}</Text>
          </View>
        ))}
      </View>
    </Card>
  );
}
