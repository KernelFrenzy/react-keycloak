import KeycloakService from "../../services/KeycloakService";

const RenderWhenAnonymous = ({ children }) => {
    return !KeycloakService.isLoggedIn() ? children : null;
}

export default RenderWhenAnonymous
