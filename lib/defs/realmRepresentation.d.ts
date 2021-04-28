import ClientRepresentation from './clientRepresentation';
import ComponentExportRepresentation from './componentExportRepresentation';
import UserRepresentation from './userRepresentation';
import GroupRepresentation from './groupRepresentation';
import IdentityProviderRepresentation from './identityProviderRepresentation';
import RequiredActionProviderRepresentation from './requiredActionProviderRepresentation';
import RolesRepresentation from './rolesRepresentation';
export default interface RealmRepresentation {
    accessCodeLifespan?: number;
    accessCodeLifespanLogin?: number;
    accessCodeLifespanUserAction?: number;
    accessTokenLifespan?: number;
    accessTokenLifespanForImplicitFlow?: number;
    accountTheme?: string;
    actionTokenGeneratedByAdminLifespan?: number;
    actionTokenGeneratedByUserLifespan?: number;
    adminEventsDetailsEnabled?: boolean;
    adminEventsEnabled?: boolean;
    adminTheme?: string;
    attributes?: Record<string, any>;
    authenticationFlows?: any[];
    authenticatorConfig?: any[];
    browserFlow?: string;
    browserSecurityHeaders?: Record<string, any>;
    bruteForceProtected?: boolean;
    clientAuthenticationFlow?: string;
    clientScopeMappings?: Record<string, any>;
    clientScopes?: any[];
    clients?: ClientRepresentation[];
    components?: {
        [index: string]: ComponentExportRepresentation;
    };
    defaultDefaultClientScopes?: string[];
    defaultGroups?: string[];
    defaultLocale?: string;
    defaultOptionalClientScopes?: string[];
    defaultRoles?: string[];
    directGrantFlow?: string;
    displayName?: string;
    displayNameHtml?: string;
    dockerAuthenticationFlow?: string;
    duplicateEmailsAllowed?: boolean;
    editUsernameAllowed?: boolean;
    emailTheme?: string;
    enabled?: boolean;
    enabledEventTypes?: string[];
    eventsEnabled?: boolean;
    eventsExpiration?: number;
    eventsListeners?: string[];
    failureFactor?: number;
    federatedUsers?: UserRepresentation[];
    groups?: GroupRepresentation[];
    id?: string;
    identityProviderMappers?: any[];
    identityProviders?: IdentityProviderRepresentation[];
    internationalizationEnabled?: boolean;
    keycloakVersion?: string;
    loginTheme?: string;
    loginWithEmailAllowed?: boolean;
    maxDeltaTimeSeconds?: number;
    maxFailureWaitSeconds?: number;
    minimumQuickLoginWaitSeconds?: number;
    notBefore?: number;
    offlineSessionIdleTimeout?: number;
    offlineSessionMaxLifespan?: number;
    offlineSessionMaxLifespanEnabled?: boolean;
    otpPolicyAlgorithm?: string;
    otpPolicyDigits?: number;
    otpPolicyInitialCounter?: number;
    otpPolicyLookAheadWindow?: number;
    otpPolicyPeriod?: number;
    otpPolicyType?: string;
    otpSupportedApplications?: string[];
    passwordPolicy?: string;
    permanentLockout?: boolean;
    protocolMappers?: any[];
    quickLoginCheckMilliSeconds?: number;
    realm?: string;
    refreshTokenMaxReuse?: number;
    registrationAllowed?: boolean;
    registrationEmailAsUsername?: boolean;
    registrationFlow?: string;
    rememberMe?: boolean;
    requiredActions?: RequiredActionProviderRepresentation[];
    resetCredentialsFlow?: string;
    resetPasswordAllowed?: boolean;
    revokeRefreshToken?: boolean;
    roles?: RolesRepresentation;
    scopeMappings?: any[];
    smtpServer?: Record<string, any>;
    sslRequired?: string;
    ssoSessionIdleTimeout?: number;
    ssoSessionMaxLifespan?: number;
    supportedLocales?: string[];
    userFederationMappers?: any[];
    userFederationProviders?: any[];
    userManagedAccessAllowed?: boolean;
    users?: UserRepresentation[];
    verifyEmail?: boolean;
    waitIncrementSeconds?: number;
}
