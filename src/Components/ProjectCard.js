

import React from "react";
import { Card, CardContent, Typography, Chip, Button, Stack, Box } from "@mui/material";
import { OpenInNew as OpenInNewIcon, GitHub as GitHubIcon } from "@mui/icons-material";
import SmallCarousel from "./SmallCoursel"; // Make sure the path is correct

const MovieMania = [
  '/Images/Favourite Movies.png',
  '/Images/MovieDetail.jpg',
  '/Images/Trendinng Movies.png',
];

const ProjectCard = ({
  title,
  techStack,
  problem,
  solution,
  outcome,
  liveLink,
  codeLink,
  tags = [],
}) => {
  return (
    <Card
      sx={{
        maxWidth: 370,
        borderRadius: "20px",
        boxShadow: 6,
        transition: "transform 0.3s ease",
        "&:hover": { transform: "scale(1.02)" },
      }}
    >
      <CardContent>
        <Stack spacing={1}>
            <Box my={2} display="flex" justifyContent="center">
            <SmallCarousel images={MovieMania} />
          </Box>
          <Typography variant="h6" fontWeight="bold">
            {title}
          </Typography>

          <Stack direction="row" spacing={1} flexWrap="wrap">
            {tags.map((tag, index) => (
              <Chip key={index} label={tag} size="small" color="primary" />
            ))}
          </Stack>

          <Typography variant="body2" color="text.secondary">
            <strong>Stack:</strong> {techStack}
          </Typography>

          {/* === Place SmallCarousel here in the middle === */}
          

          <Typography variant="body2">
            <strong>Problem:</strong> {problem}
          </Typography>
          <Typography variant="body2">
            <strong>Solution:</strong> {solution}
          </Typography>
          <Typography variant="body2" color="success.main">
            <strong>Outcome:</strong> {outcome}
          </Typography>

          <Box mt={1} display="flex" gap={1}>
            {liveLink && (
              <Button
                href={liveLink}
                target="_blank"
                size="small"
                variant="contained"
                endIcon={<OpenInNewIcon />}
              >
                Live
              </Button>
            )}
            {codeLink && (
              <Button
                href={codeLink}
                target="_blank"
                size="small"
                variant="outlined"
                startIcon={<GitHubIcon />}
              >
                Code
              </Button>
            )}
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
