import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SectionC = () => {
    return (
        <Container fluid className='section-c'>
            <Container>
                <Row>
                    <Col lg={3} md={6} className="section-c-card">
                        <div className="box">
                            <span className="progress-number">890</span>
                            <div className="counter-value" data-count="890">
                                <h5>875</h5>
                            </div>
                            <h6>Delivered <br />
                                packages</h6>
                        </div>
                    </Col>

                    <Col lg={3} md={6} className="section-c-card">
                        <div className="box">
                            <span className="progress-number">137</span>
                            <div className="counter-value" data-count="137">
                                <h5>125</h5>
                            </div>
                            <h6>Countries <br />
                                covered</h6>
                        </div>
                    </Col>

                    <Col lg={3} md={6} className="section-c-card">
                        <div className="box">
                            <span className="progress-number">740</span>
                            <div className="counter-value" data-count="740">
                                <h5>725</h5>
                            </div>
                            <h6>Tons <br />
                                of Goods</h6>
                        </div>
                    </Col>

                    <Col lg={3} md={6} className="section-c-card">
                        <div className="box">
                            <span className="progress-number">600</span>
                            <div className="counter-value" data-count="600">
                                <h5>585</h5>
                            </div>
                            <h6>Satisfied <br />
                                Clients</h6>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default SectionC
