import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image from '../assets/slider1.jpg';
import image2 from '../assets/slider2.jpg';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image2}
                    alt="Second slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel;