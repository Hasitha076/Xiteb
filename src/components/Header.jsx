import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    return (
        <Container fluid className="header">
            <Container>
                <Row>
                    <Col lg="3" md="12" className="logo">
                        <a title="Home page" href="#home">
                            <img class="img-fluid" src="resources/images/logo.png" alt="Practical" />
                        </a>
                    </Col>
                    <Col lg="6" md="12" className="nav-section">
                        <Navbar expand="lg">
                            <Container>
                                <Navbar.Brand className="navbar-brand d-block d-lg-none" href="#home">MENU</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                        <NavDropdown title="Home" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="#action/1.1">Sub Page1</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/1.2">Sub Page2</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/1.3">Sub Page3</NavDropdown.Item>
                                        </NavDropdown>
                                        <NavDropdown title="Pages" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="#action/2.1">Sub Page1</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/2.2">Sub Page2</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/2.3">Sub Page3</NavDropdown.Item>
                                        </NavDropdown>
                                        <Nav.Link href="#tracking">Tracking</Nav.Link>
                                        <NavDropdown title="Services" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="#action/3.1">Sub Page1</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">Sub Page2</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">Sub Page3</NavDropdown.Item>
                                        </NavDropdown>
                                        <NavDropdown title="Blog" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="#action/4.1">Sub Page1</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/4.2">Sub Page2</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/4.3">Sub Page3</NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                </Navbar.Collapse>
                                {/* <div className="buttons">
                                    <a className="hvr-wobble-skew" title="Click to visit" href="#qoute">Get a quote</a>
                                    <a className="hvr-wobble-skew" title="Click to visit" href="#signin">Sign in</a>
                                </div> */}
                            </Container>
                        </Navbar>
                    </Col>
                    <Col lg="3" md="12" className="header-buttons">
                        <div className="buttons">
                            <a className="hvr-wobble-skew" title="Click to visit" href="#qoute">Get a quote</a>
                            <a className="hvr-wobble-skew" title="Click to visit" href="#signin">Sign in</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Header
