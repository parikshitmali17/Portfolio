
import React from "react";
import { Box, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";

const ProjectsGrid = () => {
  const projects = [
    {
      title: "PWD Nurturance",
      techStack: "Java, Android Studio, Text-to-Speech, AAC",
      problem: "Individuals with verbal communication difficulties lacked effective tools to express themselves independently.",
      solution:
        "Developed a patented multi-language AAC app that empowers users with text-to-audio output, emergency calls, and conversation modes.",
      outcome:
        "Enhanced communication autonomy for users with disabilities and improved daily life interaction across English, Hindi, and Marathi.",
      liveLink: "",
      codeLink: "",
      tags: ["Patented", "Android", "AAC", "Assistive Tech"],
      images: ["/Images/HOME.jpg", "/Images/MULTILINGUAL.jpg","/Images/DAILY.jpg" ], // 👈 Your images here
    },
    {
      title: "Movie Mania",
      techStack: "React, MUI, Node.js, TMDB API",
      problem:
        "Users struggled to find trending, popular, or genre-specific movies in one place.",
      solution:
        "Built a responsive movie database app using React and TMDB API with features like search, details view, and favorites.",
      outcome:
        "Enhanced user experience through dynamic API integration and improved discoverability of trending movies.",
      liveLink: "https://movie-mania-a-movie-database.vercel.app/",
      codeLink: "https://github.com/parikshitmali17/MovieMania",
      tags: ["React", "TMDB API", "MUI", "Responsive UI"],
      images: [
        "/Images/Favourite Movies.png",
        "/Images/MovieDetail.jpg",
        "/Images/Trendinng Movies.png",
      ],
    },
    {
      title: "Web Mass Mailer Dispatcher",
      techStack: "Node.js, Bootstrap",
      problem:
        "Sending thousands of emails manually was time-consuming and error-prone.",
      solution:
        "Developed a web-based mass mailer that automates dispatching bulk emails with a single click using Node.js.",
      outcome:
        "Increased email efficiency by 90% and reduced human error. Enabled scalable communication for events and announcements.",
      liveLink: "https://web-mass-mailer-dispatcher.vercel.app/",
      codeLink: "https://github.com/parikshitmali17/Exposys-Intern-Deploy",
      tags: ["Node.js", "Mailing", "Automation", "Bootstrap"],
      images: ["/Images/HOMEEMAIL.png", "/Images/Modal.png","/Images/EmailUI.png"],
    },
    {
  title: "HarmonyHub – Modular Music Library",
  techStack: "React.js, Vite, Tailwind CSS, Module Federation, JWT (mock), Context API",
  problem:
  "Monolithic music apps lacked modularity and clean access control, making updates and scaling difficult.",

solution:
  "Built a micro frontend-based music library with module federation, mock JWT auth, and intuitive filtering via map, filter, and reduce.",

outcome:
  "Achieved fully modular deployment, cleaner role-based UI, and a smoother, scalable user experience.",

  liveLink: "https://main-mfe-nu.vercel.app/", 
  codeLink: "https://github.com/parikshitmali17/Main-MFE", 
  tags: [
    "Micro Frontend", 
    "React", 
    "JWT Auth", 
  ],
  images: [
    "/Images/HarmonyHub1.png",
    "/Images/HarmonyHub2.png",
    "/Images/HarmonyHub3.png"
  ],
}
,
    {
  title: "Face Search AI App",
  techStack: "React.js, Bootstrap, Node.js, Express.js, MongoDB, Stripe API",
  problem:
    "Manual facial identification was inefficient and lacked real-time responsiveness across devices. Secure user interactions and monetization options were missing.",
  solution:
    "Developed a full-stack facial recognition app with a fully responsive React.js interface, secure backend with Node.js and Express, MongoDB CRUD, Stripe-powered payments, and support for both image and video uploads.",
  outcome:
    "Achieved 20% faster response time and 30% better user interaction with scalable, secure architecture, enhancing usability and monetization potential.",
  // liveLink: "", // Add your live link if deployed
  // codeLink: "https://github.com/parikshitm123/face-search-ai", // Replace with your actual repo URL
  tags: [ "MERN", "Payment", "Full Stack Web Solution",],
  images: [
    "/Images/FaceKeyFeatures .png",
    "/Images/FacePayment.png",
    "/Images/FaceUsers.png"
  ],
}
,
    {
  title: "Auth Flow UI/UX: Login, Signup & Dashboard",
  techStack: "HTML, CSS, React",
  problem: "New users often found it confusing to register and log in due to poor navigation flow and lack of validation feedback.",
  solution: "Built a user-friendly authentication interface with real-time validation, seamless navigation between login and signup, and a simple dashboard view upon authentication.",
  outcome: "Improved user experience with clear navigation, validated inputs, and consistent UX across auth pages — ensuring smoother onboarding.",
  liveLink: "https://login-signup-dashboard-cyan.vercel.app/",
  codeLink: "https://github.com/parikshitmali17/Login-Signup-Dashboard", // Replace with actual repo
  tags: ["React", "UI/UX", "Login", "Signup", "Dashboard"],
  images: ["/Images/Dashboard.png", "/Images/Password Confrimation.png","/Images/Log In.png"],
},
{
  title: "Serverless Event Management System",
  techStack: "React.js, Node.js, AWS Lambda, API Gateway, DynamoDB, S3, SES",
  problem:
    "Traditional event management platforms required manual infrastructure scaling, incurred high operational costs, and demanded constant backend maintenance.",
  solution:
    "Engineered a fully serverless event management platform using AWS services. Integrated features include event CRUD operations, user authentication, automated email notifications, and seamless UI with React.",
  outcome:
    "Ongoing Project",
  liveLink: "http://event-serverless-management-system.s3-website.ap-south-1.amazonaws.com/", // Replace if different
  codeLink: "https://github.com/parikshitmali17/Serverless-Management-System", // Replace if private
  tags: ["AWS", "Serverless", "Event Management",],
  images: [
    "/Images/ServerlessHome.png",
    "/Images/ServerlessOurWork.png",
    "/Images/ServerlessHome2.png"
  ],
},{
  title: "Form Builder for Question Paper Generation",
  techStack: "THIS IS ONGOING PROJECT",
  problem:
    "Educators faced difficulties in manually creating diverse question formats like MCQs, Passages, Cloze tests, and Categorization with consistent formatting and structure.",
  solution:
    "Built an intuitive form builder platform allowing teachers to dynamically create and manage question papers with multiple types including MCQ, Passage-based, Cloze, and Categorize questions. Features include real-time form previews, question categorization, and CRUD operations for question sets.",
  outcome:
    "Enabling educators to build structured assessments faster with better accuracy and flexibility.",
  // liveLink: "", // Add your live link if deployed
  // codeLink: "https://github.com/parikshitm123/form-builder-question-paper", // Replace with your actual repo
  tags: ["THIS IS ONGOING PROJECT"],
  images: [
    "/Images/FormBuilder1.png",
     "/Images/FormBuilder2.png",
     "/Images/FormBuilder3.png"
  ],
  
}



  ];

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #17175f 0%, #0e1428 100%)',
        minHeight: '100vh',
        paddingTop: 8,
        paddingX: 2,
      }}
    >
      {/* 🔹 Centered Section Heading */}
      <Box
        sx={{
          textAlign: "center",
          marginBottom: 6,
          color: "white",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            fontFamily: "Montserrat, sans-serif",
            marginBottom: 1,
          }}
        >
          Our Work
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: "#c0c0c0",
            maxWidth: 600,
            marginX: "auto",
            fontStyle: "italic",
          }}
        >
          Real-world solutions built with purpose and precision.
        </Typography>
      </Box>

      {/* 🔹 Projects Grid */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "center",
          paddingBottom: 6,
        }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </Box>
    </Box>
  );
};

export default ProjectsGrid;
