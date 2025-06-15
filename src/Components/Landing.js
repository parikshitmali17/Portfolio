import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { ArrowForward } from "@mui/icons-material";

const Landing = () => {
  return (
    <Box
      id="landing"
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 4,
      }}
    >
      <Box>
        <Typography
          component={motion.h1}
          variant="h2"
          fontWeight="bold"
          sx={{ mb: 3 }}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Let’s Build Something Great Together
        </Typography>

        <Typography
          component={motion.p}
          variant="h6"
          maxWidth={600}
          mx="auto"
          sx={{ mb: 4 }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          I help startups and creators turn their ideas into powerful digital products using MERN Stack & AWS. Let’s collaborate on something impactful.
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
          component={motion.div}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            endIcon={<ArrowForward />}
            href="#contact"
            sx={{ borderRadius: "2xl", fontWeight: "bold" }}
          >
            Start a Project
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            size="large"
            href="#projects"
            sx={{ borderRadius: "2xl", fontWeight: "bold" }}
          >
            View My Work
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Landing;
