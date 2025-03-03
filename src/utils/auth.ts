import axios, {AxiosRequestConfig} from 'axios';
import camelize from 'camelize';
import querystring from 'query-string';
import {defaultBaseUrl, defaultRealm} from './constants';

export type GrantTypes = 'client_credentials' | 'password';

export interface Credentials {
  username?: string;
  password?: string;
  grantType: GrantTypes;
  clientId: string;
  clientSecret?: string;
  totp?: string;
  offlineToken?: boolean;
  refreshToken?: string;
  scope?: string;
}

export interface Settings {
  realmName?: string;
  baseUrl?: string;
  credentials: Credentials;
  requestConfig?: AxiosRequestConfig;
}

export interface TokenResponse {
  accessToken: string;
  expiresIn: string;
  refreshExpiresIn: number;
  refreshToken: string;
  idToken: string;
  tokenType: string;
  notBeforePolicy: number;
  sessionState: string;
  scope: string;
}

export const getToken = async (settings: Settings): Promise<TokenResponse> => {
  // Construct URL
  const baseUrl = settings.baseUrl || defaultBaseUrl;
  const realmName = settings.realmName || defaultRealm;
  const url = `${baseUrl}/realms/${realmName}/protocol/openid-connect/token`;

  // Prepare credentials for openid-connect token request
  // ref: http://openid.net/specs/openid-connect-core-1_0.html#TokenEndpoint
  const credentials = settings.credentials || ({} as any);
  const payload = querystring.stringify({
    username: credentials.username,
    password: credentials.password,
    grant_type: credentials.grantType,
    client_id: credentials.clientId,
    totp: credentials.totp,
    scope: credentials.scope,
    ...(credentials.offlineToken ? {scope: 'offline_access'} : {}),
    ...(credentials.refreshToken ? {
      refresh_token: credentials.refreshToken,
      client_secret: credentials.clientSecret,
    } : {}),
  });

  const config: AxiosRequestConfig = {
    ...settings.requestConfig,
  };

  if (credentials.clientSecret) {
    config.auth = {
      username: credentials.clientId,
      password: credentials.clientSecret,
    };
  }

  const {data} = await axios.post(url, payload, config);
  return camelize(data);
};
