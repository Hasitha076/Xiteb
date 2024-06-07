import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import { Col } from 'react-bootstrap';

const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setActiveIndex(selectedIndex);
    };

    return (
        <Container fluid className="slider-section">
            <Carousel fade activeIndex={activeIndex} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="img-fluid"
                        src="resources/images/slider-1.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="img-fluid"
                        src="resources/images/slider-2.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="img-fluid"
                        src="resources/images/slider-3.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <Col lg="12" className="left-section">
                <div className="top animate__animated animate__bounceInDown animate__delay-2s">
                    <h5>Logistic</h5>
                    <h1>Best Shipping
                        <span>Partner</span>
                    </h1>
                    <p>Amet, tempus egestas facilisis volutpat viverra molestie lobortis
                        posuere maecenas. molestie lobortis posuere maecenas. Eget
                        sapien, gravida nequi.</p>
                    <a className="hvr-wobble-skew" title="Click to visit" href="#discover">Discover More</a>
                </div>
                <div>
                    <ul className="counter">
                        <li>{activeIndex + 1} / 3</li>
                    </ul>
                </div>
            </Col>
        </Container>
    );
}

export default Slider;
