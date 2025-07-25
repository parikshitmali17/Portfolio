
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Button,
  Stack,
  Box,
} from "@mui/material";
import {
  OpenInNew as OpenInNewIcon,
  GitHub as GitHubIcon,
} from "@mui/icons-material";
import SmallCarousel from "./SmallCoursel";

const ProjectCard = ({
  title,
  techStack,
  problem,
  solution,
  outcome,
  liveLink,
  codeLink,
  tags = [],
  images = [], // 👈 Accept image array as prop
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
      {/* 👇 Carousel Centered in Card */}
      {images.length > 0 && (
        <Box my={2} display="flex" justifyContent="center">
          <SmallCarousel images={images} />
        </Box>
      )}

      <CardContent>
        <Stack spacing={1} > 
          <Typography variant="h6" fontWeight="bold">
            {title}
          </Typography>

          <Stack direction="row"  flexWrap="wrap" >
            {tags.map((tag, index) => (
              <Chip key={index} label={tag} size="small" color="primary" sx={{ mr: 1, mb: 1 }} />
            ))}
          </Stack>

          <Typography variant="body2" color="text.secondary">
            <strong>Stack:</strong> {techStack}
          </Typography>

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
