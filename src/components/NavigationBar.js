import { Navbar, Container } from "react-bootstrap"

function NavigationBar() {

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Project "Beer"
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default NavigationBar