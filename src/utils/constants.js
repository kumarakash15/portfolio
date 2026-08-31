import resume from "../assets/Akash_Kumar_Sahoo_Resume.pdf";
// ==============================
// Personal Information
// ==============================
export const personalInfo = {
  name: "Akash Kumar Sahoo",
  title: "Full Stack Web Developer",
  email: "akashsahoo31538@gmail.com",
  location: "Rajnagar, Odisha, India",
  tagline:
    "Building responsive, secure, and scalable web applications with modern technologies.",
  resume: resume,
  // Changed bio to an array of strings
  bio: [
    "Full Stack Web Developer skilled in Node.js, Express.js, MongoDB, MySQL, and React.js. Strong in building responsive, secure, and scalable web applications with a solid foundation in JavaScript, RESTful APIs, and MVC architecture.",
    "Eager to contribute to high-quality development and grow as a software developer."
  ],
};

// ==============================
// Social Links
// ==============================
export const socialLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/akash150604/" },
  { name: "GitHub", url: "https://github.com/kumarakash15" },
  { name: "LeetCode", url: "https://leetcode.com/u/kumar_akash_15/" },
  { name: "Instagram", url: "https://www.instagram.com/akash_sahoo_15/" },
  { name: "Twitter", url: "https://x.com/AkashKu74567742" },
  { name: "Facebook", url: "https://www.facebook.com/akash.kumarsahoo.15" },
];

// ==============================
// Stats / State
// ==============================
export const stats = [
  {
    label: "Projects",
    value: "10+",
  },
  {
    label: "Technologies",
    value: "15+",
  },
  {
    label: "Leet Code",
    value: "10+",
  },
  {
    label: "Hackathons",
    value: "3+",
  },
  {
    label: "Certifications",
    value: "5+",
  },
];

// ==============================
// Education
// ==============================
export const education = [
  {
    id: 1,
    institution: "Einstein Academy of Technology and Management",
    location: "Khordha, Odisha",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    duration: "2024 – 2027",
    result: "CGPA: 7.5",
  },
  {
    id: 2,
    institution: "S.K.D.A.V. Government Polytechnic",
    location: "Rourkela, Odisha",
    degree: "Diploma in Information Technology",
    duration: "2021 – 2024",
    result: "68.51%",
  },
  {
    id: 3,
    institution: "Surajmal Higher Secondary School",
    location: "Rengali,Sambalpur,Odisha, India",
    degree: "Higher Secondary Education (12th)",
    duration: "2019 – 2021",
    result: "67%",
  },
  {
    id: 4,
    institution: "Nilakantheswar High School",
    location: "Bhatapara,Odisha, India",
    degree: "Secondary Education (10th)",
    duration: "2019",
    result: "70%",
  },
];


// ==============================
// Navigation Links
// ==============================
export const navLinks = [
  {
    id: "about",
    label: "About",
    href: "#about",
  },
  {
    id: "education",
    label: "Education",
    href: "#education",
  },
  {
    id: "skills",
    label: "Skills",
    href: "#skills",
  },
  {
    id: "Projects",
    label: "Projects",
    href: "#Projects",
  },
  {
    id: "services",
    label: "services",
    href: "#services",
  },
  {
    id: "Certificate & Hackthon",
    label: "Certificate & Hackthon",
    href: "#Certificate & Hackthon",
  },
  {
    id: "contact",
    label: "Contact",
    href: "#contact",
  },
];

// ==============================
// Certifications
// ==============================
export const certifications = [
    "Introduction to Front-End Development – Meta (Coursera)",
    "Web Development with HTML, CSS, JavaScript – IBM (Coursera)",
    "Software Testing – NIIT Foundation"
];

// ==============================
// Hackathons
// ==============================
export const hackathons = [
    "BPUT Hackathon – Zonal Level (Oct 2025)",
    "INSPRANO Hackathon – Govt. College of Engineering, Kalahandi (Oct 2025)",
    "Adastra 2025 Hackathon – Einstein Academy, Khordha (Feb 2025)"
];
