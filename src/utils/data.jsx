import { UAJY, Mattcom, SMKHasanah, InfiniteLearning, Himaforka } from "./icons";

import { FaCode, FaServer, FaTable, FaTools } from "react-icons/fa";

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
    title: "Mobile & Website Development Competition",
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
    title: "CipherFi",
    platform: "Web & Mobile",
    link: "https://github.com/ApocalCrk/cipherfi",
    description:
      "A comprehensive financial news aggregation and portfolio management platform built as a FastAPI backend service. It serves as the core engine for collecting, processing, and delivering financial information to support informed investment decisions. Features include RSS feed scraping from 20+ sources, AI-powered summarization, multi-asset portfolio tracking, real-time P&L calculations, and intelligent alert systems.",
    images: [],
    techStack: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Redis", "APScheduler", "Firebase Admin SDK", "FCM", "SMTP", "Custom LLM API"],
    apis: ["YFinance", "Custom LLM", "Firebase", "SMTP", "RSS Feeds"],
  },
  {
    title: "Mahitala",
    platform: "Web",
    link: "https://mahitala.sudolabs.cloud/",
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
    link: "https://kutavillage.com",
    description:
      "Kuta Village is a web application that serves as a digital platform for the Kuta Village community, providing information, services, and announcements to the residents.",
    images: [],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    apis: [],
  },
  {
    title: "Padukuhan Ngasem",
    platform: "Web",
    link: "https://ngasem.sudolabs.cloud/",
    description:
      "Developed as part of a Community Service Program (KKN), serves as a digital platform for the community, providing information, services, and announcements to the residents. Utilized the Next.js framework for building a dynamic and responsive web interface, ensuring smooth user interaction and an optimized browsing experience.Integrated Firebase for backend services, including real-time database management, authentication, and hosting, which enhanced the website's performance and scalability.",
    images: [],
    techStack: ["Next.js", "Firebase", "Tailwind CSS"],
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
    title: "Informatics Festival",
    platform: "Web",
    link: "https://ifest.sudolabs.cloud/",
    description:
      "Maintaining and updating the registration logic of the event dashboard from the previous Infomatics Festival #10. The Informatics Festival is an annual event organized by the Informatics Engineering Study Program at Atma Jaya University Yogyakarta. The event includes various competitions, workshops, and seminars in the field of informatics.",
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
    period: "2021 - 2025",
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
      { name: "PHP"},
      { name: "Dart"},
      { name: "TypeScript"},
      { name: "Python"},
    ],
  },
  backend: {
    title: "Frameworks & Libraries",
    icon: FaServer,
    skills: [
      { name: "Laravel"},
      { name: "React.js/Next.js"},
      { name: "Flutter"},
      { name: "Django"},
    ],
  },
  design: {
    title: "Database",
    icon: FaTable,
    skills: [
      { name: "MySQL"},
      { name: "PostgreSQL"},
      { name: "SQLite"},
      { name: "Firebase Firestore"},
      { name: "MongoDB"}
    ],
  },
  tools: {
    title: "Tools & Others",
    icon: FaTools,
    skills: [
      { name: "Git/GitHub"},
      { name: "Docker/Kubernetes"},
      { name: "CI/CD"},
      { name: "Testing"},
    ],
  },
};
