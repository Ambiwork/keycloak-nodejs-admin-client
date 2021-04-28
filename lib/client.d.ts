import { Credentials } from './utils/auth';
import { Cache } from './resources/cache';
import { Users } from './resources/users';
import { Groups } from './resources/groups';
import { Roles } from './resources/roles';
import { Clients } from './resources/clients';
import { Realms } from './resources/realms';
import { ClientScopes } from './resources/clientScopes';
import { IdentityProviders } from './resources/identityProviders';
import { Components } from './resources/components';
import { AuthenticationManagement } from './resources/authenticationManagement';
import { ServerInfo } from './resources/serverInfo';
import { WhoAmI } from './resources/whoAmI';
import { AttackDetection } from './resources/attackDetection';
import { AxiosRequestConfig } from 'axios';
import { Sessions } from './resources/sessions';
import { UserStorageProvider } from './resources/userStorageProvider';
export interface ConnectionConfig {
    baseUrl?: string;
    realmName?: string;
    requestConfig?: AxiosRequestConfig;
}
export declare class KeycloakAdminClient {
    users: Users;
    userStorageProvider: UserStorageProvider;
    groups: Groups;
    roles: Roles;
    clients: Clients;
    realms: Realms;
    clientScopes: ClientScopes;
    identityProviders: IdentityProviders;
    components: Components;
    serverInfo: ServerInfo;
    whoAmI: WhoAmI;
    attackDetection: AttackDetection;
    sessions: Sessions;
    authenticationManagement: AuthenticationManagement;
    cache: Cache;
    baseUrl: string;
    realmName: string;
    accessToken: string;
    refreshToken: string;
    idToken: string;
    keycloak: any;
    private requestConfig?;
    constructor(connectionConfig?: ConnectionConfig);
    auth(credentials: Credentials): Promise<void>;
    init(init?: any, config?: any): Promise<void>;
    setAccessToken(token: string): void;
    getAccessToken(): Promise<any>;
    getRequestConfig(): AxiosRequestConfig;
    setConfig(connectionConfig: ConnectionConfig): void;
}
