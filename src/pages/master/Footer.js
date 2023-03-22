import Container from "react-bootstrap/Container";
import UserService from "../../services/UserService";

function Footer() {
    return (
        <Container>
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item">User {UserService.isLoggedIn() ? "is" : "is not"} authenticated</li>
                </ul>
                <p className="text-center text-muted">Mark Ferreira</p>
            </footer>
        </Container>
    );
}

export default Footer;