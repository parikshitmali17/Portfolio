import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CallIcon from '@mui/icons-material/Call';
import { useNavigate } from 'react-router-dom';
// import * as React from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
   const navigate = useNavigate();
   function handleNavigate(){
    
  navigate('/contact');
  // Give the page time to mount before scrolling
 handleOpen();
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 100); // slight delay ensures scroll happens after route loads
// };
  }

  return (
    <div>
      <Button variant="contained" color="error" startIcon={<CallIcon />} onClick={handleNavigate}>CONNECT WITH ME</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            📞 Thanks for reaching out!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            "Our team is currently on another call. We’ll get back to you shortly—thank you for your patience! 🙏"
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
