import React , {useState , useContext} from 'react'
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import {myAuthContext} from '../../appContext/AuthContext'
import { useNavigate } from 'react-router-dom';
import { flightContext } from '../../appContext/myAppContext';
import Skeleton from '@mui/material/Skeleton';

export const NavAvatar = () => {
  const userName = window.localStorage.getItem('user-name');
  const userEmail = window.localStorage.getItem('user-email');
  const {setDataLogin} = useContext(myAuthContext);
  const {setMessageRegister} = useContext(myAuthContext);
  const {setIsAuthincated} = useContext(myAuthContext);
  const navigate = useNavigate();
  const firstUserNameLetter = userName[0];
  const {loading} = useContext(flightContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const LogOut = () => {
      handleClose();
      setDataLogin('');
      setMessageRegister('');
      setIsAuthincated(false);
      navigate('/signin', { replace: true })
      window.localStorage.removeItem('user-name');
      window.localStorage.removeItem('user-email');
      window.localStorage.removeItem('user-id');
      window.localStorage.removeItem('auth');
  }

  return (
    <div>

        {
          loading ? (<Skeleton variant="circular" width={50} height={50} />) : (
           <div>
              <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 45, height: 45 }}> {userName !== '' ? firstUserNameLetter : 'M' } </Avatar>
          </IconButton>
        </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {/* <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem> */}
        <MenuItem onClick={LogOut}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
           </div>
          )
        }

    </div>
  )
}
