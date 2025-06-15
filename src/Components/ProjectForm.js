// import React, { useRef } from "react";
// import { Box, Button, Stack, TextField, Typography } from "@mui/material";
// import emailjs from "@emailjs/browser";

// const ProjectForm = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm(
//       'your_service_id',   // Replace
//       'your_template_id',  // Replace
//       form.current,
//       'your_public_key'    // Replace
//     ).then(
//       () => {
//         alert("Thank you! Your project details have been sent.");
//         form.current.reset();
//       },
//       (error) => {
//         console.error("EmailJS Error:", error);
//         alert("Oops! Something went wrong.");
//       }
//     );
//   };

//   return (
//     <Box component="form" ref={form} onSubmit={sendEmail} sx={{ p: 4, backgroundColor: "#f5f5f5", borderRadius: 2 }}>
//       <Typography variant="h5" gutterBottom>📋 Get a Project Quote</Typography>

//       <Stack spacing={2}>
//         <TextField label="Full Name" name="user_name" required fullWidth />
//         <TextField label="Email" name="user_email" type="email" required fullWidth />
//         <TextField label="Project Type (e.g., Website, App)" name="project_type" required fullWidth />
//         <TextField label="Estimated Budget (INR/USD)" name="budget" fullWidth />
//         <TextField label="Timeline (in weeks)" name="timeline" fullWidth />
//         <TextField
//           label="Project Description"
//           name="message"
//           multiline
//           rows={4}
//           required
//           fullWidth
//         />
//         <Button type="submit" variant="contained" color="primary">
//           🚀 Send Project Details
//         </Button>
//       </Stack>
//     </Box>
//   );
// };

// export default ProjectForm;



// import React, { useRef } from "react";
// import { Box, Button, Stack, TextField, Typography, useMediaQuery } from "@mui/material";
// import emailjs from "@emailjs/browser";
// import { useTheme } from "@mui/material/styles";

// const ProjectForm = () => {
//   const form = useRef();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm(
//       'your_service_id',   // Replace
//       'your_template_id',  // Replace
//       form.current,
//       'your_public_key'    // Replace
//     ).then(
//       () => {
//         alert("Thank you! Your project details have been sent.");
//         form.current.reset();
//       },
//       (error) => {
//         console.error("EmailJS Error:", error);
//         alert("Oops! Something went wrong.");
//       }
//     );
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//          background: "linear-gradient(135deg, #17175f 0%, #0e1428 100%)",
//         px: 2,
//       }}
//     >
//       <Box
//         component="form"
//         ref={form}
//         onSubmit={sendEmail}
//         sx={{
//           width: isMobile ? "100%" : "500px",
//           backgroundColor: "#f5f5f5",
//           borderRadius: 2,
//           p: 4,
//           boxShadow: 4,
//         }}
//       >
//         <Typography variant="h4" fontWeight="bold" textAlign="center" mb={1}>
//   🚀 Let’s Bring Your Vision to Code
// </Typography>
// <Typography variant="body1" textAlign="center" mb={4}>
//   From idea to execution — share your project details and let's turn your goals into a scalable, real-world solution.
// </Typography>


//         <Typography color="black" variant="h5" gutterBottom textAlign="center" fontWeight="bold">
//           📋 Get a Project Quote
//         </Typography>

//         <Stack spacing={2}>
//           <TextField label="Full Name" name="user_name" required fullWidth />
//           <TextField label="Email" name="user_email" type="email" required fullWidth />
//           <TextField label="Project Type (e.g., Website, App)" name="project_type" required fullWidth />
//           <TextField label="Estimated Budget (INR/USD)" name="budget" fullWidth />
//           <TextField label="Timeline (in weeks)" name="timeline" fullWidth />
//           <TextField
//             label="Project Description"
//             name="message"
//             multiline
//             rows={4}
//             required
//             fullWidth
//           />
//           <Button type="submit" variant="contained" color="primary">
//             🚀 Send Project Details
//           </Button>
//         </Stack>
//       </Box>
//     </Box>
//   );
// };

// export default ProjectForm;

import React, { useRef } from "react";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const ProjectForm = () => {
  const form = useRef();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_imv7l14", // Replace
        "template_0u5d8jc", // Replace
        form.current,
        "IhFWGvrM2gMLYjlJw" // Replace
      )
      .then(
        () => {
          alert("Thank you! Your project details have been sent.");
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Oops! Something went wrong.");
        }
      );
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #17175f 0%, #0e1428 100%)",
        px: 2,
      }}
    >
      <MotionBox
        component="form"
        ref={form}
        onSubmit={sendEmail}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        sx={{
          width: "100%",
          maxWidth: isMobile ? "95%" : "640px",
          backgroundColor: "#f5f5f5",
          borderRadius: 3,
          p: { xs: 3, sm: 4 },
          boxShadow: 5,
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            mb={1}
            color="primary"
          >
            🚀 Let’s Bring Your Vision to Code
          </Typography>
          <Typography variant="body1" textAlign="center" mb={4} color="textSecondary">
            From idea to execution — share your project details and let's turn your goals into a scalable, real-world solution.
          </Typography>
        </motion.div>

        <Typography
          color="black"
          variant="h5"
          gutterBottom
          textAlign="center"
          fontWeight="bold"
        >
          📋 Get a Project Quote
        </Typography>

        <Stack spacing={2}>
          <TextField label="Full Name" name="user_name" required fullWidth />
          <TextField label="Email" name="user_email" type="email" required fullWidth />
          <TextField label="Project Type (e.g., Website, App)" name="project_type" required fullWidth />
          <TextField label="Estimated Budget (INR/USD)" name="budget" fullWidth />
          <TextField label="Timeline (in weeks)" name="timeline" fullWidth />
          <TextField
            label="Project Description"
            name="message"
            multiline
            rows={4}
            required
            fullWidth
          />
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button type="submit" variant="contained" color="primary" size="large" fullWidth>
              🚀 Send Project Details
            </Button>
          </motion.div>
        </Stack>
      </MotionBox>
    </Box>
  );
};

export default ProjectForm;
