import Keycloak from "keycloak-js";

const keycloak = new Keycloak('/keycloak.json');

const initKeycloak = (onAuthenticatedCallback) => {
    keycloak.onTokenExpired = () => {
        console.log("Token has expired!");
    }
    keycloak
        .init({
            onLoad: 'check-sso',
            silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html'
        })
        .then(authenticated => {
            console.log("Is user authenticated: ", authenticated);
            console.log(keycloak.isTokenExpired(299));
        })
        .catch(console.error)
        .finally(onAuthenticatedCallback);
};

const doLogin = keycloak.login;

const doLogout = keycloak.logout;

const getToken = () => {
    return keycloak.token;
};

const isLoggedIn = () => {
    return !!keycloak.token;
};

const updateToken = () => {
    keycloak.updateToken(1);
}

const getUsername = () => keycloak.tokenParsed?.preferred_username;

const hasRole = (roles) => {
    return roles.some((role) => keycloak.hasRealmRole(role));
}

const KeycloakService = {
    initKeycloak,
    doLogin,
    doLogout,
    isLoggedIn,
    getToken,
    updateToken,
    getUsername,
    hasRole,
};

export default KeycloakService;
