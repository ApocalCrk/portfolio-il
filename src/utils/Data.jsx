import { UAJY, Mattcom, SMKHasanah } from "./icons";

import { FaCode, FaServer, FaPalette, FaTools } from "react-icons/fa";

// siatma
import scafSiatma from "../assets/images/projects/siatma/1.jpg";
import loginSiatma from "../assets/images/projects/siatma/2.jpg";
import calSiatma from "../assets/images/projects/siatma/3.jpg";
import homeSiatma from "../assets/images/projects/siatma/4.jpg";
import profSiama from "../assets/images/projects/siatma/5.jpg";

// kkn
import homeKkn from "../assets/images/projects/kkn/1.png";
import umkmKkn from "../assets/images/projects/kkn/3.png";
import KontakKkn from "../assets/images/projects/kkn/4.png";
import adminKkn from "../assets/images/projects/kkn/5.png";

// atma kitchen
import homeAtma from "../assets/images/projects/atmak/1.png";
import detailAtma from "../assets/images/projects/atmak/2.png";
import profAtma from "../assets/images/projects/atmak/3.png";
import dashboardAtma from "../assets/images/projects/atmak/4.png";

export const Experiences = [
  {
    company: "Universitas Atma Jaya Yogyakarta",
    position: "Lecturer Assistant",
    duration: "February 2023 - July 2023",
    desc: "I worked as a lecturer assistant at Universitas Atma Jaya Yogyakarta. I was responsible for helping lecturers in teaching students.",
    skills: "Algorithm, Data Structure, C Programming",
    image: <UAJY />,
  },
  {
    company: "Mattcom Indonesia",
    position: "Fullstack Developer",
    duration: "Jan 2020 - Mei 2020",
    desc: "I worked as a fullstack developer at Mattcom Indonesia. I was responsible for developing web applications and mobile applications for clients.",
    skills: "Content Management System (CMS), Full-Stack Development",
    image: <Mattcom />,
  },
];

export const Certificates = [
  {
    title: "Problem Solving",
    proficency: "Intermediate",
    company: "HackerRank",
    skills: "Problem Solving, Data Structure, Algorithm, Python",
    link: "https://www.hackerrank.com/certificates/35df65426eeb",
    date: "April 2022",
  },
  {
    title: "Certificate of Competency",
    proficency: "Expert",
    company: "PT Garuda Cyber Indonesia",
    skills: "Laravel, PHP, JavaScript, MySQL",
    link: "https://drive.google.com/file/d/1JG4leKbd_SU8M3xd4n2mSQTCdo2hP9Ds/view",
    date: "March 2021",
  },
  {
    title: "Problem Solving",
    proficency: "Basic",
    company: "HackerRank",
    skills: "Problem Solving, Data Structure, Algorithm, Python",
    link: "https://www.hackerrank.com/certificates/63aefc7cb724",
    date: "February 2021",
  },
  {
    title: "Python",
    proficency: "Basic",
    company: "HackerRank",
    skills: "Python, Problem Solving",
    link: "https://www.hackerrank.com/certificates/a08a3ccd8e7c",
    date: "February 2021",
  },
  {
    title: "Bakti Backend Developer",
    proficency: "Basic",
    company: "ASIOTI, Kominfo, & Kemenperin RI",
    skills: "Python",
    link: "https://drive.google.com/file/d/1q5735DXJ5G8kE3E2WnF2zuAQcOnsf70I/view",
    date: "September 2020",
  },
];

export const projects = [
  {
    title: "SIATMA UAJY Mobile App",
    platform: "Mobile",
    link: "https://github.com/apocalcrk/siatma-release",
    description:
      "SIATMA UAJY is an application used to facilitate students in viewing lecture schedules, grades, and other information. This application can also be used to take attendance online. In its development, this application uses the Dart programming language with the Flutter framework and uses APIs from the SIATMA, SIKMA, KRS, and UAJY Academic Guidance websites. (The application built is unofficial)",
    images: [scafSiatma, loginSiatma, homeSiatma, calSiatma, profSiama],
    techStack: ["Flutter", "Dart", "Firebase"],
    apis: ["SIATMA API", "SIKMA API", "KRS API", "UAJY Academic Guidance API"],
  },
  {
    title: "Atma Kitchen",
    platform: "Web & Mobile",
    link: "https://github.com/apocalcrk/",
    description:
      "Atma Kitchen is a food ordering platform created for a coursework project, offering cakes, snacks, and beverages. Developed with Laravel for the backend and MySQL for data management, it ensures high performance. The web interface uses Next.js, while Flutter supports the mobile app, allowing cross-platform compatibility. Key features include user registration, login, ordering, and notifications, with ongoing enhancements based on user feedback.",
    images: [homeAtma, detailAtma, profAtma, dashboardAtma],
    techStack: ["React.js", "Laravel", "Flutter", "MySQL"],
    apis: [],
  },
  {
    title: "Padukuhan Ngasem",
    platform: "Web",
    link: "https://github.com/apocalcrk/padukuhan-ngasem",
    description:
      "Developed as part of a Community Service Program (KKN), serves as a digital platform for the community, providing information, services, and announcements to the residents. Utilized the Next.js framework for building a dynamic and responsive web interface, ensuring smooth user interaction and an optimized browsing experience.Integrated Firebase for backend services, including real-time database management, authentication, and hosting, which enhanced the website's performance and scalability.",
    images: [homeKkn, umkmKkn, KontakKkn, adminKkn],
    techStack: ["Next.js", "Firebase", "Tailwind CSS"],
    apis: [],
  }
];

export const education = [
  {
    school: "Vocational High School Hasanah Pekanbaru",
    degree: "Software Engineering",
    period: "2018 - 2021",
    logo: <SMKHasanah />,
    description:
      "Specialized in Software Engineering, with a focus on programming and software development.",
  },
  {
    school: "Atma Jaya University Yogyakarta",
    degree: "Bachelor of Computer Science",
    period: "2021 - 2025",
    logo: <UAJY />,
    description: "Currently pursuing a Bachelor's degree in Computer Science.",
  },
];

export const skills = {
  frontend: {
    title: "Programming Languages",
    icon: FaCode,
    skills: [
      { name: "PHP", level: 95 },
      { name: "Dart", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "Python", level: 80 },
    ],
  },
  backend: {
    title: "Frameworks & Libraries",
    icon: FaServer,
    skills: [
      { name: "Laravel", level: 95 },
      { name: "React.js/Next.js", level: 90 },
      { name: "Flutter", level: 90 },
      { name: "Django", level: 80 },
    ],
  },
  design: {
    title: "Design",
    icon: FaPalette,
    skills: [
      { name: "UI/UX Design", level: 90 },
      { name: "Figma/Adobe XD", level: 85 },
      { name: "Design Systems", level: 88 },
      { name: "Prototyping", level: 85 },
    ],
  },
  tools: {
    title: "Tools & Others",
    icon: FaTools,
    skills: [
      { name: "Git/GitHub", level: 92 },
      { name: "Docker/Kubernetes", level: 85 },
      { name: "CI/CD", level: 85 },
      { name: "Testing", level: 85 },
    ],
  },
};
