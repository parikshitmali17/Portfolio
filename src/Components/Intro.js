

// import React from 'react';
// import { Typography, useTheme, useMediaQuery, Box } from '@mui/material';
// import '../App.css';
// import BasicModal from './Modal';

// function StreetLamp() {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

//   const headingFontSize = isMobile ? '1.3rem' : isTablet ? '1.8rem' : '2.5rem';
//   const subTextFontSize = isMobile ? '0.95rem' : isTablet ? '1.2rem' : '1.4rem';

//   return (
//     <>
//       <Typography
//         variant="h1"
//         className="lamp-watermark"
//         sx={{
//           fontSize: headingFontSize,
//           padding: '20px',
//           textAlign: 'center',
          
//         }}
//       >
//         Build Smart. Scale Fast. Ship Globally. 🚀
//       </Typography>

//       <div className='lamps'>
//         <input type="checkbox" name="btn" id="btn" defaultChecked />
//         <div className="lamp-content">
//           <div className="lamp-buildings">
//             <div className="lamp-window"></div>
//             <div className="lamp-window"></div>
//             <div className="lamp-window"></div>
//             <div className="lamp-window"></div>
//             <div className="lamp-window"></div>
//             <div className="lamp-window"></div>
//           </div>

//           <div className="lamp-ground">
//             <div className="lamp-sewer"></div>
//             <Typography
//               component="h3"
//               sx={{ pt: '145px', color: 'black', fontSize: subTextFontSize, px: 2 }}
//             >
//               Freelance Full-Stack & Serverless Developer turning your web ideas into scalable digital products.
//             </Typography>
//           </div>

//           <div className="lamp-streetlamp">
//             <Typography
//               component="h3"
//               sx={{
//                 color: 'red',
//                 paddingBottom: '200px',
//                 paddingLeft: '50px',
//                 paddingTop: '70px',
//                 fontSize: subTextFontSize,
//               }}
//             >
//               Light ME Up !
//             </Typography>

//             <div className="lamp-base" />
//             <div className="lamp-basetop" />
//             <div className="lamp-pole" />
//             <div className="lamp-poletop" />
//             <div className="lamp-head">
//               <label htmlFor="btn"></label>
//               <div className="lamp-top"></div>
//               <div className="lamp-glass"></div>
//               <div className="lamp-bot"></div>
//             </div>
//             <div className="lamp-light"></div>
//             <div className="lamp-ground-light">
//               <Box sx={{ display: 'flex', justifyContent: 'center', pt: '30px' }}>
//                 <BasicModal />
//               </Box>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default StreetLamp;



"use client"

// import React, { useState } from "react"
// import {
//   Box,
//   Container,
//   Typography,
//   Button,
//   Grid,
//   Avatar,
//   Card,
//   CardContent,
//   Fade,
//   Zoom,
//   useTheme,
//   useMediaQuery,
//   IconButton,
// } from "@mui/material"
// import { Person, EmojiEvents, Star, LocalCafe, ArrowForward, PhotoCamera } from "@mui/icons-material"

// export default function StreetLamp() {
//   const theme = useTheme()
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"))


  
//   const handleViewWork = () => {
//     console.log("View My Work clicked")
//     // Add your navigation logic here
//     alert("Navigating to portfolio...")
//   }

//   const handleLetsTalk = () => {
//     console.log("Let's Talk clicked")
//     // Add your contact logic here
//     alert("Opening contact form...")
//   }

//   const stats = [
//     { icon: <Person />, value: "50+", label: "Happy Clients" },
//     { icon: <EmojiEvents />, value: "100+", label: "Projects Completed" },
//     { icon: <Star />, value: "5.0", label: "Average Rating" },
//     { icon: <LocalCafe />, value: "1000+", label: "Cups of Coffee" },
//   ]

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
//         display: "flex",
//         alignItems: "center",
//         py: 4,
//       }}
//     >
//       <Container maxWidth="lg">
//         <Grid container spacing={4} alignItems="center" justifyContent="center">
//           {/* Profile Image Section */}
//           <Grid item xs={12} display="flex" justifyContent="center">
//             <Zoom in timeout={1000}>
//               <Box position="relative">
//                 <Avatar
//                   src="../Images/PASSPORT SIZE.jpg"
//                   sx={{
//                     width: { xs: 120, md: 150 },
//                     height: { xs: 120, md: 150 },
//                     border: "4px solid",
//                     borderImage: "linear-gradient(45deg, #667eea 0%, #764ba2 100%) 1",
//                     borderRadius: "50%",
//                     transition: "transform 0.3s ease-in-out",
//                     "&:hover": {
//                       transform: "scale(1.05)",
//                     },
//                   }}
//                 />
                
//                 <label htmlFor="profile-image-upload">
//                   <IconButton
//                     component="span"
//                     sx={{
//                       position: "absolute",
//                       bottom: 0,
//                       right: 0,
//                       backgroundColor: "primary.main",
//                       color: "white",
//                       "&:hover": {
//                         backgroundColor: "primary.dark",
//                       },
//                     }}
//                   >
//                     <PhotoCamera />
//                   </IconButton>
//                 </label>
//               </Box>
//             </Zoom>
//           </Grid>

