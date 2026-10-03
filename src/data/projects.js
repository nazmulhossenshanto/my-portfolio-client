 
const projects = [
  {
    title: "Smart Deals",
    slug: "smart-deals",

    description:
      "A marketplace platform where users can list products, explore listings and place bids on products.",

    image: "/projects/smart-deals.png",

    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
    ],

    liveLink: "#",
    githubLink: "#",

    overview:
      "Smart Deals is a marketplace platform designed to connect sellers and buyers through a product listing and bidding workflow. Users can explore products, view product details and place bids on available listings.",

    features: [
      "User authentication with Firebase",
      "Product listing and management",
      "Product details and bidding workflow",
      "Buyer and seller related functionality",
      "Responsive user interface",
      "REST API integration",
    ],

    role:
      "I worked on the frontend interface, authentication flow, product management features and API integration.",

    challenges: [
      "Managing authenticated user state across the application",
      "Connecting frontend components with backend APIs",
      "Handling product and bid related data",
    ],

    solutions: [
      "Used Firebase Authentication for user authentication",
      "Created reusable React components for the interface",
      "Used REST APIs to communicate with the Express backend",
    ],
  },

  {
    title: "Zap Shift",
    slug: "zap-shift",

    description:
      "A delivery management platform designed to connect customers with delivery services through a modern web interface.",

    image: "/projects/zap-shift.png",

    technologies: [
      "React",
      "Firebase",
      "Node.js",
      "MongoDB",
    ],

    liveLink: "#",
    githubLink: "#",

    overview:
      "Zap Shift is a delivery management web application focused on creating a smooth experience for customers and delivery-related operations.",

    features: [
      "User authentication",
      "Responsive delivery-focused interface",
      "Service and coverage information",
      "Protected routes",
      "Firebase integration",
      "Backend API integration",
    ],

    role:
      "I worked on building the frontend application, authentication system, protected routes and integration with backend services.",

    challenges: [
      "Managing authentication and protected routes",
      "Creating reusable components for different sections",
      "Connecting frontend functionality with backend services",
    ],

    solutions: [
      "Used Firebase Authentication for login and registration",
      "Implemented protected routes using React Router",
      "Structured the application into reusable React components",
    ],
  },

  {
    title: "Shanto Portfolio",
    slug: "shanto-portfolio",

    description:
      "A modern developer portfolio focused on showcasing my frontend development work, technical skills and journey toward AI engineering.",

    image: "/projects/portfolio.png",

    technologies: [
      "React",
      "React Router",
      "Tailwind CSS",
      "DaisyUI",
      "Motion",
    ],

    liveLink: "#",
    githubLink: "#",

    overview:
      "This portfolio is designed to present my development journey, selected projects, technical skills and long-term direction toward AI engineering.",

    features: [
      "Responsive portfolio interface",
      "Reusable React components",
      "Dynamic project details",
      "React Router based navigation",
      "Project data driven architecture",
      "Modern dark themed UI",
    ],

    role:
      "I designed and developed the portfolio architecture, user interface, routing and reusable component structure.",

    challenges: [
      "Designing a portfolio that represents both frontend development and future AI goals",
      "Creating reusable project detail pages",
      "Maintaining a clean and scalable component structure",
    ],

    solutions: [
      "Used reusable React components throughout the application",
      "Implemented dynamic routes using React Router",
      "Separated project information into a dedicated data file",
    ],
  },
];

export default projects;
 
