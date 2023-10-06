import { gql } from "@apollo/client";

export const GET_CUSTOMERS = gql`
  query GetCustomers {
    getCustomers {
      value {
        email
        name
      }
      name
    }
  }
`;
export const GET_ORDERS = gql`
  query GetOrders {
    getOrders {
      name
      value {
        Address
        City
        Lat
        carrier
        Lng
        createdAt
        shippingCost
        trackingId
        trackingItems {
          customer_id
          customer {
            name
            email
          }
          items {
            name
            item_id
            price
            quantity
          }
        }
      }
    }
  }
`;
