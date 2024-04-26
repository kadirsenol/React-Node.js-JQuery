import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useDispatch, useSelector } from 'react-redux'
import { setModalStatus } from '../store/slices/modalSlice';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Modal({title,clickYes}) {

    const isOpen = useSelector((state)=>state.modal.status);
    const dispatch = useDispatch();

  return (
    <React.Fragment>
      <Dialog
        open={isOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={()=>dispatch(setModalStatus({status:false}))}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Delete"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {title}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color='error' size='small' variant='text' onClick={()=>dispatch(setModalStatus({status:false}))}>No</Button>
          <Button color='primary' size='small' variant='text' onClick={clickYes}>Yes</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}