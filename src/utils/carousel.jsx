import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import olo from '../images/olorunwa.jpg';

export const Carousels = () => {
    return (

        <Carousel
            autoPlay
        >
            <div>
                <img src={olo} style={{
                    height: "500px",
                    width: "500px"
                }} />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src={olo}
                    style={{
                        height: "500px",
                        width: "500px"
                    }}
                />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src={olo}

                    style={{
                        height: "500px",
                        width: "500px"
                    }} />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>

    )
}































export default Carousels