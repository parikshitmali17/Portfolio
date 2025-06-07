// import React from "react";
// import {
//   Box,
//   Typography,
//   Stack,
//   TextField,
//   Button,
//   IconButton,
//   Link,
//   useTheme,
//   useMediaQuery,
// } from "@mui/material";
// import { motion } from "framer-motion";
// import {
//   Email,
//   LocationOn,
//   AccessTime,
//   GitHub,
//   LinkedIn,
//   Twitter,
//   Instagram,
//   Send,
// } from "@mui/icons-material";

// const Contact = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   return (
//     <Box
//       id="contact"
//       component={motion.div}
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       viewport={{ once: true }}
//       sx={{
//         px: { xs: 2, sm: 6 },
//         py: 6,
//         backgroundColor: "#f5f5f5",
//         color: "#212121",
//       }}
//     >
//       <Typography variant="h4" fontWeight="bold" gutterBottom textAlign="center">
//         📨 Let’s Build Something Together
//       </Typography>
//       <Typography variant="body1" textAlign="center" maxWidth="700px" mx="auto" mb={4}>
//         Have an idea, a project, or just want to connect? I’m always open to collaborations that
//         create meaningful impact — whether it's building accessible tech, scalable products, or
//         clean UI experiences.
//         <br />
//         <br />
//         If you’re a <strong>startup founder</strong>, <strong>project lead</strong>, or{" "}
//         <strong>organization solving real-world problems</strong>, I’d love to hear from you.
//       </Typography>

//       <Stack
//         direction={isMobile ? "column" : "row"}
//         spacing={4}
//         justifyContent="space-between"
//         alignItems="flex-start"
//       >
//         {/* Contact Info + Socials */}
//         <Box flex={1}>
//           <Typography variant="h6" gutterBottom>
//             📬 Reach Out
//           </Typography>
//           <Stack direction="row" alignItems="center" spacing={1}>
//             <Email fontSize="small" />
//             <Typography variant="body1">parikshit.mali.dev@gmail.com</Typography>
//           </Stack>
//           <Stack direction="row" alignItems="center" spacing={1} mt={1}>
//             <LocationOn fontSize="small" />
//             <Typography variant="body1">Pune, India (Available for global projects 🌐)</Typography>
//           </Stack>
//           <Stack direction="row" alignItems="center" spacing={1} mt={1}>
//             <AccessTime fontSize="small" />
//             <Typography variant="body1">Open to freelance and consulting roles</Typography>
//           </Stack>

//           <Typography variant="h6" mt={4} gutterBottom>
//             🔗 Social Links
//           </Typography>
//           <Stack direction="row" spacing={1}>
//             <IconButton
//               component={Link}
//               href="https://linkedin.com/in/parikshit-mali"
//               target="_blank"
//               rel="noopener"
//               color="primary"
//             >
//               <LinkedIn />
//             </IconButton>
//             <IconButton
//               component={Link}
//               href="https://github.com/parikshitmali"
//               target="_blank"
//               rel="noopener"
//               color="inherit"
//             >
//               <GitHub />
//             </IconButton>
//             <IconButton
//               component={Link}
//               href="https://twitter.com/parikshitmali"
//               target="_blank"
//               rel="noopener"
//               color="primary"
//             >
//               <Twitter />
//             </IconButton>
//             <IconButton
//               component={Link}
//               href="https://instagram.com/parikshit.m"
//               target="_blank"
//               rel="noopener"
//               color="secondary"
//             >
//               <Instagram />
//             </IconButton>
//           </Stack>
//         </Box>

//         {/* Contact Form */}
//         <Box flex={1}>
//           <Typography variant="h6" gutterBottom>
//             💬 Or Just Say Hello
//           </Typography>
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               alert("Form submission logic goes here.");
//             }}
//           >
//             <Stack spacing={2}>
//               <TextField label="Your Name" fullWidth required />
//               <TextField label="Your Email" type="email" fullWidth required />
//               <TextField label="Message" multiline rows={4} fullWidth required />
//               <Button
//                 type="submit"
//                 variant="contained"
//                 color="primary"
//                 endIcon={<Send />}
//                 sx={{ alignSelf: "flex-start" }}
//               >
//                 Send Message
//               </Button>
//             </Stack>
//           </form>
//         </Box>
//       </Stack>

//       {/* CTA Footer */}
//       <Box textAlign="center" mt={6}>
//         <Typography variant="h6" fontWeight="bold" color="primary">
//           ⚡ Let’s turn your idea into a product.
//         </Typography>
//         <Typography variant="h6" fontWeight="bold" color="text.secondary">
//           🛠 Have a problem? Let's solve it with code.
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default Contact;



