import KeycloakService from "../../services/KeycloakService";

const RenderWhenAuthenticated = ({ children }) => {
    return KeycloakService.isLoggedIn() ? children : null;
}

export default RenderWhenAuthenticated
