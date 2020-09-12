interface OAuthInfo {
  provider: string,
  scope: string,
}

interface AuthInfo {
  type: string,
  oAuth2Info: OAuthInfo
}

interface Injections {
  type: string,
  key: string,
  interpolationKey?: string,
  label: string,
  description: string
}

interface Headers {
  'Content-Type': string,
  'developer-token': string,
  'login-customer-id': string 
}

interface Connection {
  type: string,
  baseUrl: string,
  headers: Headers,
  injections: Injections[],
  authInfo: AuthInfo
}

export interface SourceData {
  id: Number,
  uuid: string,
  name: string,
  connectionInfo: Connection
}