//           {/* Main Content */}
//           <Grid item xs={12}>
//             <Fade in timeout={1500}>
//               <Box textAlign="center">
//                 <Typography
//                   variant={isMobile ? "h3" : "h2"}
//                   component="h1"
//                   sx={{
//                     fontWeight: "bold",
//                     background: "linear-gradient(45deg, #667eea 0%, #764ba2 100%)",
//                     backgroundClip: "text",
//                     WebkitBackgroundClip: "text",
//                     WebkitTextFillColor: "transparent",
//                     mb: 3,
//                     animation: "fadeInUp 1s ease-out",
//                   }}
//                 >
//                   Full-Stack Developer
//                 </Typography>

//                 <Typography
//                   variant={isMobile ? "body1" : "h6"}
//                   color="text.secondary"
//                   sx={{
//                     maxWidth: 600,
//                     mx: "auto",
//                     mb: 4,
//                     lineHeight: 1.6,
//                     animation: "fadeInUp 1s ease-out 0.2s both",
//                   }}
//                 >
//                   I create beautiful, responsive websites and applications that help businesses grow and succeed in the
//                   digital world.
//                 </Typography>

//                 {/* Action Buttons */}
//                 <Fade in timeout={2000}>
//                   <Box
//                     sx={{
//                       display: "flex",
//                       gap: 2,
//                       justifyContent: "center",
//                       flexDirection: { xs: "column", sm: "row" },
//                       mb: 6,
//                       animation: "fadeInUp 1s ease-out 0.4s both",
//                     }}
//                   >
//                     <Button
//                       variant="contained"
//                       size="large"
//                       onClick={handleViewWork}
//                       endIcon={<ArrowForward />}
//                       sx={{
//                         background: "linear-gradient(45deg, #667eea 0%, #764ba2 100%)",
//                         borderRadius: 3,
//                         px: 4,
//                         py: 1.5,
//                         textTransform: "none",
//                         fontSize: "1.1rem",
//                         transition: "all 0.3s ease",
//                         "&:hover": {
//                           transform: "translateY(-2px)",
//                           boxShadow: "0 8px 25px rgba(102, 126, 234, 0.4)",
//                         },
//                       }}
//                     >
//                       View My Work
//                     </Button>

//                     <Button
//                       variant="outlined"
//                       size="large"
//                       onClick={handleLetsTalk}
//                       sx={{
//                         borderColor: "#667eea",
//                         color: "#667eea",
//                         borderRadius: 3,
//                         px: 4,
//                         py: 1.5,
//                         textTransform: "none",
//                         fontSize: "1.1rem",
//                         borderWidth: 2,
//                         transition: "all 0.3s ease",
//                         "&:hover": {
//                           borderColor: "#667eea",
//                           backgroundColor: "rgba(102, 126, 234, 0.1)",
//                           transform: "translateY(-2px)",
//                         },
//                       }}
//                     >
//                       Let's Talk
//                     </Button>
//                   </Box>
//                 </Fade>
//               </Box>
//             </Fade>
//           </Grid>

//           {/* Statistics Section */}
//           <Grid item xs={12}>
//             <Fade in timeout={2500}>
//               <Grid container spacing={3} justifyContent="center">
//                 {stats.map((stat, index) => (
//                   <Grid item xs={6} sm={3} key={index}>
//                     <Zoom in timeout={1000 + index * 200}>
//                       <Card
//                         sx={{
//                           textAlign: "center",
//                           p: 2,
//                           borderRadius: 3,
//                           transition: "all 0.3s ease",
//                           "&:hover": {
//                             transform: "translateY(-5px)",
//                             boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
//                           },
//                         }}
//                       >
//                         <CardContent sx={{ p: "16px !important" }}>
//                           <Box
//                             sx={{
//                               color: "#667eea",
//                               mb: 1,
//                               display: "flex",
//                               justifyContent: "center",
//                             }}
//                           >
//                             {React.cloneElement(stat.icon, {
//                               sx: { fontSize: { xs: 24, md: 32 } },
//                             })}
//                           </Box>
//                           <Typography
//                             variant={isMobile ? "h5" : "h4"}
//                             component="div"
//                             sx={{
//                               fontWeight: "bold",
//                               color: "text.primary",
//                               mb: 0.5,
//                             }}
//                           >
//                             {stat.value}
//                           </Typography>
//                           <Typography
//                             variant="body2"
//                             color="text.secondary"
//                             sx={{ fontSize: { xs: "0.75rem", md: "0.875rem" } }}
//                           >
//                             {stat.label}
//                           </Typography>
//                         </CardContent>
//                       </Card>
//                     </Zoom>
//                   </Grid>
//                 ))}
//               </Grid>
//             </Fade>
//           </Grid>
//         </Grid>
//       </Container>

//       {/* Custom CSS for animations */}
//       <style jsx global>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </Box>
//   )
// }



