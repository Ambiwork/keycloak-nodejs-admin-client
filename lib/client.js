"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.KeycloakAdminClient = void 0;
var auth_1 = require("./utils/auth");
var constants_1 = require("./utils/constants");
var cache_1 = require("./resources/cache");
var users_1 = require("./resources/users");
var groups_1 = require("./resources/groups");
var roles_1 = require("./resources/roles");
var clients_1 = require("./resources/clients");
var realms_1 = require("./resources/realms");
var clientScopes_1 = require("./resources/clientScopes");
var identityProviders_1 = require("./resources/identityProviders");
var components_1 = require("./resources/components");
var authenticationManagement_1 = require("./resources/authenticationManagement");
var serverInfo_1 = require("./resources/serverInfo");
var whoAmI_1 = require("./resources/whoAmI");
var attackDetection_1 = require("./resources/attackDetection");
var sessions_1 = require("./resources/sessions");
var userStorageProvider_1 = require("./resources/userStorageProvider");
var KeycloakAdminClient = (function () {
    function KeycloakAdminClient(connectionConfig) {
        this.baseUrl =
            (connectionConfig && connectionConfig.baseUrl) || constants_1.defaultBaseUrl;
        this.realmName =
            (connectionConfig && connectionConfig.realmName) || constants_1.defaultRealm;
        this.requestConfig = connectionConfig && connectionConfig.requestConfig;
        this.users = new users_1.Users(this);
        this.userStorageProvider = new userStorageProvider_1.UserStorageProvider(this);
        this.groups = new groups_1.Groups(this);
        this.roles = new roles_1.Roles(this);
        this.clients = new clients_1.Clients(this);
        this.realms = new realms_1.Realms(this);
        this.clientScopes = new clientScopes_1.ClientScopes(this);
        this.identityProviders = new identityProviders_1.IdentityProviders(this);
        this.components = new components_1.Components(this);
        this.authenticationManagement = new authenticationManagement_1.AuthenticationManagement(this);
        this.serverInfo = new serverInfo_1.ServerInfo(this);
        this.whoAmI = new whoAmI_1.WhoAmI(this);
        this.sessions = new sessions_1.Sessions(this);
        this.attackDetection = new attackDetection_1.AttackDetection(this);
        this.cache = new cache_1.Cache(this);
    }
    KeycloakAdminClient.prototype.auth = function (credentials) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, accessToken, refreshToken, idToken, expiresIn;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, auth_1.getToken({
                            baseUrl: this.baseUrl,
                            realmName: this.realmName,
                            credentials: credentials,
                            requestConfig: this.requestConfig
                        })];
                    case 1:
                        _a = _b.sent(), accessToken = _a.accessToken, refreshToken = _a.refreshToken, idToken = _a.idToken, expiresIn = _a.expiresIn;
                        this.accessToken = accessToken;
                        this.refreshToken = refreshToken;
                        this.expiresIn = expiresIn;
                        if (idToken) {
                            this.idToken = idToken;
                        }
                        return [2];
                }
            });
        });
    };
    KeycloakAdminClient.prototype.init = function (init, config) {
        return __awaiter(this, void 0, void 0, function () {
            var Keycloak_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!window) return [3, 3];
                        return [4, Promise.resolve().then(function () { return __importStar(require('keycloak-js')); })];
                    case 1:
                        Keycloak_1 = (_a.sent())["default"];
                        this.keycloak = Keycloak_1(config);
                        return [4, this.keycloak.init(init)];
                    case 2:
                        _a.sent();
                        this.baseUrl = this.keycloak.authServerUrl;
                        _a.label = 3;
                    case 3: return [2];
                }
            });
        });
    };
    KeycloakAdminClient.prototype.setAccessToken = function (token) {
        this.accessToken = token;
    };
    KeycloakAdminClient.prototype.getAccessToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.keycloak) return [3, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, this.keycloak.updateToken(5)];
                    case 2:
                        _a.sent();
                        return [3, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.keycloak.login();
                        return [3, 4];
                    case 4: return [2, this.keycloak.token];
                    case 5: return [2, this.accessToken];
                }
            });
        });
    };
    KeycloakAdminClient.prototype.getRequestConfig = function () {
        return this.requestConfig;
    };
    KeycloakAdminClient.prototype.setConfig = function (connectionConfig) {
        if (typeof connectionConfig.baseUrl === 'string' &&
            connectionConfig.baseUrl) {
            this.baseUrl = connectionConfig.baseUrl;
        }
        if (typeof connectionConfig.realmName === 'string' &&
            connectionConfig.realmName) {
            this.realmName = connectionConfig.realmName;
        }
        this.requestConfig = connectionConfig.requestConfig;
    };
    return KeycloakAdminClient;
}());
exports.KeycloakAdminClient = KeycloakAdminClient;
//# sourceMappingURL=client.js.map