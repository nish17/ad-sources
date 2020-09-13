import { SourceData } from "./source-data-model";

const sheetData: SourceData = {
  "id": 27,
  "uuid": "d1c3c51b-0999-4af1-a980-e1e12001dde8",
  "name": "Google Sheets",
  "connectionInfo": {
      "type": "REST_API",
      "baseUrl": "https://googleads.googleapis.com/v5/customers/CUSTOMER_ID/",
      "headers": {
          "Content-Type": "application/json",
          "developer-token": "cm9GX5YXnzR2yBZ5u11sxw",
          "login-customer-id": "CUSTOMER_ID"
      },
      "injections": [
          {
              "type": "INTERPOLATE",
              "key": "baseURL",
              "interpolationKey": "CUSTOMER_ID",
              "label": "Customer ID",
              "description": "To add a Google sheets data source here, log into your Google sheets account on a new window. You will find your Customer ID on the top right (next to your profile). Copy this Customer ID, paste it below and hit Save."
          },
          {
              "type": "SET",
              "key": "headers.login-customer-id",
              "label": "Customer ID",
              "description": "To add a Google sheets data source here, log into your Google sheets account on a new window. You will find your Customer ID on the top right (next to your profile). Copy this Customer ID, paste it below and hit Save."
          }
      ],
      "authInfo": {
          "type": "OAUTH2",
          "oAuth2Info": {
              "provider": "GOOGLE",
              "scope": "https://www.googleapis.com/auth/adwords"
          }
      }
  }
};

export default sheetData;