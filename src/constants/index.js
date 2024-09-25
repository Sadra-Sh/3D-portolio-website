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
  googlecloud,
  perl,
  swift,
  meta,
  tesla,
  shopify,
  carrent,
  rf,
  chess,
  bspd,
  v,
  jobit,
  tripguide,
  threejs,
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
    title: "Embedded Systems Development",
    icon: web,
  },
  {
    title: "Web Development",
    icon: mobile,
  },
  {
    title: "App Development",
    icon: backend,
  },
  {
    title: "Circuit Design",
    icon: creator,
  },
  {
    title: "PCB Design",
    icon: creator,
  },
];

const technologies = [
  {
    name: "C",
    icon: git,
  },
  {
    name: "C++",
    icon: typescript,
  },
  {
    name: "Python",
    icon: reactjs,
  },
  {
    name: "Verilog",
    icon: mongodb,
  },
  {
    name: "Assembly",
    icon: redux,
  },
  {
    name: "Postman",
    icon: nodejs,
  },
  {
    name: "Firebase Console",
    icon: tailwind,
  },
  {
    name: "Google Cloud Console",
    icon: googlecloud,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Java",
    icon: threejs,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "Javascript",
    icon: javascript,
  },
  {
    name: "SQL",
    icon: figma,
  },
  {
    name: "Swift",
    icon: swift,
  },
  {
    name: "Perl",
    icon: perl,
  },
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Exodus Orbitals",
    icon: tesla,
    iconBg: "#383E56",
    date: "May 2024 - September 2024",
    points: [
      "Established a robust communication protocol between Raspberry Pi and Arduino for a satellite ground simulator.",
      "Implemented voltage conversion solutions to effectively manage communication and protect hardware integrity.",
      "Conducted thorough testing of the communication protocol and hardware interfaces to ensure reliable performance in simulation environments.",
      "Actively contributed to collaborative projects within the organization.",
    ],
  },
  {
    title: "Computer Engineer",
    company_name: "University of Toronto Formula Racing Team",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "August 2023 - Present",
    points: [
      "Developed firmware in C++ for microcontroller-based systems, enabling efficient processing of complex sensor data.",
      "Diagnosed and resolved hardware and communication issues using CAN bus protocols for sensor and controller systems.",
      "Designed and developed a PCB with safety-critical features, ensuring compliance with industry regulations.",
      "Led the manufacturing and testing of multiple PCBs, conducting thorough validation to ensure functionality and reliability."
    ],
  },
  {
    title: "Founder",
    company_name: "S.S. Marketing",
    icon: shopify,
    iconBg: "#383E56",
    date: "May 2023 - Present",
    points: [
      "Founded a marketing agency focused on supporting businesses in increasing sales and expanding their customer base, even with limited budgets.",
      "Created dynamic websites to strengthen online visibility and improve client conversion rates.",
      "Strategized and implemented targeted outreach campaigns, including cold calling and email marketing, to generate leads and foster business growth.",
      "Developed and managed targeted advertising campaigns to effectively reach new markets and expand customer engagement.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "RF fronted - Software Defined Radio",
    description:
      "Designed and built the PCB for the RF front end of a Software Defined Radio (SDR), handling initial signal filtering and processing for Radio Frequency signals.",
    tags: [
      {
        name: "PCB Design",
        color: "blue-text-gradient",
      },
      {
        name: "Circuit Design",
        color: "green-text-gradient",
      },
      {
        name: "RF signals",
        color: "pink-text-gradient",
      },
    ],
    image: rf,
    source_code_link: "https://github.com/Sadra-Sh/Software-Defined-Radio-RF-frontend",
  },
  {
    name: "Chess Game",
    description:
      "A chess game on the Cyclone-V FPGA in C. It displays the chessboard on a VGA screen, verifies legal moves, accepts inputs from a PS/2 mouse, plays audio cues, and shows a timer on the HEX display.",
    tags: [
      {
        name: "FPGA",
        color: "blue-text-gradient",
      },
      {
        name: "C",
        color: "green-text-gradient",
      },
      {
        name: "PS2",
        color: "pink-text-gradient",
      },
    ],
    image: chess,
    source_code_link: "https://github.com/Sadra-Sh/Chess-Game",
  },
  {
    name: "Break System Plausibility Device",
    description:
    "Designed a 4-layer PCB using Altium Designer to implement a safety feature in a formula car, handling both analog and digital signals to meet FSAE standards.",    
    tags: [
      {
        name: "PCB Design",
        color: "blue-text-gradient",
      },
      {
        name: "Circuit Design",
        color: "green-text-gradient",
      },
      {
        name: "Mixed signals",
        color: "pink-text-gradient",
      },
    ],
    image: bspd,
    source_code_link: "https://github.com/Sadra-Sh/Break-System-Plausibility-Device-BSPD-",
  },
  {
    name: "Retro Racing Game",
    description:
    "Worked with a partner to develop a retro racing game on the Cyclone-V FPGA using Verilog.",    
    tags: [
      {
        name: "FPGA",
        color: "blue-text-gradient",
      },
      {
        name: "Game Dev",
        color: "green-text-gradient",
      },
      {
        name: "Verilog",
        color: "pink-text-gradient",
      },
    ],
    image: v,
    source_code_link: "https://github.com/Sadra-Sh/241_project",
  },
];

export { services, technologies, experiences, testimonials, projects };
