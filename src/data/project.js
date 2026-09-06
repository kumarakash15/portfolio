import scan2exit from '../assets/projectimg/scan2exit.png'
import scan2know from '../assets/projectimg/scan2know.png'
import akstore from '../assets/projectimg/akstore.png'
import nexthub from '../assets/projectimg/nexthub.png'
export const projects = [
  {
    id: 1,
    title: "Scan2Exit – EGI Gate Pass",
    description:
      "Developed an Android-based Gate Pass Management System for students, admins, and campus security. Built the frontend using React Native and backend APIs using Node.js and Express.js. Designed a MongoDB database for student registration, authentication, and gate pass records. Implemented role-based access with admin verification, QR code-based leave passes, automatic pass expiry after expected return time +30 minutes, manual entry, and history tracking for security and admin monitoring.",
    image: scan2exit,
    category: "Android App",
    technologies: [
      "React Native",
      "Node.js",
      "Express.js",
      "MongoDB",
      "QR Code",
      "REST API"
    ],
    demoUrl: "https://expo.dev/accounts/eatmhostelteam/projects/scan2exit/builds/9f69e7d9-6567-4271-8e8c-0d1e6b8d884a",
    githubUrl: "https://github.com/eatmhostel/EGI-Gate-Pass"
  },

  {
    id: 2,
    title: "Scan2Know – Hostel Room Information System",
    description:
      "Developed a Smart Room Member Information System for hostels that provides instant access to student details through QR code scanning outside each room. Built the frontend using React.js and backend using Node.js and Express.js. Created an admin panel to manage student and room information. Automated data collection using Google Forms and Google Apps Script, then converted Excel form responses into JSON for backend integration. Added QR code generation and download functionality for each room.",
    image: scan2know,
    category: "Web Application",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "Google Forms",
      "Google Apps Script",
      "JSON",
      "QR Code"
    ],
    demoUrl: "https://scan2know-neon.vercel.app/",
    githubUrl: "https://github.com/eatmhostel/Scan2know"
  },

  {
    id: 3,
    title: "AKStore – Full Stack E-commerce Website",
    description:
      "Developed a full-stack e-commerce website inspired by Myntra using Node.js, Express.js, MongoDB, Mongoose, and EJS. Implemented user authentication, authorization, session management, secure routing, and CRUD operations for product management. Built cart and order management with dynamic pricing logic and created a seller dashboard for managing products, prices, and discounts. Followed MVC architecture with modular code and error handling.",
    image: akstore,
    category: "Web Application",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "EJS",
      "JavaScript",
      "MVC"
    ],
    demoUrl: "https://ak-store-xhhz.onrender.com/",
    githubUrl: "https://github.com/kumarakash15/Ak_store"
  },

  {
    id: 4,
    title: "NextHub – Airbnb Clone",
    description:
      "Developed a full-stack Airbnb clone using Node.js, Express.js, MongoDB, and EJS. Implemented MVC architecture and RESTful APIs for scalable backend development. Built dynamic property listing, booking, and user interaction features. Integrated MongoDB for efficient data storage and retrieval and designed a responsive UI using EJS templating for a seamless user experience.",
    image: nexthub,
    category: "Web Application",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "EJS",
      "REST API",
      "JavaScript",
      "MVC"
    ],
    demoUrl: "https://air-bnb-mvbv.onrender.com/listings",
    githubUrl: "https://github.com/kumarakash15/NextHub"
  }
];

export const categories = ["All", "Web Application", "Android App"];