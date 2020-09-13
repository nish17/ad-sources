import { DataSourceDto, ConnectionInfoType, InjectionType, AuthType, OauthProvider } from './types';
const sheetData: DataSourceDto = {
    "id": 27,
    "uuid": "d1c3c51b-0999-4af1-a980-e1e12001dde8",
    "name": "Google Sheets",
    "connectionInfo": {
        "type": ConnectionInfoType.RestApi,
        "baseUrl": "https://googleads.googleapis.com/v5/customers/CUSTOMER_ID/",
        "headers": {
            "Content-Type": "application/json",
            "developer-token": "cm9GX5YXnzR2yBZ5u11sxw",
            "login-customer-id": "CUSTOMER_ID"
        },
        "params": {
            "alt": "json"
        },
        "injections": [
            {
                "type": InjectionType.INTERPOLATE,
                "key": "baseURL",
                "interpolationKey": "CUSTOMER_ID",
                "label": "Customer ID",
                "description": "To add a Google sheets data source here, log into your Google sheets account on a new window. You will find your Customer ID on the top right (next to your profile). Copy this Customer ID, paste it below and hit Save."
            },
            {
                "type": InjectionType.SET,
                "key": "headers.login-customer-id",
                "label": "Customer ID",
                "description": "To add a Google sheets data source here, log into your Google sheets account on a new window. You will find your Customer ID on the top right (next to your profile). Copy this Customer ID, paste it below and hit Save."
            }
        ],
        "authInfo": {
            "type": AuthType.OAuth2,
            "oAuth2Info": {
                "provider": OauthProvider.Google,
                "scope": "https://www.googleapis.com/auth/adwords"
            }
        }
    }
};

export default sheetData;