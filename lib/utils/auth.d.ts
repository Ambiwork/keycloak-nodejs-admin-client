import { AxiosRequestConfig } from 'axios';
export declare type GrantTypes = 'client_credentials' | 'password';
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
export declare const getToken: (settings: Settings) => Promise<TokenResponse>;
