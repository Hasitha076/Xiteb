import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';

const SectionD = () => {
    return (
        <Container fluid className='section-d'>
            <Container>
                <Row>
                    <Col lg="6" className='left'>
                        <h2>Trusted Clients</h2>
                        <h3>Lorem Ipsum Dolor Sit Amet Consectetur</h3>
                        <OwlCarousel className='owl-theme'
                            items={1}
                            loop={true}
                            margin={25}
                            dots={false}
                            nav
                            autoplay={true}
                            smartSpeed={3000}
                            autoplayTimeout={6000}>
                            <div className="item">
                                <div className="card">
                                    <div className="box">
                                        <img className="img-fluid" src="resources/images/test-icon.png" alt="Clients" />
                                    </div>
                                    <div className="card-body">
                                        <p>Integer congue elit non semper laoreet sed lectus orci posuer nisi tempor se
                                            felis ac mauris. Pelentesque inyd urna. Integer vitae felis vel magna posu du
                                            vestibulum. Nam rutrum congue diam. Aliquam malesuada maurs etug met
                                            Curabitur laoreet convallis nisal pellentesque bibendum.</p>

                                        <div className="name">
                                            <h5>John Deo</h5>
                                            <h6>Managing Director</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="card">
                                    <div className="box">
                                        <img className="img-fluid" src="resources/images/test-icon.png" alt="Clients" />
                                    </div>
                                    <div className="card-body">
                                        <p>Integer congue elit non semper laoreet sed lectus orci posuer nisi tempor se
                                            felis ac mauris. Pelentesque inyd urna. Integer vitae felis vel magna posu du
                                            vestibulum. Nam rutrum congue diam. Aliquam malesuada maurs etug met
                                            Curabitur laoreet convallis nisal pellentesque bibendum.</p>

                                        <div className="name">
                                            <h5>John Deo</h5>
                                            <h6>Managing Director</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </Col>
                    <Col lg="6" className='right'>
                        <h2>Why Choose Us</h2>
                        <h3>Lorem Ipsum Dolor Sit Amet Consectetur</h3>

                        <div className="accordion" id="accordionExample">
                            <div className="card">
                                <div className="card-header" id="headingOne">
                                    <h2 className="mb-0">
                                        <button className="btn btn-link btn-block text-left" type="button"
                                            data-toggle="collapse" data-target="#collapseOne" aria-expanded="true"
                                            aria-controls="collapseOne">
                                            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. <i
                                                className="fa-solid fa-plus"></i></div>
                                        </button>
                                    </h2>
                                </div>

                                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                                    data-parent="#accordionExample">
                                    <div className="card-body">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, magni voluptatum.
                                        Aliquid, illo omnis voluptates provident cupiditate, porro laudantium natus non
                                        tenetur rem distinctio amet qui rerum nam vel corrupti?
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingTwo">
                                    <h2 className="mb-0">
                                        <button className="btn btn-link btn-block text-left collapsed" type="button"
                                            data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false"
                                            aria-controls="collapseTwo">
                                            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. <i
                                                className="fa-solid fa-plus"></i></div>
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                                    data-parent="#accordionExample">
                                    <div className="card-body">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, magni voluptatum.
                                        Aliquid, illo omnis voluptates provident cupiditate, porro laudantium natus non
                                        tenetur rem distinctio amet qui rerum nam vel corrupti?
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingThree">
                                    <h2 className="mb-0">
                                        <button className="btn btn-link btn-block text-left collapsed" type="button"
                                            data-toggle="collapse" data-target="#collapseThree" aria-expanded="false"
                                            aria-controls="collapseThree">
                                            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. <i
                                                className="fa-solid fa-plus"></i></div>
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree"
                                    data-parent="#accordionExample">
                                    <div className="card-body">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, magni voluptatum.
                                        Aliquid, illo omnis voluptates provident cupiditate, porro laudantium natus non
                                        tenetur rem distinctio amet qui rerum nam vel corrupt
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingfour">
                                    <h2 className="mb-0">
                                        <button className="btn btn-link btn-block text-left collapsed" type="button"
                                            data-toggle="collapse" data-target="#collapsefour" aria-expanded="false"
                                            aria-controls="collapseThree">
                                            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. <i
                                                className="fa-solid fa-plus"></i></div>
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapsefour" className="collapse" aria-labelledby="headingfour"
                                    data-parent="#accordionExample">
                                    <div className="card-body">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, magni voluptatum.
                                        Aliquid, illo omnis voluptates provident cupiditate, porro laudantium natus non
                                        tenetur rem distinctio amet qui rerum nam vel corrupt
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default SectionD
