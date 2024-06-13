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
    speed: 1000,
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

  const projects = [
    {
      imgURL: automark,
      link: "https://www.theautomark.com/",
    },
    {
      imgURL: travel,
      link: "https://fat-polish.surge.sh/",
    },
    {
      imgURL: future,
      link: "https://futurealiti.com/",
    },
    {
      imgURL: korrancy,
      link: "https://kas-demo-live.web.app/",
    },
  ];

  return (
    <section className="project-section" id="project">
      <div className="container project-section">
        <div className="project-container">
          <h5>Projects</h5>
          <Slider ref={sliderRef} {...settings}>
            {projects.map((project, index) => (
              <ProjectsCard
                key={index}
                imgURL={project.imgURL}
                link={project.link}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Projects;
