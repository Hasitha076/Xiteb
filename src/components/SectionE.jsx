import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';

const SectionE = () => {
    return (
        <Container fluid className='section-e'>
            <Container>
                <Row>
                    <Col>
                        <OwlCarousel className='owl-theme'
                            items={5}
                            loop={true}
                            margin={5}
                            dots={false}
                            center
                            autoplay={true}
                            smartSpeed={3000}
                            autoplayTimeout={6000}
                            responsive={{
                                0: {
                                    items: 1
                                },
                                600: {
                                    items: 3
                                },
                                900: {
                                    items: 3
                                },
                                1200: {
                                    items: 5
                                }
                            }}
                        >
                            <div className="item">
                                <img class="img-fluid" src="resources/images/logo-1.png" alt="logo" />
                            </div>
                            <div className="item">
                                <img class="img-fluid" src="resources/images/logo-2.png" alt="logo" />
                            </div>
                            <div className="item">
                                <img class="img-fluid" src="resources/images/logo-3.png" alt="logo" />
                            </div>
                            <div className="item">
                                <img class="img-fluid" src="resources/images/logo-4.png" alt="logo" />
                            </div>
                            <div className="item">
                                <img class="img-fluid" src="resources/images/logo-5.png" alt="logo" />
                            </div>
                        </OwlCarousel>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default SectionE
