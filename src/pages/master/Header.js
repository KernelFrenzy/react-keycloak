import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import UserService from "../../services/UserService";
import {Button} from "react-bootstrap";
import RenderOnAnonymous from "../utilities/RenderOnAnonymous";
import RenderOnAuthenticated from "../utilities/RenderOnAuthenticated";

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
                        <RenderOnAnonymous>
                            <Button onClick={() => UserService.doLogin()}>Login</Button>
                        </RenderOnAnonymous>
                        <RenderOnAuthenticated>
                            <Button onClick={() => UserService.doLogout()}>Logout</Button>
                        </RenderOnAuthenticated>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;