// import React from "react";
// import {
//   Box,
//   Typography,
//   Stack,
//   IconButton,
//   Link,
//   useTheme,
//   useMediaQuery,
// } from "@mui/material";
// import { motion } from "framer-motion";
// import {
//   Email,
//   LocationOn,
//   AccessTime,
//   GitHub,
//   LinkedIn,
//   Twitter,
//   Instagram,
// } from "@mui/icons-material";

// // Replace with your actual QR code image
// const Contact = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   return (
//      <Box
//               sx={{
//                 background: 'linear-gradient(135deg, #17175f 0%, #0e1428 100%)',
//                 minHeight: '100vh',
//                 paddingTop: 8,
//                 paddingX: 2,
//               }}
//             >
//     <Box
//       id="contact"
//       component={motion.div}
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       viewport={{ once: true }}
//       sx={{
//         px: { xs: 2, sm: 6 },
//         py: 6,
//         backgroundColor: "#f5f5f5",
//         color: "#212121",
//          background: 'linear-gradient(135deg, #17175f 0%, #0e1428 100%)',
//       }}
//     >
//       <Typography variant="h4" fontWeight="bold" gutterBottom textAlign="center">
//         📨 Let’s Build Something Together
//       </Typography>
//       <Typography variant="body1" textAlign="center" maxWidth="700px" mx="auto" mb={4}>
//         Have an idea, a project, or just want to connect? I’m always open to collaborations that
//         create meaningful impact — whether it's building accessible tech, scalable products, or
//         clean UI experiences.
//         <br />
//         <br />
//         If you’re a <strong>startup founder</strong>, <strong>project lead</strong>, or{" "}
//         <strong>organization solving real-world problems</strong>, I’d love to hear from you.
//       </Typography>

//       <Stack
//         direction={isMobile ? "column" : "row"}
//         spacing={4}
//         justifyContent="space-between"
//         alignItems="flex-start"
//       >
//         {/* Contact Info + Socials */}
//         <Box flex={1}>
//           <Typography variant="h6" gutterBottom>
//             📬 Reach Out
//           </Typography>
//           <Stack direction="row" alignItems="center" spacing={1}>
//             <Email fontSize="small" />
//             <Typography variant="body1">parikshit.mali.dev@gmail.com</Typography>
//           </Stack>
//           <Stack direction="row" alignItems="center" spacing={1} mt={1}>
//             <LocationOn fontSize="small" />
//             <Typography variant="body1">Pune, India (Available for global projects 🌐)</Typography>
//           </Stack>
//           <Stack direction="row" alignItems="center" spacing={1} mt={1}>
//             <AccessTime fontSize="small" />
//             <Typography variant="body1">Open to freelance and consulting roles</Typography>
//           </Stack>

//           <Typography variant="h6" mt={4} gutterBottom>
//             🔗 Social Links
//           </Typography>
//           <Stack direction="row" spacing={1}>
//             <IconButton
//               component={Link}
//               href="https://linkedin.com/in/parikshit-mali"
//               target="_blank"
//               rel="noopener"
//               color="primary"
//             >
//               <LinkedIn />
//             </IconButton>
//             <IconButton
//               component={Link}
//               href="https://github.com/parikshitmali"
//               target="_blank"
//               rel="noopener"
//               color="inherit"
//             >
//               <GitHub />
//             </IconButton>
//             <IconButton
//               component={Link}
//               href="https://twitter.com/parikshitmali"
//               target="_blank"
//               rel="noopener"
//               color="primary"
//             >
//               <Twitter />
//             </IconButton>
//             <IconButton
//               component={Link}
//               href="https://instagram.com/parikshit.m"
//               target="_blank"
//               rel="noopener"
//               color="secondary"
//             >
//               <Instagram />
//             </IconButton>
//           </Stack>
//         </Box>

//         {/* WhatsApp QR Code Section */}
//         <Box flex={1} textAlign="center">
//           <Typography variant="h6" gutterBottom>
//             💬 Or Just Say Hello on WhatsApp
//           </Typography>
//           <Typography variant="body2" mb={2}>
//             Scan the QR code below to connect with me directly on WhatsApp.
//           </Typography>
//           <Box
//             component="img"
//             src="../Images/Wts App QR.jpg"
//             alt="WhatsApp QR Code"
//             sx={{
//               maxWidth: 400,
//               width: "100%",
//               borderRadius: 2,
//               boxShadow: 3,
//               mx: "auto",
//             }}
//           />
//         </Box>
//       </Stack>

//       {/* CTA Footer */}
//       <Box textAlign="center" mt={6}>
//         <Typography variant="h6" fontWeight="bold" color="primary">
//           ⚡ Let’s turn your idea into a product.
//         </Typography>
//         <Typography variant="h6" fontWeight="bold" color="text.secondary">
//           🛠 Have a problem? Let's solve it with code.
//         </Typography>
//       </Box>
//     </Box>
//     </Box>
//   );
// };

