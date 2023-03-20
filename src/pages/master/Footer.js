import Container from "react-bootstrap/Container";

function Footer() {
    return (
        <Container>
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item">User is not authenticated</li>
                </ul>
                <p className="text-center text-muted">Mark Ferreira</p>
            </footer>
        </Container>
    );
}

export default Footer;