import frontendIcon from "../images/frontend.png";
import backendIcon from "../images/backend.png";
import toolsIcon from "../images/tools.png";
import softskillsIcon from "../images/softskills.png";
export const SKILLS = [
  {
    title: "Frontend",
    icon: frontendIcon,
    skills: [
      { skill: "HTML5", percentage: "81%" },
      { skill: "CSS3", percentage: "80%" },
      { skill: "JavaScript", percentage: "70%" },
      { skill: "React.Js", percentage: "80%" },
    ],
  },
  {
    title: "Backend",
    icon: backendIcon,
    skills: [
      { skill: "Node.Js", percentage: "65%" },
      { skill: "Express.Js", percentage: "60%" },
    ],
  },
  {
    title: "Tools",
    icon: toolsIcon,
    skills: [
      { skill: "Git & GitHub", percentage: "85%" },
      { skill: "Visual Studio Code", percentage: "70%" },
      { skill: "Webpack", percentage: "60%" },
      { skill: "Responsive Design", percentage: "70%" },
    ],
  },
  {
    title: "Soft Skills",
    icon: softskillsIcon,
    skills: [
      { skill: "Problem-Solving", percentage: "80%" },
      { skill: "Collaboration", percentage: "85%" },
      { skill: "Attention to Detail", percentage: "75%" },
    ],
  },
];

export const WORK_EXPERIENCE = [
  {
    title: "Customer Support Executive",
    data: "june 2023 - Present",
    responsibilities: [
      "Configured and maintained VOIP networks (PBX, Asterisk, VICIdial) for over 100+ systems, resolving 95% of technical issues efficiently.",
      "Experienced in developing and testing VOIP applications (Eyebeam, WebRTC, Zoiper) and providing efficient customer support.",
      "Skilled in integrating web forms and APIs using HTML, CSS, JavaScript, and PHP, ensuring seamless functionality.",
    ],
  },
  {
    title: "Frontend Developer",
    data: "january 2021 - Present",
    responsibilities: [
      "Collaborated with 14+ clients to design and develop over 15+ responsive and user-friendly websites, enhancing user experience across different devices.",
      "Implemented frontend frameworks such as React to create dynamic and interactive web applications.",
      "Collaborated with designers to ensure the implementation of visually appealing and consistent UI/UX designs.",
    ],
  },
];
