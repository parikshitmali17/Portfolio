
// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// export default function MediaCard() {
//   return (
//     <span style={{display:'flex', flexDirection:"column" ,justifyContent:"center", alignItems:"center", margin:"15px"}}>
//         <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         sx={{ height: 140 }}
//         image="/static/images/cards/contemplative-reptile.jpg"
//         title="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           Lizard
//         </Typography>
//         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//           Lizards are a widespread group of squamate reptiles, with over 6,000
//           species, ranging across all continents except Antarctica
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//     </span>
//   );
// }

import * as React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Box } from '@mui/material';

const cardData = [
  {
    title: 'Lizard',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.',
    image: '/static/images/cards/contemplative-reptile.jpg',
  },
  {
    title: 'Iguana',
    description:
      'Iguanas are herbivorous lizards native to tropical areas of Mexico, Central America, and the Caribbean.',
    image: '/static/images/cards/contemplative-reptile.jpg',
  },
  {
    title: 'Gecko',
    description:
      'Geckos are known for their unique ability to climb smooth surfaces and chirping sounds.',
    image: '/static/images/cards/contemplative-reptile.jpg',
  },
];

export default function MediaCardRow() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',  // Horizontal layout
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexWrap: 'wrap', // Allows wrapping on small screens
        gap: 3, // spacing between cards
        p: 3,
      }}
    >
      {cardData.map((card, index) => (
        <Card key={index} sx={{ maxWidth: 345, flex: '1 1 300px' }}>
          <CardMedia
            sx={{ height: 140 }}
            image={card.image}
            title={card.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {card.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {card.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}
