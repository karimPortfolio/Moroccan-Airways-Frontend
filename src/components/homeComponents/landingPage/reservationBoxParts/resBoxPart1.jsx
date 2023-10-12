import React , { useState , useContext} from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {CgArrowsExchangeAlt} from "react-icons/cg";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import LoadingButton from '@mui/lab/LoadingButton';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import Alert from '@mui/material/Alert';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { flightContext } from '../../../appContext/myAppContext';
import { Link, useNavigate } from 'react-router-dom';


function ResBoxPart1() {

  const destinations  = ["Tangier" , "Madrid" , "Barcelona" , "London" , "Dubai" , "New York" , "Istanbul" ];
  const {fromInput , setFromInput} = useContext(flightContext);
  const {toInput , setToInput} = useContext(flightContext);
  const {tripInput , setTripInput} = useContext(flightContext);
  const [switchDestanat , setSwitchDestant] = useState(false);
  const {dateDepa , setDateDepa} = useContext(flightContext);
  const {dateRetur , setDateRetur} = useContext(flightContext);
  const {passengersAdultes , setPassengersAdultes} = useContext(flightContext);
  const {passengersChild, setPassengersChild} = useContext(flightContext);
  const {flightClass, setFlightClass} = useContext(flightContext);
  const [resShowMore , setResShowMore] = useState(false);
  const [loading ,setLoading] = useState(false);
  const [userFlightWant , setUserFlightWant] = useState({});
  const [warningAlert , setWarningAlert] = useState({display:'none',transition:'all .5s ease-in-out'})
  const [stepsCount , setStepsCount] = useState(0);
  const navigate = useNavigate();

  const handleSwitchDestan = () => {
      setSwitchDestant(true);
      setTimeout( () => {
          setSwitchDestant(false);
      },1000)

      setFromInput(toInput);
      setToInput(fromInput);
  }

  const handleShowUserFlight = () => {
    if (fromInput !== '' && toInput !== '' && tripInput !== '' && dateDepa !== 'dd/mm/yyyy' )
    {
         navigate('/reservation' , { replace: true });
    }
    else{
         setWarningAlert({display:'flex'});
         setTimeout( () => {
             setWarningAlert({display:'none'});
         },10000);
    }
}

  const handleBtnLoading = () => {
    setLoading(true);
    setTimeout( () => {
        setLoading(false);
        handleShowUserFlight();
    },3000)
}

  const handleMoreInfoInputs = () => {
      setResShowMore(true)
      setStepsCount(1);
  }

  const handleStep2 = () => {
      setStepsCount(2);
  }

  const handleStep3 = () => {
     setStepsCount(3);
  }
  // const handleReservationFlight = () => {
       
  // }

const steps = [
    'Select master blaster campaign settings',
    'Create an ad group',
    'Create an ad',
  ];

  return (
    <div className='res__p1__p1 pt-4'>
        <Stepper activeStep={stepsCount} alternativeLabel>
        {steps.map((label) => (
          <Step key={label} >
            <StepLabel></StepLabel>
          </Step>
        ))}
      </Stepper>
       <div className="row justify-content-center">
        <div className="col-lg-5 pe-4 ps-4 reserve__p1__inputs1 d-flex justify-content-start mt-4">
             <div className='' style={{width:'47%'}}>
                  <Autocomplete className ="reserve__p1__select1" value={fromInput}  disablePortal id="combo-box-demo" options={destinations} renderInput={(params) => <TextField {...params} label="From" />} 
                      onChange ={(event , value) =>setFromInput(value)}
                  />
              </div>
              <div className='d-flex justif-content-center align-items-center'>
                 <span className= {switchDestanat ? ' reserv__switch__icon' : 'reserv__switch__icon'} style={switchDestanat ? {animation:"switchIconAnim 1s ease-in-out"} : {animation:""}}>
                     <CgArrowsExchangeAlt style={{fontSize:"30px"}} onClick={handleSwitchDestan} />
                 </span>
              </div>
              <div style={{width:'47%'}}>
                  <Autocomplete className ="reserve__p1__select2" value={toInput} disablePortal id="combo-box-demo" options={destinations} renderInput={(params) => <TextField {...params} label="To" />} 
                       onChange={(event , value) =>setToInput(value)}  
                  />
             </div>
        </div>

      {/* ========= ========= */}

        <div className="col-lg-6 pe-sm-0 pe-4 ps-4 ps-lg-5 reserve__p1__inputs2 d-flex justify-content-start flex-column flex-sm-row mt-4">
             <div style={{width:'40%'}} >
                  <FormControl className ="reserve__p1__select3 ">
                     <InputLabel id="demo-simple-select-label">Trip</InputLabel>
                     <Select labelId="demo-simple-select-label" class="reserv__box__select1" id="demo-simple-select" label="Age" onChange={(event , value) =>setTripInput(value)} >
                        {['Return' , 'One-way' , 'multi-city'].map(
                         destanation => {return(
                              <MenuItem value={destanation}>{destanation}</MenuItem>
                           )}
                         )}
                     </Select>
                  </FormControl>
              </div>
              <div style={{width:'40%'}} className='ms-0 ms-sm-1 mt-4 mt-sm-0 reser__depar__input' >
                 <TextField type="date" className='resr_date_input' id="outlined-basic" value={dateDepa} label="Depart" variant="outlined" onChange={e => setDateDepa(e.target.value)} onClick = { handleMoreInfoInputs } />
              </div>

              <div style={{width:'40%'}} className={tripInput !=="" ? tripInput.props.value === "One-way" ? "d-none" : 'mt-4 mt-sm-0 reser__retur__input' : "mt-4 mt-sm-0 reser__retur__input"}>
                 <TextField type="date" className='resr_date_input' id="outlined-basic" label="Return" value={dateRetur} variant="outlined" onChange={e => setDateRetur(e.target.value)} />
              </div>
              
        </div>
        {/* =========== ========== */}

        <div className={resShowMore ? "col-lg-6 reserv__passng__clas ms-lg-5 d-flex justify-content-start justify-content-sm-start align-items-start align-items-sm-center flex-column flex-sm-row mt-4" : 'd-none'}>
            <label htmlFor="" className='pass__label ms-3 ms-sm-0'>Passengers</label>
       
            <div className='row ms-0 ms-sm-5 passngers__info'>
                 <div className='col-sm-6 mt-4 mt-sm-0'>
                      <TextField type="number" label="Passengers/Adultes" className='resr_date_input' onChange={e=> setPassengersAdultes(e.target.value)} onClick = {handleStep2} />
                 </div>
                 <div className="col-sm-6 mt-4 mt-sm-0">
                      <TextField type="number" label="Passengers/Child" className='resr_date_input' onChange={e=> setPassengersChild(e.target.value)} onClick = {handleStep2} />
                 </div>
            </div>
        </div>
        <div className={resShowMore ? 'col-lg-5 ps-4 reserv__passng__clas d-flex justify-content-start justify-content-lg-center align-items-center mt-4' : "d-none"}>
           <label htmlFor="" className='clas__label me-5 ms-2 ms-lg-0'>Class</label>
           <FormControl>
                <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label"  name="row-radio-buttons-group" onChange={(event , value) =>setFlightClass(value)} >
                  <FormControlLabel value="Economy" control={<Radio />} label="Economy" onClick={handleStep3} />
                  <FormControlLabel value="Premium" control={<Radio />} label="Premium(Business/First)" onClick={handleStep3}/>
                </RadioGroup>
           </FormControl>
        </div>
        <div className='justify-content-center align-items-center px-5 mt-4' style={warningAlert}>
            <Alert severity="warning" className='mx-sm-5 w-100 searshAlert'>All input fields must be full.</Alert>
        </div>
        <div className="col-12 d-flex justify-content-center justify-content-lg-end mt-4 pe-lg-4">
                <LoadingButton onClick = {handleBtnLoading} startIcon={loading ? '' : <FlightTakeoffIcon style={{ fontSize:'25px' }} />} loadingPosition="middle" className="me-lg-5" loading={loading} variant="contained" style={{background:'#c30075' , width:'240px' , color:'#FFFF'}}>
                    {loading ? ('') : ('Show Flights') }
                </LoadingButton>
        </div>


 
    </div>
    
</div>
  )
}

export default ResBoxPart1