import { Icons } from "@/components/icons";

export const DATA = {
  name: "Anubhav Singh",
  initials: "AS",
  url: "https://github.com/aanurraj",
  location: "Delhi, India",
  locationLink: "https://www.google.com/maps/place/Pune",
  description: "Software Engineer",
  summary:
    "I'm a Software Developer specializing in turning concepts into functional code with pixel-perfect precision. When not debugging or refactoring, you'll find me debating the merits of Moka Pot vs. French Press vs. Pour Over for the perfect Americano, diving into system architecture, or planning world domination (Bazinga!). I combine Richard Hendricks-level technical solutions with creative problem-solving, constantly improving my craft while avoiding those Hooli-sized mistakes.",
  avatarUrl: "https://avatars.githubusercontent.com/u/28955148?v=4",
  languages: ["JavaScript", "Java", "Python", "Go", "C++"],
  technologies: [
    "Node.js",
    "MongoDB",
    "Spring Boot",
    "Docker",
    "AWS",
    "Kubernetes",
    "MySQL",
  ],
  contact: {
    email: "anubhavraj.08@gmail.com",
    social: {
      GitHub: {
        url: "https://github.com/aanurraj",
        icon: Icons.github,
      },
      LinkedIn: {
        url: "https://www.linkedin.com/in/anubhavrajsingh/",
        icon: Icons.linkedin,
      },
      X: {
        url: "https://x.com/aanurraj",
        icon: Icons.x,
      },
    },
  },

  work: [
    {
      company: "Barclays",
      href: "https://home.barclays",
      badges: [],
      location: "Pune, India",
      title: "Software Engineer BA4",
      logoUrl: "/atomic.png",
      start: "Nov 2024",
      end: "Present",
      description:
        `Working in FinCrime to build a new platform for Anti Money Laundering (AML).`,
    },
    {
      company: "Infosy Limited",
      href: "https://www.infosys.com/",
      badges: [],
      location: "Pune, India",
      title: "Specialist Programmer L2",
      logoUrl: "/atomic.png",
      start: "Nov 2020",
      end: "Dec 2024",
      description:
        `Engineered more than 12 enterprise level application for one of the top 3 company by market cap. Notable backend includes a critical budget allocation for new jobs created.
        Technologies Used: NodeJs, Express.js, Java Springboot, Microservices, Python, Docker, Kubernetes, AWS, SAP HANA XS Classic and Advanced.`,
    },
    {
      company: "OpenMined",
      href: "https://openmined.org",
      badges: ["Open Source", "Remote"],
      location: "Remote",
      title: "Crypto SMPC Dev, OpenSource",
      logoUrl: "/atomic.png",
      start: "Jan 2020",
      end: "Nov 2020",
      description:
      "Worked on OpenMined's Privacy Preserving Machine Learning (PPML) library PySyft and supporting SyMPC library. Notable cotribution includes benchmarking different SMPC function and decoupling SyMPC from PySyft.",
    },
  ],

  projects: [ {
    title: "The Daily Highlight",
    description:
      "Brings my random kindle highlights daily into my inbox",
    technologies: [
      "Go Lang", "DynamoDB", "AWS Lambda"],
    links: [
      // {
      //   type: "Website",
      //   href: "",
      //   icon: <Icons.globe className="size-3" />,
      // },
      {
        type: "Source",
        href: "https://github.com/aanurraj/daily-kindle-email",
        icon: <Icons.github className="size-3" />,
      },
    ],
  }]
} as const;