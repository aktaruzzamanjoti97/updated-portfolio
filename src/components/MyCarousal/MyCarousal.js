import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./MyCarousal.css";
import firstOne from "../../assets/img/joti1.jpg";
import secondOne from "../../assets/img/joti2.jpg";
import thirdOne from "../../assets/img/joti3.jpg";
import ScrollDown from "../ScrollDown/ScrollDown";

const MyCarousal = () => {
  return (
    <div id="home">
      <Carousel controls={false} indicators interval={2500} pause={false}>
        <Carousel.Item>
          <img
            style={{ backgroundSize: "cover", backgroundPosition: "center" }}
            className="d-block w-100 custom-img"
            src={secondOne}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={thirdOne} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={firstOne} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <ScrollDown />
    </div>
  );
};

export default MyCarousal;
