
import React from "react"
import { useNavigate } from "react-router-dom"
import '../App.css';

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
  EmojiEvents,
  Star,
  ArrowForward,
  Description, // Import the Description icon for the resume button
} from "@mui/icons-material"
import GitHubIcon from "@mui/icons-material/GitHub"
import AccountTreeIcon from "@mui/icons-material/AccountTree"

export default function Intro() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  const navigate = useNavigate()
  const handleViewWork = () => {
    navigate("/work")
  }
  const handleLetsTalk = () => {
    navigate("/Contacts")
  }

  // Function to handle viewing the resume
  const handleViewResume = () => {
    // Open the resume PDF in a new tab
    window.open("../Resume/Parikshit_Mali_Resume.pdf", "_blank")
  }

  const stats = [
    { icon: <AccountTreeIcon />, value: "10+", label: "Successful Projects" },
    { icon: <Star />, value: "5+ ", label: "Technology Masterd" },
    { icon: <GitHubIcon />, value: "500+", label: "Git commits & counting" },
    { icon: <EmojiEvents />, value: "1", label: "Patented Application" },
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
                  Code that Delivers Business Value — Not Just Features. End-to-End Development | Secure APIs |
                  Real-Time Apps | AWS Serverless Architectures
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
                    {/* New Resume Button */}
                    <Button
                      variant="contained"
                      size="large"
                      onClick={handleViewResume}
                      endIcon={<Description />}
                      sx={{
                        background: "linear-gradient(45deg, #2193b0 0%, #6dd5ed 100%)", // A different gradient for distinction
                        borderRadius: 3,
                        px: 4,
                        py: 1.5,
                        textTransform: "none",
                        fontSize: "1.1rem",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-2px)",
                          boxShadow: "0 8px 25px rgba(33, 147, 176, 0.4)",
                        },
                      }}
                    >
                      View Resume
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
     
    </Box>
  )
}
