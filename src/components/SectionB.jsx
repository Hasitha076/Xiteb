import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';


const SectionB = () => {

    return (
        <Container fluid className='section-b'>
            <Container>
                <Row>
                    <Col>
                        <h5>Real Solution‚ Real Fast !</h5>
                        <h2>Best Global Logistics Solutions.</h2>
                        <OwlCarousel className='owl-theme'
                            items={2}
                            loop={true}
                            margin={25}
                            autoplay={true}
                            smartSpeed={3000}
                            autoplayTimeout={6000}
                            responsive={{
                                0: {
                                    items: 1
                                },
                                600: {
                                    items: 2
                                },
                                900: {
                                    items: 2
                                },
                                1200: {
                                    items: 2
                                }
                            }}
                        >
                            <div className="item">
                                <div className="card">
                                    <div className="img-box">
                                        <img className="img-fluid" src="resources/images/card-1.jpg"
                                            alt="Executive airport transfers" />
                                    </div>
                                    <div className="card-body">
                                        <h6>Air Freight Services</h6>
                                        <p>At our Auto Service garage, we are
                                            fully appreciate how difficult occur
                                            it is for people to find.</p>
                                        <a className="hvr-wobble-skew" title="Click to visit" href="#1">Read More <i
                                            className="fa-solid fa-circle-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="card">
                                    <div className="img-box">
                                        <img className="img-fluid" src="resources/images/card-2.jpg"
                                            alt="Executive airport transfers" />
                                    </div>
                                    <div className="card-body">
                                        <h6>Drone Services</h6>
                                        <p>These are unique and often they
                                            differ from one industry to the
                                            other. Our logistics expertise.</p>
                                        <a className="hvr-wobble-skew" title="Click to visit" href="#2">Read More <i
                                            className="fa-solid fa-circle-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="card">
                                    <div className="img-box">
                                        <img className="img-fluid" src="resources/images/card-1.jpg"
                                            alt="Executive airport transfers" />
                                    </div>
                                    <div className="card-body">
                                        <h6>Air Freight Services</h6>
                                        <p>At our Auto Service garage, we are
                                            fully appreciate how difficult occur
                                            it is for people to find.</p>
                                        <a className="hvr-wobble-skew" title="Click to visit" href="#3">Read More <i
                                            className="fa-solid fa-circle-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="card">
                                    <div className="img-box">
                                        <img className="img-fluid" src="resources/images/card-2.jpg"
                                            alt="Executive airport transfers" />
                                    </div>
                                    <div className="card-body">
                                        <h6>Drone Services</h6>
                                        <p>These are unique and often they
                                            differ from one industry to the
                                            other. Our logistics expertise.</p>
                                        <a className="hvr-wobble-skew" title="Click to visit" href="#4">Read More <i
                                            className="fa-solid fa-circle-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                        <p>Logistic & Transport Solutions Saves Your Time. <a title="Click to visit" href="#5">Finds Your
                            Solutions <i className="fa-solid fa-circle-arrow-right"></i></a></p>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default SectionB
