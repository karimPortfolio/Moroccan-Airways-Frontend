import React, { useContext, useState } from 'react';
import { TextField, Checkbox } from '@mui/material';
import { Box } from '@mui/system';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Alert from '@mui/material/Alert';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import LoadingButton from '@mui/lab/LoadingButton' ;
import FormControl from '@mui/material/FormControl';
import { myAuthContext } from '../appContext/AuthContext';
import { Link } from 'react-router-dom';

function Form() {
  const {emailLogin , setEmailLogin} = useContext(myAuthContext);
  const {passwordLogin , setPasswordLogin} = useContext(myAuthContext);
  const {dataLogin} = useContext(myAuthContext);
  const {emptyInputs} = useContext(myAuthContext);
  const {loading} = useContext(myAuthContext);
  const {handleSubmitLogin} = useContext(myAuthContext);
  const [checked, setChecked] = useState(false);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleEmailChange = (event) => {
    setEmailLogin(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPasswordLogin(event.target.value);
  };

  


  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }} className="login_mui_box" style={{ width:"70%" }}>
      {/* <TextField 
        id="email"
        label="email"
        variant="outlined"
        value={email}
        onChange={handleEmailChange}
      /> */}

   <FormControl variant="outlined">
          <InputLabel style={{ color: '#8b0153' }} htmlFor="email">Email</InputLabel>
          <OutlinedInput
            id="email"
            onChange={handleEmailChange}
            value={emailLogin}
            label="Email"
          />
        </FormControl>
      <FormControl variant="outlined">
          <InputLabel  style={{ color: '#8b0153' }} htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            style={{borderColor: '#8b0153' }}
            id="outlined-adornment-password"
            onChange={handlePasswordChange}
            type={showPassword ? 'text' : 'password'}
            value={passwordLogin}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      <FormControlLabel
      control={<Checkbox checked={checked} onChange={handleChange} />}
      label="Keep me logged in"
     />
      <LoadingButton style={{ background:"#ac0068" , width:"100%" , color:'#FFFF' }} size="large" variant="contained" loadingPosition="start" className='login' type="submit" loading={loading} onClick={handleSubmitLogin}>
          {loading ? (<span className='text-white'>verify...</span>) : (<span>Login</span>)}
      </LoadingButton>
      <a href="#" className='fp' style={{color:'#ac0068'}}>Forgot password ?</a>
      {/* <a href="#" className='forgot' style={{color:'#ac0068'}}>Forgot password</a> */}
      <div>
           {
                dataLogin.message == "Email or password not matched" ? (<Alert severity="error" className='searshAlert reserConfirmAlert w-100'>Oops! {dataLogin.message}.</Alert>) : ("")
           }
           {
                dataLogin.message == "something went wrong, try again later." ? (<Alert severity="error" className='searshAlert reserConfirmAlert w-100'>Oops! {dataLogin.message}.</Alert>) : ("")
           }
      </div>
      <div>
            {
                emptyInputs !== "" ? (<Alert severity="error" className='searshAlert w-100 reserConfirmAlert'>{emptyInputs}.</Alert>) : ("")
            }
      </div>
      <hr />
      <p style={{marginTop:'-20px'}}> Don't have an account yet?<Link to="/signup" style={{color:'#ac0068',width:'100px !important'}} className="ms-1">Sign up</Link></p>
    </Box>
    
  );
}

export default Form;
