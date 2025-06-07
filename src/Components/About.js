// import React from "react";
// import {
//   Box,
//   Typography,
//   Avatar,
//   Divider,
//   Stack,
//   Chip,
//   useTheme,
//   useMediaQuery,
// } from "@mui/material";
// import { motion } from "framer-motion";

// const AboutSection = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   return (
//     <Box
//       id="about"
//       component={motion.div}
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       viewport={{ once: true }}
//       sx={{
//         px: { xs: 2, sm: 6 },
//         py: 6,
//         maxWidth: "1000px",
//         mx: "auto",
        
//       }}
//     >
//       {/* Photo + Intro */}
//       <Stack direction={isMobile ? "column" : "row"} spacing={4} alignItems="center">
//         <Avatar
//           src="../Images/PASSPORT SIZE.jpg"
//           alt="Parikshit M"
//           sx={{ width: 120, height: 120, border: "3px solid #1976d2" }}
//         />
//         <Box>
//           <Typography variant="h4" fontWeight="bold" gutterBottom>
//             👋 Hey, I’m Parikshit Mali.
//           </Typography>
//           <Typography variant="h6" color="text.secondary">
//             Full-Stack Developer | Serverless Enthusiast | Builder of Impactful Tech
//           </Typography>
//         </Box>
//       </Stack>

//       <Divider sx={{ my: 4 }} />

//       {/* Journey */}
//       <Typography variant="h5" fontWeight="medium" gutterBottom>
//         🧭 My Journey So Far
//       </Typography>
//       <Typography variant="body1" sx={{ mb: 2 }}>
//         From leading student communities to building solutions for the differently abled, my journey
//         in tech has always been about <strong>impact, empathy, and innovation</strong>.
//         <br />
//         <br />
//         With 4+ years of hands-on experience, I specialize in{" "}
//         <strong>MERN Stack, PostgreSQL, and Serverless AWS</strong> (in progress). I’ve built scalable,
//         user-centric applications for real-world challenges — like my patented project{" "}
//         <strong>PWD Nuturance</strong>, an app designed to empower individuals with speech and communication
//         disabilities using Augmentative & Alternative Communication (AAC).
//       </Typography>

//       <Divider sx={{ my: 4 }} />

//       {/* Highlights */}
//       <Typography variant="h5" fontWeight="medium" gutterBottom>
//         🚀 Highlights from My Experience
//       </Typography>

//       <Typography variant="body1" sx={{ mb: 2 }}>
//         <strong>💡 PWD Nuturance – A Patented Tech Solution</strong>
//         <br />
//         I conceptualized and developed a mobile app that enables speech-disabled users to communicate
//         using text-to-audio output, initiate emergency calls, and converse through multiple modes —
//         in English, Hindi, and Marathi.
//         <br />
//         🏅 The project received an international patent (South Africa) and reflects my commitment to
//         inclusive technology and real-life problem-solving.
//       </Typography>

//       <Typography variant="body1" sx={{ mb: 2 }}>
//         <strong>👑 President – Competitive Examinations Cell (CEC)</strong>
//         <br />
//         As President of VIIT’s CEC, I led a team of 20+ core members and 100+ volunteers. We hosted
//         national-level seminars, partnered with industry leaders, and secured sponsorships to make
//         events financially self-sustaining.
//         <br />
//         📈 Our initiatives improved student awareness of UPSC, GATE, and other exams by 200% — all
//         while ensuring cost-effective, quality-driven learning opportunities.
//       </Typography>

//       <Divider sx={{ my: 4 }} />

