import * as React from 'react';
import Box from '@mui/material/Box';
import css from "./AddContactModal.module.css"
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { AddContactForm } from "components/AddContactForm/AddContactForm";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 240,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
};

export default function AddContactModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Fab color="primary" aria-label="add" onClick={handleOpen}>
        <AddIcon />
      </Fab>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <HighlightOffIcon onClick={handleClose} className={css.closeButton} />
          <AddContactForm onClose={handleClose} />
        </Box>
      </Modal>
    </div>
  );
}