type Customer = {
  email: string;
  name: string;
};

type CustomerList = {
  name: ID;
  value: Customer;
};

type TrackingItem = {
  customer_id: ID;
  customer: Customer;
  items: Item[];
};

type Items = {
  item_id: ID;
  name: string;
  price: number;
  quantity: number;
};

type Order = {
  carrier: string;
  createdAt: number;
  shippingCost: number;
  trackingId: string;
  trackingItems: TrackingItem;
  Lat: number;
  Lng: number;
  Address: string;
  City: string;
};

type OrderResponse = {
  value: Order;
};

type CustomerResponse = {
  value: Customer;
  name: ID;
};
