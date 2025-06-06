

// // import React, { useState } from 'react';
// // import { Box, Typography, IconButton } from '@mui/material';
// // import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

// // const images = [
// //   '/Images/Favourite Movies.png',
// //   '/Images/MovieDetail.jpg',
// //   '/Images/Trendinng Movies.png',
// // ];

// //  function SmallCarousel() {
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   const prevSlide = () => {
// //     setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
// //   };

// //   const nextSlide = () => {
// //     setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
// //   };

// //   return (
// //     <Box sx={{ borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }}>
    
// //         {/* Carousel Box */}
// //         <Box
// //           sx={{
// //             width: '300px',
// //             height: '200px',
// //             position: 'relative',
// //             overflow: 'hidden',
// //             borderRadius: 2,
// //             boxShadow: 3,
// //           }}
// //         >
// //           <img
// //             src={images[currentIndex]}
// //             alt={`Slide ${currentIndex}`}
// //             style={{
// //               width: '100%',
// //               height: '100%',
// //               objectFit: 'cover',
// //               transition: 'transform 0.5s ease-in-out',
// //             }}
// //           />

// //           {/* Prev Button */}
// //           <IconButton
// //             onClick={prevSlide}
// //             sx={{
// //               position: 'absolute',
// //               top: '50%',
// //               left: 0,
// //               transform: 'translateY(-50%)',
// //               color: 'white',
// //             }}
// //           >
// //             <ArrowBackIos />
// //           </IconButton>

// //           {/* Next Button */}
// //           <IconButton
// //             onClick={nextSlide}
// //             sx={{
// //               position: 'absolute',
// //               top: '50%',
// //               right: 0,
// //               transform: 'translateY(-50%)',
// //               color: 'white',
// //             }}
// //           >
// //             <ArrowForwardIos />
// //           </IconButton>
// //         </Box>
// //        </Box>
     
// //   );
// // }

// // export default  SmallCarousel;


// import React, { useState, useEffect } from 'react';
// import { Box, IconButton } from '@mui/material';
// import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';



// function SmallCarousel({images}) {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//   };

  
//   // 🔄 Auto Slide every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(nextSlide, 3000); // 3 seconds

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, [currentIndex]); // Trigger rerun when index changes

//   return (
//     <Box sx={{ borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }}>
//       <Box
//         sx={{
//           width: '300px',
//           height: '200px',
//           position: 'relative',
//           overflow: 'hidden',
//           borderRadius: 2,
//           boxShadow: 3,
//         }}
//       >
//         <img
//           src={images[currentIndex]}
//           alt={`Slide ${currentIndex}`}
//           style={{
//             width: '100%',
//             height: '100%',
//             objectFit: 'cover',
//             transition: 'transform 0.5s ease-in-out',
//           }}
//         />

//         {/* ⬅️ Prev */}
//         <IconButton
//           onClick={prevSlide}
//           sx={{
//             position: 'absolute',
//             top: '50%',
//             left: 0,
//             transform: 'translateY(-50%)',
//             color: 'white',
//           }}
//         >
//           <ArrowBackIos />
//         </IconButton>

//         {/* ➡️ Next */}
//         <IconButton
//           onClick={nextSlide}
//           sx={{
//             position: 'absolute',
//             top: '50%',
//             right: 0,
//             transform: 'translateY(-50%)',
//             color: 'white',
//           }}
//         >
//           <ArrowForwardIos />
//         </IconButton>
//       </Box>
//     </Box>
//   );
// }

// export default SmallCarousel;

import React, { useState, useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

function SmallCarousel({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const hasImages = Array.isArray(images) && images.length > 0;

  // ✅ useEffect always called
  useEffect(() => {
    if (!hasImages) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length, hasImages]);

  if (!hasImages) return null; // ✅ safe to return now

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <Box sx={{ borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }}>
      <Box
        sx={{
          width: '300px',
          height: '200px',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease-in-out',
          }}
        />

        {/* ⬅️ Prev */}
        <IconButton
          onClick={prevSlide}
          sx={{
            position: 'absolute',
            top: '50%',
            left: 0,
            transform: 'translateY(-50%)',
            color: 'white',
          }}
        >
          <ArrowBackIos />
        </IconButton>

        {/* ➡️ Next */}
        <IconButton
          onClick={nextSlide}
          sx={{
            position: 'absolute',
            top: '50%',
            right: 0,
            transform: 'translateY(-50%)',
            color: 'white',
          }}
        >
          <ArrowForwardIos />
        </IconButton>
      </Box>
    </Box>
  );
}

export default SmallCarousel;
