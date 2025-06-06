// // ServiceSection.jsx
// import React from 'react';
// import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
// import { motion } from 'framer-motion';
// import WebIcon from '@mui/icons-material/Web';
// import CloudQueueIcon from '@mui/icons-material/CloudQueue';
// import StorageIcon from '@mui/icons-material/Storage';

// const services = [
//   {
//     icon: <WebIcon fontSize="large" color="primary" />,
//     title: 'Frontend Development',
//     description: 'Crafting responsive, modern, and accessible user interfaces with React and MUI.',
//   },
//   {
//     icon: <CloudQueueIcon fontSize="large" color="primary" />,
//     title: 'Serverless Applications',
//     description: 'Build scalable cloud-native apps using AWS Lambda, DynamoDB, and S3.',
//   },
//   {
//     icon: <StorageIcon fontSize="large" color="primary" />,
//     title: 'Fullstack Web Solutions',
//     description: 'End-to-end development with MERN stack, tailored to your business needs.',
//   },
//   {
//     icon: <StorageIcon fontSize="large" color="primary" />,
//     title: 'Fullstack Web Solutions',
//     description: 'End-to-end development with MERN stack, tailored to your business needs.',
//   },
// ];

// const ServiceCard = ({ icon, title, description }) => (
//   <motion.div
//     whileHover={{ scale: 1.05 }}
//     initial={{ opacity: 0, y: 50 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.5 }}
//     viewport={{ once: true }}
//   >
//     <Card
//       elevation={3}
//       sx={{
//         borderRadius: 3,
//         p: 2,
//         height: '100%',
//         display: 'flex',
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         bgcolor: 'background.paper',
//         textAlign: 'center',
//         transition: 'transform 0.3s ease-in-out',
//       }}
//     >
//       <CardContent>
//         <Box mb={2}>{icon}</Box>
//         <Typography variant="h6" fontWeight={600} gutterBottom>
//           {title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary" mb={2}>
//           {description}
//         </Typography>
//         <Button variant="text" size="small" color="primary">
//           Learn More →
//         </Button>
//       </CardContent>
//     </Card>
//   </motion.div>
// );

// const ServiceSection = () => {
//   return (
//     <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, md: 6 },  minHeight: '100vh',
//         background: 'linear-gradient(135deg, #17175f 0%, #0e1428 100%)',
//         color: '#f1f1f1',
//         fontFamily: 'Poppins, sans-serif',
//         overflowX: 'hidden'}}>
//       <Typography
//         variant="h4"
//         align="center"
//         fontWeight="bold"
//         mb={4}
//         fontFamily="'Poppins', sans-serif"
//       >
//         My Services
//       </Typography>
//       <Grid container spacing={4}>
//         {services.map((service, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <ServiceCard {...service} />
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default ServiceSection;

import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { motion } from 'framer-motion';
import WebIcon from '@mui/icons-material/Web';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import StorageIcon from '@mui/icons-material/Storage';

const services = [
    {
    icon: <StorageIcon fontSize="large" color="primary" />,
    title: 'Fullstack Web Solutions',
    description: 'End-to-end development with MERN stack, tailored to your business needs.',
  },
  {
    icon: <WebIcon fontSize="large" color="primary" />,
    title: 'Frontend Development',
    description: 'Crafting responsive, modern, and accessible User Interface with React and MUI.',
  },
  {
    icon: <CloudQueueIcon fontSize="large" color="primary" />,
    title: 'Serverless Applications',
    description: 'Build scalable cloud-native apps using AWS Lambda, DynamoDB, and S3.',
  },
];

const ServiceCard = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    style={{ height: '100%', width: '100%' }}
  >
    <Card
      elevation={4}
      sx={{
        borderRadius: 3,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        height: '100%',
        bgcolor: 'background.paper',
        textAlign: 'center',
        p: 2,
        transition: 'transform 0.3s ease-in-out',
        margin: 3,
         alignItems: 'flex-start',
        flexWrap: 'wrap', // Allows wrapping on small screens
        gap: 3, // spacing between cards
        p: 3,
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Box mb={2}>{icon}</Box>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <Box mt={2}>
        {/* <Button variant="outlined" size="small" color="primary">
          Learn More →
        </Button> */}
        <Button
  variant="outlined"
  size="small"
  sx={{
    color: '#000', // text color
    borderColor: '#ffd844',
    backgroundColor: '#ffd844',
    fontWeight: 600,
    transition: '0.3s',
    '&:hover': {
      backgroundColor: '#e6c62f',
      borderColor: '#e6c62f',
      transform: 'scale(1.05)',
    },
  }}
>
  Learn More →
</Button>

      </Box>
    </Card>
  </motion.div>
);

const ServiceSection = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #17175f 0%, #0e1428 100%)',
        color: '#f1f1f1',
        fontFamily: 'Poppins, sans-serif',
        px: { xs: 2, md: 6 },
        py: { xs: 6, md: 10 },
      }}
    >
      <Typography
        variant="h4"
        align="center"
        fontWeight="bold"
        mb={6}
        fontFamily="'Poppins', sans-serif"
      >
        Our Services
      </Typography>

      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        {services.map((service, index) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={6}
            md={4}
            sx={{ display: 'flex', flexDirection: 'column' ,maxWidth: 900, flex: '1 1 300px'  }}
            margin={3}
            
          >
            <ServiceCard {...service} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServiceSection;