//       {/* Tech Stack */}
//       <Typography variant="h5" fontWeight="medium" gutterBottom>
//         💻 Tech Stack I Work With
//       </Typography>
//       <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 2 }}>
//         <Chip label="React" color="primary" />
//         <Chip label="Node.js" color="primary" />
//         <Chip label="Express" color="primary" />
//         <Chip label="MongoDB" color="primary" />
//         <Chip label="PostgreSQL" color="primary" />
//         <Chip label="AWS Lambda" color="secondary" />
//         <Chip label="API Gateway" color="secondary" />
//         <Chip label="DynamoDB" color="secondary" />
//         <Chip label="Cognito" color="secondary" />
//         <Chip label="Tailwind" color="success" />
//         <Chip label="MUI" color="success" />
//         <Chip label="Framer Motion" color="success" />
//         <Chip label="JWT" color="info" />
//         <Chip label="OAuth2" color="info" />
//         <Chip label="Firebase Auth" color="info" />
//       </Stack>
//       <Typography variant="body2" color="text.secondary">
//         I believe in writing clean, maintainable code that solves real problems, not just passes tests.
//       </Typography>

//       <Divider sx={{ my: 4 }} />

//       {/* Fun Facts */}
//       <Typography variant="h5" fontWeight="medium" gutterBottom>
//         🌟 Fun Facts About Me
//       </Typography>
//       <Typography variant="body1" sx={{ mb: 2 }}>
//         🧗‍♂️ I love trekking through the Himalayas (Ladakh is next!)
//         <br />
//         🎶 Music is my daily energy booster.
//         <br />
//         🛠 I enjoy turning rough ideas into clean, working apps.
//       </Typography>

//       <Divider sx={{ my: 4 }} />

//       {/* Testimonial */}
//       <Typography variant="h5" fontWeight="medium" gutterBottom>
//         💬 A Soft Word from a Peer
//       </Typography>
//       <Typography
//         variant="body1"
//         fontStyle="italic"
//         color="text.secondary"
//         sx={{ maxWidth: "700px", mb: 2 }}
//       >
//         “Parikshit brings both heart and logic into tech. Whether leading teams or solving user
//         problems, he’s someone you want on your project.”
//         <br />— A colleague from the PWD Nuturance team
//       </Typography>

//       {/* CTA */}
//       <Typography
//         variant="h6"
//         color="primary"
//         fontWeight="bold"
//         sx={{ mt: 4, textAlign: "center" }}
//       >
//         🔗 Let’s Build Something Meaningful Together
//       </Typography>
//     </Box>
//   );
// };

// export default AboutSection;


import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Divider,
  Stack,
  Chip,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";

const AboutSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
     <Box
          sx={{
            background: 'linear-gradient(135deg, #17175f 0%, #0e1428 100%)',
            minHeight: '100vh',
            paddingTop: 8,
            paddingX: 2,
          }}
        >
    <Box
      id="about"
      component={motion.div}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      sx={{
        px: { xs: 2, sm: 6 },
        py: 6,
        maxWidth: "1000px",
        mx: "auto",
        backgroundColor: "#0f172a", // Slate dark
        color: "#f8fafc",            // Light text
        borderRadius: 4,
        boxShadow: "0 0 20px rgba(255,255,255,0.05)", 
      }}
    >
      {/* Photo + Intro */}
      <Stack direction={isMobile ? "column" : "row"} spacing={4} alignItems="center">
        <Avatar
          src="../Images/PASSPORT SIZE.jpg"
          alt="Parikshit M"
          sx={{ width: 120, height: 120, border: "3px solid #38bdf8" }}
        />
        <Box>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            👋 Hey, I’m Parikshit Mali.
          </Typography>
          <Typography variant="h6" sx={{ color: "#cbd5e1" }}>
            Full-Stack Developer | Serverless Enthusiast | Builder of Impactful Tech
          </Typography>
        </Box>
      </Stack>

      <Divider sx={{ my: 4, borderColor: "#334155" }} />

      {/* Journey */}
      <Typography variant="h5" fontWeight="medium" gutterBottom>
        🧭 My Journey So Far
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, color: "#e2e8f0" }}>
        From leading student communities to building solutions for the differently abled, my journey
        in tech has always been about <strong>impact, empathy, and innovation</strong>.
        <br />
        <br />
        With 4+ years of hands-on experience, I specialize in{" "}
        <strong>MERN Stack, PostgreSQL, and Serverless AWS</strong> (in progress). I’ve built scalable,
        user-centric applications for real-world challenges — like my patented project{" "}
        <strong>PWD Nuturance</strong>, an app designed to empower individuals with speech and communication
        disabilities using Augmentative & Alternative Communication (AAC).
      </Typography>

      <Divider sx={{ my: 4, borderColor: "#334155" }} />

      {/* Highlights */}
      <Typography variant="h5" fontWeight="medium" gutterBottom>
        🚀 Highlights from My Experience
      </Typography>

      <Typography variant="body1" sx={{ mb: 2, color: "#e2e8f0" }}>
        <strong>💡 PWD Nuturance – A Patented Tech Solution</strong>
        <br />
        I conceptualized and developed a mobile app that enables speech-disabled users to communicate
        using text-to-audio output, initiate emergency calls, and converse through multiple modes — in English, Hindi, and Marathi.
        <br />
        🏅 The project received an international patent (South Africa) and reflects my commitment to inclusive technology and real-life problem-solving.
      </Typography>

      <Typography variant="body1" sx={{ mb: 2, color: "#e2e8f0" }}>
        <strong>👑 President – Competitive Examinations Cell (CEC)</strong>
        <br />
        As President of VIIT’s CEC, I led a team of 20+ core members and 100+ volunteers. We hosted
        national-level seminars, partnered with industry leaders, and secured sponsorships to make
        events financially self-sustaining.
        <br />
        📈 Our initiatives improved student awareness of UPSC, GATE, and other exams by 200% — all
        while ensuring cost-effective, quality-driven learning opportunities.
      </Typography>

      <Divider sx={{ my: 4, borderColor: "#334155" }} />

      {/* Tech Stack */}
      <Typography variant="h5" fontWeight="medium" gutterBottom>
        💻 Tech Stack I Work With
      </Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 2 }}>
        <Chip label="React" color="primary" />
        <Chip label="Node.js" color="primary" />
        <Chip label="Express" color="primary" />
        <Chip label="MongoDB" color="primary" />
        <Chip label="PostgreSQL" color="primary" />
        <Chip label="Bootstrap" color="secondary" />
        <Chip label="AWS Cloud" color="secondary" />
        <Chip label="AWS Lambda" color="secondary" />
        <Chip label="API Gateway" color="secondary" />
        <Chip label="MUI" color="success" />
        
      </Stack>
      <Typography variant="body2" sx={{ color: "#94a3b8" }}>
        I believe in writing clean, maintainable code that solves real problems, not just passes tests.
      </Typography>

      <Divider sx={{ my: 4, borderColor: "#334155" }} />

      {/* Fun Facts */}
      <Typography variant="h5" fontWeight="medium" gutterBottom>
        🌟 Fun Facts About Me
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, color: "#e2e8f0" }}>
        🧗‍♂️ I love trekking through the Himalayas (Ladakh is next!)
        <br />
        🎶 Music is my daily energy booster.
        <br />
        🛠 I enjoy turning rough ideas into clean, working apps.
      </Typography>

      <Divider sx={{ my: 4, borderColor: "#334155" }} />

      {/* Testimonial */}
      <Typography variant="h5" fontWeight="medium" gutterBottom>
        💬 A Soft Word from a Peer
      </Typography>
      <Typography
        variant="body1"
        fontStyle="italic"
        sx={{ maxWidth: "700px", mb: 2, color: "#94a3b8" }}
      >
        “Parikshit brings both heart and logic into tech. Whether leading teams or solving user
        problems, he’s someone you want on your project.”
        <br />— A colleague from the PWD Nuturance team
      </Typography>

      {/* CTA */}
      <Typography
        variant="h6"
        sx={{ mt: 4, textAlign: "center", color: "#38bdf8", fontWeight: "bold" }}
      >
        🔗 Let’s Build Something Meaningful Together
      </Typography>
    </Box>
    </Box>
  );
};

export default AboutSection;
