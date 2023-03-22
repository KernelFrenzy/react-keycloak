import KeycloakService from "../../services/KeycloakService";

function About() {
    document.title = "About";
    console.log(KeycloakService);
    return (
        <div className="px-4 pt-5 my-5 text-center">
            <h1 className="display-4 fw-bold">About</h1>
            <div className="col-lg-6 mx-auto" style={{overflowWrap: "anywhere"}}>
                <p className="lead mb-4">My token is: {KeycloakService.getToken()}</p>
            </div>
        </div>
    );
}

export default About;