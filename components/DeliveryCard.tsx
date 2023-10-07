import { View, Text } from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn";
import { Card, Icon } from "@rneui/themed";
import MapView, { Marker } from "react-native-maps";

type Props = {
  order: Order;
  fullWidth?: boolean;
};

export default function DeliveryCard({ order, fullWidth }: Props) {
  const tw = useTailwind();

  return (
    <Card
      containerStyle={[
        tw(`${fullWidth ? "rounded-none m-0" : "rounded-lg"} my-2`),
        {
          backgroundColor: fullWidth ? "#EB6A7C" : "#59C1CC",
          padding: 0,
          paddingTop: 16,
          shadowColor: "black",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
        },
      ]}
    >
      <View style={fullWidth && { height: "100%" }}>
        <Icon name="box" type="entypo" size={50} color={"white"} />
        <View style={tw("items-start p-5 -mt-3")}>
          <View style={tw("mx-auto")}>
            <Text
              style={tw("text-xs text-center uppercase font-bold text-white")}
            >
              {order.carrier} - {order.trackingId}
            </Text>
            <Text style={tw("text-lg text-center font-bold text-white")}>
              Expexted Delivery:
              {new Date(order.createdAt).toLocaleDateString()}
            </Text>

            <Card.Divider color="white" />
          </View>

          <View style={tw("mx-auto pb-5")}>
            <Text style={tw("text-base text-center text-white font-bold")}>
              Address
            </Text>
            <Text style={tw("text-sm text-center text-white")}>
              {order.Address}
            </Text>
            <Text style={tw("text-sm text-center text-white italic")}>
              Shipping Cost: €{order.shippingCost}
            </Text>
          </View>
        </View>

        <Card.Divider color="white" />
        <View style={tw("p-5")}>
          {order.trackingItems.items.map((item: Items) => (
            <View
              style={tw("flex-row justify-between items-center")}
              key={item.item_id}
            >
              <Text style={tw("text-sm italic text-white")}>{item.name}</Text>
              <Text style={tw("text-xl text-white")}>x {item.quantity}</Text>
            </View>
          ))}
        </View>
        <MapView
          initialRegion={{
            latitude: order.Lat,
            longitude: order.Lng,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          style={[tw("w-full"), { flexGrow: 1 }, !fullWidth && { height: 200 }]}
        >
          {order.Lat && order.Lat && (
            <Marker
              coordinate={{
                latitude: order.Lat,
                longitude: order.Lng,
              }}
              title="Delivery Location"
              description={order.Address}
              identifier="destination"
            />
          )}
        </MapView>
      </View>
    </Card>
  );
}
