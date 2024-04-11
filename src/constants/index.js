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
  CPUT,
  Securicom,
  threejs,
  life,
  school
  
} from "../assets";

export const navLinks = [
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

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
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

const education = [
  {
    title: "De Kuilen High School",
    company_name: "2012 - 2016",
    icon: school,
    iconBg: "#383E56",
    date: "December 2017 - January 2019",
    points: [
      "English",
      "Afrikaans",
      "Mathematics Lite",
      "Geography",
      "History",
      "Biography"

    ],
  }, 
  {
    title: "Cape Peninsula University of Technology",
    company_name: "2017-2021",
    icon: CPUT,
    iconBg: "#E6DEDD",
    date: "Information Communication Technology(ICT)",
    points: [
      "Agile Development Methodologies",
      "Programming Fundamentals",
      "Software Engineering",
      "Database Design and Development",
      "User Experience Design (UX Design)",
      "Cybersecurity", 
      "Software Project Management"
    ],
  },

  {
    title: "Life Choices",
    company_name: "2023-2024",
    icon: life,
    iconBg: "#E6DEDD",
    points: [
      "Javascript",
      "HTML",
      "CSS",
      "MySQL",
      "Vue.js",
      "Node", 
      "Git"
    ],
  },
];

const experiences = [
  {
    title: "Junior Network Technician Volunteer",
    company_name: "Cape Peninsula University of Technology: CPUT",
    icon: CPUT,
    iconBg: "#383E56",
    date: "December 2017 - January 2019",
    points: [
      "Troubleshoot network issues and assist in resolving connectivity problems.",
      "Helped set up and maintain network equipment, including routers, switches, and access points.",
      "Assisted with network configuration and installation tasks.",
      "Collaborated with the network team to support ongoing network maintenance and upgrades.",
      "Provided assistance to end-users in resolving basic network-related inquiries.",
      "Gained hands-on experience in network troubleshooting, equipment maintenance, and network administration."

    ],
  }, 
  {
    title: "Support Engineer",
    company_name: "Securicom",
    icon: Securicom,
    iconBg: "#E6DEDD",
    date: "Febuary 2022 - March 2023",
    points: [
      "Investigate mail issues",
      "Identifying and blocking malicious emails such as phishing mails and spam mails• Identifying and blocking malicious emails.",
      "Assisting and solving customer inquiries such as adding users to requested containers",
      "Monitoring of mail systems and portals",
      "Answering the phone and assigning tickets to different level engineers"
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "Jodi is outstanding in his work. His ability to explain complex concepts with clarity and patience has been invaluable to our class. Jodi's passion for coding is infectious, making him an asset to our learning community",
    name: "Niyaaz",
    // designation: "CFO",
    // company: "Acme Co",
    image: "https://iili.io/J7D4aQ1.png",
  },
  {
    testimonial:
      "Jodi's proficiency in various programming languages and problem-solving skills are truly impressive. Jodi's collaborative nature and willingness to share knowledge have made helped me understand more.",
    name: "Joel",
    // designation: "COO",
    // company: "DEF Corp",
    image: "https://iili.io/J7D4xEu.png",
  },
  {
    testimonial:
      "Since meeting Jodi I've come to appreciate all of his skills. Jodi displays excellent leadership qualities, the ability to adapt to his environment and overcome and excel with excellence in any challenge he faces.",
    name: "Jodie",
    // designation: "CTO",
    // company: "456 Enterprises",
    image: "https://iili.io/J7mcbcJ.png",
  },
  // {
  //   testimonial:
  //     "Jodi is a dedicated person and does his best on each and every project that gets handed to him. He has an amazing personality and conducts himself very professionally.",
  //   name: "Danyaal",
  //   // designation: "CTO",
  //   // company: "456 Enterprises",
  //   image: "https://iili.io/J7mcbcJ.png",
  // },
  // {
  //   testimonial:
  //     "Jodi is a pleasure to work with. He is dedicated, hardworking and a natural leader. His professionalism is unparelled and his work ethic is second to none.",
  //   name: "Ni-shaat",
  //   // designation: "CTO",
  //   // company: "456 Enterprises",
  //   image: "https://iili.io/J7mcbcJ.png",
  // },
  // {
  //   testimonial:
  //     "Jodi's web development skills exceeded my expectations. His technical prowess and dedication to creating a user-friendly and visually appealing website were evident throughout the entire process.",
  //   name: "Chad",
  //   // designation: "CTO",
  //   // company: "456 Enterprises",
  //   image: "https://iili.io/J7mcbcJ.png",
  // },
 ];

const projects = [
  {
    name: "Nike Landing Page",
    description:
      "A Nike landing page showcases captivating visuals of new products, with a clean header and prominent product highlights to engage visitors and encourage exploration.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: "https://iili.io/J74tsu1.md.png",
    source_code_link: "https://github.com/JodiAB/NikeLanding",
  },
  {
    name: "RedStore Eccommerce",
    description:"On the amateur eCommerce site, a focus is placed on simple design and intuitive functionality to ensure a smooth shopping experience for new online customers.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: "https://iili.io/J7Dvx14.md.png",
    source_code_link: "https://github.com/JodiAB/E-commerce",
  },
  {
    name: "Quiz Game",
    description:
      "In the quiz game project, a user-friendly interface is implemented, designed for easy navigation and engagement, perfect for newcomers.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: "https://iili.io/J7DvRp9.md.png",
    source_code_link: "hhttps://github.com/JodiAB/quiz",
  },
];

export { services, technologies, experiences, projects, testimonials, education};