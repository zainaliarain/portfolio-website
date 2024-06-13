import React, { useRef } from "react";
import "./Projects.css";
import ProjectsCard from "./ProjectsCard/ProjectsCard";
import automark from "../../images/automark.PNG";
import travel from "../../images/travel.PNG";
import future from "../../images/future.PNG";
import korrancy from "../../images/korrancy.PNG";
import Slider from "react-slick";

const Projects = () => {
  const sliderRef = useRef();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const projectImgs = [automark, travel, future, korrancy];

  return (
    <section>
      <div className="container project-section">
        <div className="project-container">
          <h5>Projects</h5>
          <Slider ref={sliderRef} {...settings}>
            {projectImgs.map((imgURL, index) => (
              <ProjectsCard key={index} imgURL={imgURL} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Projects;
