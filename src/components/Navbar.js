import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from './Logo';
import '../styles/Navbar.css'

function MyNavbar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <div className="d-flex justify-content-between align-items-center">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Brand href="#home" className='header-logo'><Logo /></Navbar.Brand>
                </div>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">All Products</Nav.Link>
                        <Nav.Link href="#link">Mushrooms</Nav.Link>
                        <Nav.Link href="#link">Algae</Nav.Link>
                        <Nav.Link href="#link">Clean Multi-Vitamin</Nav.Link>
                        <NavDropdown title="All Products" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Clean Mushrooms</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Clean Algae</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Clean 5HTP</NavDropdown.Item>
                            {/* <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;