import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    return (
        <Container fluid className='footer'>
            <Container>
                <Row className='top'>
                    <Col className="6">
                        <h2>Weekly Newsletter</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </Col>
                    <Col className="6">
                        <Col>
                            <input type="text" name="email" id="email" placeholder="Enter Your Mail" />
                            <input type="submit" name="Subscribe" id="Subscribe" value="Subscribe" />
                        </Col>

                    </Col>
                </Row>
                <Row className="bottom">
                    <div className="col-lg-3 col-md-6 col-xs-12 contact">
                        <h3>About Us</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur
                            Sed ut perspiciatis unde omnis iste
                            adipiscing elit.</p>
                        <div className="tel">
                            <i className="fa-solid fa-phone"></i>
                            <a className="hvr-wobble-horizontal" title="Click to call" href="#footer1">+Your Number Here</a>
                        </div>
                        <div className="add">
                            <i className="fa-solid fa-location-dot"></i>
                            <p>Your Address here</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-xs-12 hours">
                        <h3>Latest News</h3>
                        <ul className="list">
                            <li>Sed ut perspiciatis unde omnis iste
                                natus error sit voluptatem . <br /> 5 Minutes Ago</li>
                            <li>Sed ut perspiciatis unde omnis iste
                                natus error sit voluptatem . <br /> 5 Minutes Ago</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-xs-12 links">
                        <h3>Customer Service</h3>
                        <ul className="navbar2">
                            <li><a href="#footer2">Support Forums</a></li>
                            <li><a href="#footer2">Communication</a></li>
                            <li><a href="#footer3">FAQS</a></li>
                            <li><a href="#footer4">Privacy Policy</a></li>
                            <li><a href="#footer5">Rutes & Condition</a></li>
                            <li><a href="#footer6">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-xs-12 imags">
                        <h3>Customer Service</h3>
                        <div className="img-box">
                            <div className="div">
                                <img className="img-fluid hvr-push" src="./resources/images/card-1.jpg" alt="Customer Service" />
                                <img className="img-fluid hvr-push" src="./resources/images/card-1.jpg" alt="Customer Service" />
                                <img className="img-fluid hvr-push" src="./resources/images/card-1.jpg" alt="Customer Service" />
                            </div>
                            <div className="div">
                                <img className="img-fluid hvr-push" src="./resources/images/card-2.jpg" alt="Customer Service" />
                                <img className="img-fluid hvr-push" src="./resources/images/card-2.jpg" alt="Customer Service" />
                                <img className="img-fluid hvr-push" src="./resources/images/card-2.jpg" alt="Customer Service" />
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </Container>
    )
}

export default Footer
