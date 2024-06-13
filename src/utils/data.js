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
      { skill: "Bootstrap", percentage: "80%" }, // Corrected "Bootstap" to "Bootstrap"
      { skill: "JavaScript", percentage: "70%" },
      { skill: "React.js", percentage: "80%" }, // Corrected "React.Js" to "React.js"
    ],
  },
  {
    title: "Backend",
    icon: backendIcon,
    skills: [
      { skill: "Node.js", percentage: "65%" }, // Corrected "Node.Js" to "Node.js"
      { skill: "Express.js", percentage: "60%" }, // Corrected "Express.Js" to "Express.js"
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
      { skill: "Problem-Solving", percentage: "80%" }, // Corrected "Problem-Solving" to "Problem-Solving"
      { skill: "Collaboration", percentage: "85%" },
      { skill: "Attention to Detail", percentage: "75%" },
    ],
  },
];

export const WORK_EXPERIENCE = [
  {
    title: "Customer Support Executive",
    date: "June 2023 - Present", // Corrected "june" to "June"
    responsibilities: [
      "Configured and maintained VOIP networks (PBX, Asterisk, VICIdial) for over 100+ systems, resolving 95% of technical issues efficiently.",
      "Experienced in developing and testing VOIP applications (Eyebeam, WebRTC, Zoiper) and providing efficient customer support.",
      "Skilled in integrating web forms and APIs using HTML, CSS, JavaScript, and PHP, ensuring seamless functionality.",
    ],
  },
  {
    title: "Frontend Developer (Freelancer)",
    date: "January 2021 - Present", // Corrected "january" to "January"
    responsibilities: [
      "Collaborated with 14+ clients to design and develop over 7+ responsive and user-friendly websites, enhancing user experience across different devices.",
      "Implemented frontend frameworks such as React to create dynamic and interactive web applications.",
      "Collaborated with designers to ensure the implementation of visually appealing and consistent UI/UX designs.",
    ],
  },
];
