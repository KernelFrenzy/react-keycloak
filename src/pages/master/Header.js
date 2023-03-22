import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import KeycloakService from "../../services/KeycloakService";
import {Button} from "react-bootstrap";
import RenderWhenAnonymous from "../utilities/RenderWhenAnonymous";
import RenderWhenAuthenticated from "../utilities/RenderWhenAuthenticated";

function Header() {
    return (
        <Navbar sticky="top" expand="lg">
            <Container>
                <Navbar.Brand href="/" id="navbarTitle">React-Keycloak</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                    <Nav>
                        <RenderWhenAnonymous>
                            <Button onClick={() => KeycloakService.doLogin()}>Login</Button>
                        </RenderWhenAnonymous>
                        <RenderWhenAuthenticated>
                            <Button onClick={() => KeycloakService.doLogout()}>Logout</Button>
                        </RenderWhenAuthenticated>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;