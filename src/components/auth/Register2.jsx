
import React , {useContext, useState} from 'react'
import axios from 'axios';
import { myAuthContext } from '../appContext/AuthContext';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import LoadingButton from '@mui/lab/LoadingButton' ;
import TextField from '@mui/material/TextField';
import logo from '../../images/myFlightLogo.png'
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Alert from '@mui/material/Alert';
import { Link } from 'react-router-dom';



function Register2() {

    const {name , setName} = useContext(myAuthContext);
    const {email , setEmail} = useContext(myAuthContext);
    const {password , setPassword} = useContext(myAuthContext);
    const {messageRegister , setMessageRegister } = useContext(myAuthContext);
    const {loading} = useContext(myAuthContext);
    const {emptyInputs} = useContext(myAuthContext);
    const {handleSubmitRegister} = useContext(myAuthContext);

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    // const handleClick = () => {
    //     setLoading(true);
    //     setTimeout( () => {
    //         setLoading(false);
    //         handleSubmitRegister();
    //     },3000)
    // }

  return (
  

      
  <div id='divAjcontact'>
    <div id='div' className='px-3 px-sm-5'>   
    <div className='mb-4'>
        <a href='/'><img src={logo} alt="" /></a>
    </div>
    <h1 id='titre'>Sign up</h1>
    <form className='mt-4 d-flex justify-content-center align-items-center flex-column'>
        <TextField  className='my-2 input1' label="Name" value={name} onChange={e=>setName(e.target.value)}/>
        <TextField  className='my-2 input1' label="Email"  value={email} onChange={e=>setEmail(e.target.value)} /> 
        <FormControl variant="outlined" className ='my-2' >
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            className ='input1' 
            value={password} onChange={e=>setPassword(e.target.value)} 
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
        
     {/* <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />     */}
     
            <LoadingButton style={{ background:"#ac0068" , width:"100%" , color:'#FFFF' }} className="mt-3 input1" size="large" loadingPosition="start" onClick={handleSubmitRegister} loading={loading} variant="contained" >
                {
                  loading ? (<span className='text-white'>verify...</span>) : (<span>Sign up</span>)
                }
            </LoadingButton>
        </form>

        <div className='mt-3'>
                {
                    messageRegister.message !== "" && messageRegister.message !== undefined ? (
                            messageRegister.message == 'This account has already been taken'  ? (
                          <Alert severity="error" className='searshAlert reserConfirmAlert w-100'>Oops! {messageRegister.message}.</Alert>
                        ) : (<Alert severity="success" className='searshAlert reserConfirmAlert w-100'>{messageRegister.message}.</Alert>)
                    ) : ("")
                }
        </div>
        <div className='w-100 px-2 mx-1'>
               {
                   emptyInputs !== ""  ? (<Alert severity="error" className='searshAlert reserConfirmAlert w-100 px-2 m-0'>Oops! {emptyInputs}.</Alert>) : ('') 
               }
        </div>

        </div>
    </div>
  

  )
}

export default Register2