import Container from "react-bootstrap/Container";
import KeycloakService from "../../services/KeycloakService";

function Footer() {
    return (
        <Container>
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item">User {KeycloakService.isLoggedIn() ? "is" : "is not"} authenticated</li>
                </ul>
                <p className="text-center text-muted">Mark Ferreira</p>
            </footer>
        </Container>
    );
}

export default Footer;