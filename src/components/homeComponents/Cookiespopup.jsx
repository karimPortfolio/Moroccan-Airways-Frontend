import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CookieIcon from '@mui/icons-material/Cookie';

export default function Cookiespopup() {
  const [open, setOpen] = React.useState(false);

  
  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect( () => {
    setTimeout( () =>{
        setOpen(true);
    },6000)
  },[])

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className='d-flex justify-content-center align-items-center py-3'>
             <CookieIcon style={{fontSize:'120px' , color:'#c30075'}} />
        </div>
        <DialogTitle id="alert-dialog-title" className='text-center'>
          {"Heya! This website uses cookies"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description"  className='text-center'>
              We use cookies to personalize your experience.By continuing to visit this website your agree to our use of cookies. <a href="" style={{color:'#c30075'}}>Learn more</a>
          </DialogContentText>
        </DialogContent>
        <DialogActions className='d-flex justify-content-center'>
          <Button onClick={handleClose} style={{color:'#c30075'}}>Decline</Button>
          <Button onClick={handleClose} style={{color:'#c30075'}} >
            Accept
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}