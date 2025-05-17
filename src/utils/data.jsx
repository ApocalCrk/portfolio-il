import { UAJY, Mattcom, SMKHasanah, InfiniteLearning, Himaforka } from "./icons";

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
    company: "Infinite Learning Indonesia",
    position: "Web App Developer",
    duration: "September 2024 - January 2025",
    desc: "I worked as a web app developer at Infinite Learning Indonesia. Built AI-powered crop recommendation system using React.js, Express.js, and weather data APIs.",
    skills: "React.js, Express.js, MySQL, Weather APIs, AI",
    image: <InfiniteLearning />,
  },
  {
    company: "Community Service Program",
    position: "Group Leader",
    duration: "July 2024 - August 2024",
    desc: "I was the group leader of a community service program at Atma Jaya University Yogyakarta. I was responsible for leading a team and make the program successful.",
    skills: "Leadership, Teamwork, Communication",
    image: <UAJY />,
  },
  {
    company: "Himpunan Mahasiswa Informatika UAJY",
    position: "Vice Coordinator",
    duration: "October 2022 - September 2023",
    desc: "I was the vice coordinator of the academic and achievement division at Himpunan Mahasiswa Informatika UAJY. I was responsible for organizing academic events.",
    skills: "Leadership, Teamwork, Communication",
    image: <Himaforka />,
  },
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
    title: "National Mobile & Website Development Competition",
    proficency: "Runner Up",
    company: "Infinite Learning Indonesia",
    skills: "Web Development, Mobile Development, Problem Solving",
    link: "https://www.linkedin.com/posts/ferdyfrms_innovers2024-codercompetition-react-activity-7269389010802761729-eouf?utm_source=share&utm_medium=member_desktop&rcm=ACoAADQLw64Baatz68FwtAScFLpOF3F_U5H-zes",
    date: "November 2024",
  },
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
    title: "AI-Based Crop Recommender with Weather Prediction and Soil Prediction Using GIS",
    platform: "Web",
    link: "mahitala-re.vercel.app",
    description:
      "AI-Based Crop Recommender with Weather Prediction and Soil Prediction Using GIS is a web application that provides crop recommendations based on weather and soil data. The application uses machine learning algorithms to predict the best crops to plant based on the user's location and soil conditions.",
    images: [],
    techStack: ["React.js", "Express.js", "MySQL", "Weather APIs", "AI", "Firebase Messaging"],
    apis: ["BMKG API", "SoilGrids API"],
  },
  {
    title: "SIATMA UAJY (Unofficial)",
    platform: "Mobile",
    link: "https://github.com/apocalcrk/siatma-release",
    description:
      "SIATMA UAJY is an application used to facilitate students in viewing lecture schedules, grades, and other information. This application can also be used to take attendance online. In its development, this application uses the Dart programming language with the Flutter framework and uses APIs from the SIATMA, SIKMA, KRS, and UAJY Academic Guidance websites. (The application built is unofficial)",
    images: [],
    techStack: ["Flutter", "Dart", "Firebase"],
    apis: ["SIATMA API", "SIKMA API", "KRS API", "UAJY Academic Guidance API"],
  },
  {
    title: "Kuta Village",
    platform: "Web",
    link: "kutavillage.com",
    description:
      "Kuta Village is a web application that serves as a digital platform for the Kuta Village community, providing information, services, and announcements to the residents.",
    images: [],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    apis: [],
  },
  {
    title: "Padukuhan Ngasem",
    platform: "Web",
    link: "https://github.com/apocalcrk/padukuhan-ngasem",
    description:
      "Developed as part of a Community Service Program (KKN), serves as a digital platform for the community, providing information, services, and announcements to the residents. Utilized the Next.js framework for building a dynamic and responsive web interface, ensuring smooth user interaction and an optimized browsing experience.Integrated Firebase for backend services, including real-time database management, authentication, and hosting, which enhanced the website's performance and scalability.",
    images: [],
    techStack: ["Next.js", "Firebase", "Tailwind CSS"],
    apis: [],
  },
  {
    title: "Atma Kitchen",
    platform: "Web & Mobile",
    link: "https://github.com/apocalcrk/",
    description:
      "Atma Kitchen is a food ordering platform created for a coursework project, offering cakes, snacks, and beverages. Developed with Laravel for the backend and MySQL for data management, it ensures high performance. The web interface uses Next.js, while Flutter supports the mobile app, allowing cross-platform compatibility. Key features include user registration, login, ordering, and notifications, with ongoing enhancements based on user feedback.",
    images: [],
    techStack: ["React.js", "Laravel", "Flutter", "MySQL"],
    apis: [],
  },
  {
    title: "Gimme",
    platform: "Web & Mobile",
    link: "github.com/apocalcrk/gimme",
    description:
      "Gimme is a mobile fitness app to help users discover nearby gyms, explore exercises, manage to-do lists, and track workout stats. The app is built with Flutter for cross-platform compatibility, ensuring a seamless experience on both iOS and Android devices. The backend is powered by Laravel, providing robust data management and user authentication. Users can easily register, log in, and access personalized workout plans and progress tracking.",
    images: [],
    techStack: ["Flutter", "Laravel", "Firebase", "MySQL", "Tailwind CSS", "TypeScript", "Next.js"],
    apis: [],
  },
  {
    title: "E Perlib",
    platform: "Web",
    link: "github.com/apocalcrk/eperlib",
    description:
      "E Perlib is a web application designed for library management, developed as part of a coursework project. It includes features such as book management, member management, and borrowing/returning books. The application is built using the Laravel framework and MySQL database.",
    images: [],
    techStack: ["Laravel", "Tailwind CSS", "Bootstrap", "MySQL"],
    apis: ["UAJY Academic Guidance API"],
  },
  {
    title: "Informatics Festival #11",
    platform: "Web",
    link: "github.com/HIMAFORKA-UAJY/ifest-dash",
    description:
      "Maintaining and updating the registration logic of the event dashboard from the previous Infomatics Festival #10. The Informatics Festival is an annual event organized by the Informatics Engineering Study Program at Atma Jaya University Yogyakarta. The event includes various competitions, workshops, and seminars in the field of informatics.",
    images: [],
    techStack: ["Laravel", "Bootstrap", "MySQL"],
    apis: []
  },
  {
    title: "Informatics Festivatal #10",
    platform: "Web",
    link: "github.com/HIMAFORKA-UAJY/ifest-dash",
    description:
      "Informatics Festival is an annual event organized by the Informatics Engineering Study Program at Atma Jaya University Yogyakarta. The event includes various competitions, workshops, and seminars in the field of informatics. I was responsible for developing the website for the event, which included features such as registration, schedule, and information about the event.",
    images: [],
    techStack: ["Laravel", "Bootstrap", "MySQL"],
    apis: []
  },
  {
    title: "Edu Green Indonesia",
    platform: "Web",
    link: "https://edugreenindonesia.com/",
    description:
      "Worked as a freelance full-stack developer, responsible for creating an informational website for an English language institute, including a registration form and process for enrolling in English courses.",
    images: [],
    techStack: ["Laravel", "Bootstrap", "MySQL"],
    apis: []
  }
];

export const education = [
  {
    school: "Atma Jaya University Yogyakarta",
    degree: "Bachelor of Computer Science",
    period: "2021 - Present",
    logo: <UAJY />,
    description: "Currently pursuing a Bachelor's degree in Computer Science.",
  },
  {
    school: "Infinite Learning Indonesia",
    degree: "Independent Study Program",
    period: "September 2024 - December 2024",
    logo: <InfiniteLearning />,
    description: "Participated in an independent study program focused on web development",
  },
  {
    school: "Vocational High School Hasanah Pekanbaru",
    degree: "Software Engineering",
    period: "2018 - 2021",
    logo: <SMKHasanah />,
    description:
      "Specialized in Software Engineering, with a focus on programming and software development.",
  }
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
