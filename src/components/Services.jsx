import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assects/3.jpg";
import img2 from "../assects/4.jpg";
import img4 from "../assects/1.jpg";

function Services() {
  return (
    <div className="services">
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        // interval={1000}
      >
        <div>
          <img src={img1} alt="item1" />
          <p  className="legend">Full Stack</p>
        </div>
        <div>
          <img src={img2} alt="item2" />
          <p className="legend">React & Node Js & Javascript</p>
        </div>
       
        <div>
          <img src={img4} alt="item2" />
          <p className="legend"> Block Chain </p>
        </div>
      </Carousel>
    </div>
  );
}

export default Services;
