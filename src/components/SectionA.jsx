import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SectionA = () => {

    return (
        <Container fluid className="section-a">
            <Container>
                <Row>
                    <Col lg="7" className="image">
                        <div className="img-box">
                            <figure className="parallaxed"><img className="img-fluid" src="resources/images/section-a-img-1.jpg"
                                alt="Dependable airport" /></figure>
                            <figure className="parallaxed"><img className="img-fluid" src="resources/images/section-a-img-2.jpg"
                                alt="Dependable airport" /></figure>
                        </div>
                        <div class="number parallaxed">
                            <h4>15,350 +
                                <span>Clients Worldwide</span>
                            </h4>
                        </div>
                    </Col>
                    <Col lg="5" className='content'>
                        <h2>TransMax Logistics
                            Around <span>the World</span></h2>
                        <p><b>Transmax is the world's driving worldwide coordinations
                            supplier — we uphold industry and exchange the worldwide
                            trade of merchandise through land transport.</b></p>
                        <p>Our worth added administrations guarantee the progression of
                            products proceeds consistently and supply chains stay lean and
                            streamlined for progress.</p>
                        <a class="hvr-wobble-skew" title="Click to visit" href="#1">More About Us</a>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default SectionA