// export default Contact;



import React from "react";
import {
  Box,
  Typography,
  Stack,
  IconButton,
  Link,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  Email,
  LocationOn,
  AccessTime,
  GitHub,
  LinkedIn,
  Twitter,
  Instagram,
} from "@mui/icons-material";

// 📌 Replace this with your correct path if using local image
// import whatsappQR from "../assets/WtsAppQR.jpg";

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #17175f 0%, #0e1428 100%)",
        minHeight: "100vh",
        pt: 8,
        px: 2,
        color: "#ffffff",
      }}
    >
      <Box
        id="contact"
        component={motion.div}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        sx={{
          px: { xs: 2, sm: 6 },
          py: 6,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          textAlign="center"
          sx={{ color: "#ffffff" }}
        >
          📨 Let’s Build Something Together
        </Typography>

        <Typography
          variant="body1"
          textAlign="center"
          maxWidth="700px"
          mx="auto"
          mb={4}
          sx={{ color: "#cfd8dc" }}
        >
          Have an idea, a project, or just want to connect? I’m always open to collaborations
          that create meaningful impact — whether it's building accessible tech, scalable products,
          or clean UI experiences.
          <br />
          <br />
          If you’re a <strong>startup founder</strong>, <strong>project lead</strong>, or{" "}
          <strong>organization solving real-world problems</strong>, I’d love to hear from you.
        </Typography>

        <Stack
          direction={isMobile ? "column" : "row"}
          spacing={4}
          justifyContent="space-between"
          alignItems="flex-start"
        >
          {/* 📬 Contact Info + Social Links */}
          <Box flex={1}>
            <Typography variant="h6" gutterBottom color="primary.light">
              📬 Reach Out
            </Typography>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Email fontSize="small" htmlColor="#ffffff" />
              <Typography variant="body1" sx={{ color: "#e0e0e0" }}>
                Parikshitmali17@gmial.com
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1} mt={1}>
              <LocationOn fontSize="small" htmlColor="#ffffff" />
              <Typography variant="body1" sx={{ color: "#e0e0e0" }}>
                Pune, India (Available for global projects 🌐)
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1} mt={1}>
              <AccessTime fontSize="small" htmlColor="#ffffff" />
              <Typography variant="body1" sx={{ color: "#e0e0e0" }}>
                Open to freelance and consulting roles
              </Typography>
            </Stack>

            <Typography variant="h6" mt={4} gutterBottom color="primary.light">
              🔗 Social Links
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton
                component={Link}
                href="https://www.linkedin.com/in/parikshit-mali-a84b23193/" target="_blank"
                rel="noopener"
                sx={{ color: "#0A66C2" }}
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                component={Link}
                 href="https://github.com/parikshitmali17"
                target="_blank"
                rel="noopener"
                sx={{ color: "#ffffff" }}
              >
                <GitHub />
              </IconButton>
              <IconButton
                component={Link}
                href="https://twitter.com/parikshitmali"
                target="_blank"
                rel="noopener"
                sx={{ color: "#1DA1F2" }}
              >
                <Twitter />
              </IconButton>
              <IconButton
                component={Link}
                href="https://www.instagram.com/parikshit.mali17?igsh=aWp0dDhiOGxmNGV2"
                target="_blank"
                rel="noopener"
                sx={{ color: "#E1306C" }}
              >
                <Instagram />
              </IconButton>
            </Stack>
          </Box>

          {/* 💬 WhatsApp QR Code Section */}
          <Box flex={1} textAlign="center">
            <Typography variant="h6" gutterBottom color="primary.light">
              💬 Or Just Say Hello on WhatsApp
            </Typography>
            <Typography variant="body2" mb={2} sx={{ color: "#cfd8dc" }}>
              Scan the QR code below to connect with me directly on WhatsApp.
            </Typography>
            <Box
              component="img"
              src="../Images/Wts App QR.jpg"
              alt="WhatsApp QR Code"
              sx={{
                maxWidth: 300,
                width: "100%",
                borderRadius: 2,
                boxShadow: 3,
                mx: "auto",
              }}
            />
          </Box>
        </Stack>

        {/* CTA Footer */}
        <Box textAlign="center" mt={6}>
          <Typography variant="h6" fontWeight="bold" sx={{ color: "#00e676" }}>
            ⚡ Let’s turn your idea into a product.
          </Typography>
          <Typography variant="h6" fontWeight="bold" sx={{ color: "#64b5f6" }}>
            🛠 Have a problem? Let's solve it with code.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
