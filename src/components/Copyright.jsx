import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Copyright = () => {
    return (
        <Container fluid className='copyright'>
            <Container>
                <Row className='copyright-row'>
                    <Col lg="12" className='copyright-col'>
                        <p>
                            Copyright
                            <span> <i class="fa-regular fa-copyright"></i> </span>
                            2024 All Rights Reserved. Site By
                            <a target='_blank' href="https://portfolio-8wyb.onrender.com/"
                                title="Click to visit"> Hasitha</a>
                        </p>
                        <div class="social">
                            <a class="hvr-push" title="Click to visit" href="#copyright1"><i class="fa-brands fa-facebook-f"></i></a>
                            <a class="hvr-push" title="Click to visit" href="#copyright2"><i class="fa-brands fa-twitter"></i></a>
                            <a class="hvr-push" title="Click to visit" href="#copyright3"><i class="fa-brands fa-linkedin-in"></i></a>
                            <a class="hvr-push" title="Click to visit" href="#copyright4"><i class="fa-brands fa-behance"></i></a>
                            <a class="hvr-push" title="Click to visit" href="#copyright5"><i class="fa-brands fa-instagram"></i></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Copyright
