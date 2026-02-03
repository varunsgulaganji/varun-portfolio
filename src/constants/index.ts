
import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  Event,
  The,
  Algebrik
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Angular Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Support Engineer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Angular Developer",
    companyName: "Abhay Events",
    icon: Event,
    iconBg: "#FDFDFD",
    date: " Oct 2024 ",
    points: [
      "Developed and maintaining web applications using Angular.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Associative, Operations ",
    companyName: "The Reward Store",
    icon: The,
    iconBg: "#FDFDFD",
    date: "July 2025 - Jan 2026",
    points: [
      "Strong analytical, problem-solving, communication, and interpersonal skills with the ability to interact effectively at all organizational levels.",
      "Provided end-to-end customer and technical support for digital gift voucher operations, resolving functional, technical, and operational issues within SLA.",
      "Acted as the primary point of contact for product-related queries and escalations, ensuring timely resolution and high customer satisfaction.",
      "Utilized SQL queries and scripts for data management, alerts, and operational monitoring to improve system efficiency.",
    ],
  },
  {
    title: "Technical Support",
    companyName: "Algebrik AI",
    icon: Algebrik,
    iconBg: "#FDFDFD",
    date: "Jan 2026 - Ongoing",
    points: [
      "Working as a Technical Support Engineer at Algebrik AI, providing end-to-end application and customer support.",
      "Handling incident management, troubleshooting technical and functional issues, and ensuring resolution within defined SLAs.",
      "Collaborating with engineering teams to identify root causes, escalate critical issues, and maintain platform stability."
      
    ],
  }
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Varun proved me wrong.",
    name: "Abhay Garwad",
    designation: "CEO",
    company: "Abhay Events",
    image: "src/assets/company/abhay.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Varun does.",
    name: "Amogh Goni",
    designation: "Consultant",
    company: "All",
    image: "src/assets/company/Goni.jpg",
  },
  {
    testimonial:
      "After Varun optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Aditya Patil",
    designation: "Team Lead",
    company: "Volvo Company",
    image: "src/assets/company/addy.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Portfolio",
    description:
      "Developed and maintained Angular-based web applications, collaborated with cross-functional teams, implemented responsive and cross-browser designs, and actively participated in code reviews to ensure high-quality deliverables.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "mysqlworkbench",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Event,
    sourceCodeLink: "https://github.com/varunsgulaganji/abhay",
  }
];

export { services, technologies, experiences, testimonials, projects };
