import Resource from './resource';
import AdminEventRepresentation from '../defs/adminEventRepresentation';
import RealmRepresentation from '../defs/realmRepresentation';
import EventRepresentation from '../defs/eventRepresentation';
import EventType from '../defs/eventTypes';
import KeysMetadataRepresentation from '../defs/keyMetadataRepresentation';
import ClientInitialAccessPresentation from '../defs/clientInitialAccessPresentation';
import { KeycloakAdminClient } from '../client';
export declare class Realms extends Resource {
    find: (payload?: {}) => Promise<RealmRepresentation[]>;
    create: (payload?: RealmRepresentation) => Promise<{
        realmName: string;
    }>;
    findOne: (payload?: {
        realm: string;
    }) => Promise<RealmRepresentation>;
    update: (query: {
        realm: string;
    }, payload: RealmRepresentation) => Promise<void>;
    del: (payload?: {
        realm: string;
    }) => Promise<void>;
    export: (payload?: {
        realm: string;
        exportClients?: boolean;
        exportGroupsAndRoles?: boolean;
    }) => Promise<RealmRepresentation>;
    findEvents: (payload?: {
        realm: string;
        client?: string;
        dateFrom?: Date;
        dateTo?: Date;
        first?: number;
        ipAddress?: string;
        max?: number;
        type?: EventType;
        user?: string;
    }) => Promise<EventRepresentation[]>;
    getClientsInitialAccess: (payload?: {
        realm: string;
    }) => Promise<ClientInitialAccessPresentation[]>;
    createClientsInitialAccess: (query: {
        realm: string;
    }, payload: {
        count?: number;
        expiration?: number;
    }) => Promise<ClientInitialAccessPresentation>;
    delClientsInitialAccess: (payload?: {
        realm: string;
        id: string;
    }) => Promise<void>;
    removeSession: (payload?: {
        realm: string;
        sessionId: string;
    }) => Promise<void>;
    findAdminEvents: (payload?: {
        realm: string;
        authClient?: string;
        authIpAddress?: string;
        authRealm?: string;
        authUser?: string;
        dateFrom?: Date;
        dateTo?: Date;
        first?: number;
        max?: number;
        operationTypes?: string;
        resourcePath?: string;
        resourceTypes?: string;
    }) => Promise<AdminEventRepresentation[]>;
    getUsersManagementPermissions: (payload?: {
        realm: string;
    }) => Promise<void>;
    updateUsersManagementPermissions: (payload?: {
        realm: string;
        enabled: boolean;
    }) => Promise<void>;
    logoutAll: (payload?: {
        realm: string;
    }) => Promise<void>;
    deleteSession: (payload?: {
        realm: string;
        session: string;
    }) => Promise<void>;
    getKeys: (payload?: {
        realm: string;
    }) => Promise<KeysMetadataRepresentation>;
    constructor(client: KeycloakAdminClient);
}