import React, { useState} from "react"
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Avatar,
  Card,
  CardContent,
  Fade,
  Zoom,
  useTheme,
  useMediaQuery,
} from "@mui/material"
import {
  Person,
  EmojiEvents,
  Star,
  LocalCafe,
  ArrowForward,
} from "@mui/icons-material"
import GitHubIcon from '@mui/icons-material/GitHub';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

export default function Intro() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
   const navigate = useNavigate();

  const handleViewWork = () => {
  
    navigate("/work")
  
  }

  const handleLetsTalk = () => {

    navigate("/Contacts")
  
  }

  const stats = [
    { icon: <AccountTreeIcon/>, value: "10+", label: "Successful Projects" },
   
    { icon: <Star />, value: "5+ ", label: "Technology Masterd" },
    { icon:  <GitHubIcon/>, value: "500+", label: "Git commits & counting" },
     { icon: <EmojiEvents/>, value: "1", label: "Patented Application" }
  ]

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        display: "flex",
        alignItems: "center",
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {/* Profile Image Section */}
          <Grid item xs={12} display="flex" justifyContent="center">
            <Zoom in timeout={1000}>
              <Box position="relative">
                <Avatar
                  src="../Images/PASSPORT SIZE.jpg"
                  sx={{
                    width: { xs: 120, md: 150 },
                    height: { xs: 120, md: 150 },
                    border: "none", // ✅ Removed border
                    borderRadius: "50%",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                />
              </Box>
            </Zoom>
          </Grid>

          {/* Main Content */}
          <Grid item xs={12}>
            <Fade in timeout={1500}>
              <Box textAlign="center">
                <Typography
                  variant={isMobile ? "h3" : "h2"}
                  component="h1"
                  sx={{
                    fontWeight: "bold",
                    background: "linear-gradient(45deg, #667eea 0%, #764ba2 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    mb: 3,
                    animation: "fadeInUp 1s ease-out",
                  }}
                >
                  Full-Stack Developer || AWS Cloud Enthusiast
                </Typography>

                <Typography
                  variant={isMobile ? "body1" : "h6"}
                  color="text.secondary"
                  sx={{
                    maxWidth: 600,
                    mx: "auto",
                    mb: 4,
                    lineHeight: 1.6,
                    animation: "fadeInUp 1s ease-out 0.2s both",
                  }}
                >
                  Code that Delivers Business Value  — Not Just Features. 
                 End-to-End Development | Secure APIs | Real-Time Apps | AWS Serverless Architectures
                </Typography>

                {/* Action Buttons */}
                <Fade in timeout={2000}>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      justifyContent: "center",
                      flexDirection: { xs: "column", sm: "row" },
                      mb: 6,
                      animation: "fadeInUp 1s ease-out 0.4s both",
                    }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      onClick={handleViewWork}
                      endIcon={<ArrowForward />}
                      sx={{
                        background: "linear-gradient(45deg, #667eea 0%, #764ba2 100%)",
                        borderRadius: 3,
                        px: 4,
                        py: 1.5,
                        textTransform: "none",
                        fontSize: "1.1rem",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-2px)",
                          boxShadow: "0 8px 25px rgba(102, 126, 234, 0.4)",
                        },
                      }}
                    >
                      View My Work
                    </Button>

                    <Button
                      variant="outlined"
                      size="large"
                      onClick={handleLetsTalk}
                      sx={{
                        borderColor: "#667eea",
                        color: "#667eea",
                        borderRadius: 3,
                        px: 4,
                        py: 1.5,
                        textTransform: "none",
                        fontSize: "1.1rem",
                        borderWidth: 2,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          borderColor: "#667eea",
                          backgroundColor: "rgba(102, 126, 234, 0.1)",
                          transform: "translateY(-2px)",
                        },
                      }}
                    >
                      Let's Connect
                    </Button>
                  </Box>
                </Fade>
              </Box>
            </Fade>
          </Grid>

          {/* Statistics Section */}
          <Grid item xs={12}>
            <Fade in timeout={2500}>
              <Grid container spacing={3} justifyContent="center">
                {stats.map((stat, index) => (
                  <Grid item xs={6} sm={3} key={index}>
                    <Zoom in timeout={1000 + index * 200}>
                      <Card
                        sx={{
                          textAlign: "center",
                          p: 2,
                          borderRadius: 3,
                          transition: "all 0.3s ease",
                          "&:hover": {
                            transform: "translateY(-5px)",
                            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                          },
                        }}
                      >
                        <CardContent sx={{ p: "16px !important" }}>
                          <Box
                            sx={{
                              color: "#667eea",
                              mb: 1,
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            {React.cloneElement(stat.icon, {
                              sx: { fontSize: { xs: 24, md: 32 } },
                            })}
                          </Box>
                          <Typography
                            variant={isMobile ? "h5" : "h4"}
                            component="div"
                            sx={{
                              fontWeight: "bold",
                              color: "text.primary",
                              mb: 0.5,
                            }}
                          >
                            {stat.value}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ fontSize: { xs: "0.75rem", md: "0.875rem" } }}
                          >
                            {stat.label}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Zoom>
                  </Grid>
                ))}
              </Grid>
            </Fade>
          </Grid>
        </Grid>
      </Container>

      {/* Custom CSS for animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </Box>
  )
}
