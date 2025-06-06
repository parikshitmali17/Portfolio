import React from "react";
import { Box } from "@mui/material";
import ProjectCard from "./ProjectCard"; // adjust path if needed

const ProjectsGrid = () => {
  const projects = [
    {
  title: "PWD Nurturance",
  techStack: "Java, Android Studio, Text-to-Speech, AAC",
  problem: "Individuals with verbal communication difficulties lacked effective tools to express themselves independently.",
  solution: "Developed a patented multi-language AAC app that empowers users with text-to-audio output, emergency calls, and conversation modes.",
  outcome: "Enhanced communication autonomy for users with disabilities and improved daily life interaction across English, Hindi, and Marathi.",
  liveLink: "", // Add live link if available
  codeLink: "", // Add code repository link if open source or private
  tags: ["Patented", "Android", "AAC", "Assistive Tech"]
}
,
  {
  title: "Movie Mania",
  techStack: "React, MUI, Node.js, TMDB API",
  problem: "Users struggled to find trending, popular, or genre-specific movies in one place.",
  solution: "Built a responsive movie database app using React and TMDB API with features like search, details view, and favorites.",
  outcome: "Enhanced user experience through dynamic API integration and improved discoverability of trending movies.",
  liveLink: "https://your-movie-app-link.vercel.app", // replace with actual link if live
  codeLink: "https://github.com/parikshitm123/movie-mania", // replace with actual repo link
  tags: ["React", "TMDB API", "MUI", "Responsive UI"],
}, {
  title: "Web Mass Mailer Dispatcher",
  techStack: "Node.js, Bootstrap",
  problem: "Sending thousands of emails manually was time-consuming and error-prone.",
  solution: "Developed a web-based mass mailer that automates dispatching bulk emails with a single click using Node.js.",
  outcome: "Increased email efficiency by 90% and reduced human error. Enabled scalable communication for events and announcements.",
  liveLink: "https://event-app.vercel.app", // Update if actual live link differs
  codeLink: "https://github.com/parikshitm123/event-app",
  tags: ["Node.js", "Mailing", "Automation", "Bootstrap"],
}

    // Add more project objects as needed
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 3,
        justifyContent: "center", // or "flex-start"
        padding: 2,
      }}
    >
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </Box>
  );
};

export default ProjectsGrid;
