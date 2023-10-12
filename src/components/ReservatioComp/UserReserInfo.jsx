import React , {useContext, useEffect, useState} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {flightContext} from '../appContext/myAppContext'
import FlightLandIcon from '@mui/icons-material/FlightLand';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import { IoIosAirplane } from "react-icons/io";
import FlightClassIcon from '@mui/icons-material/FlightClass';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import { myReservationContext } from '../appContext/ReservationContext';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function UserReserInfo() {
  
    const {fromInput , setFromInput} = useContext(flightContext);
    const {toInput , setToInput} = useContext(flightContext); 
    const {tripInput , setTripInput} = useContext(flightContext);
    const {dateDepa , setDateDepa} = useContext(flightContext);
    const {dateRetur , setDateRetur} = useContext(flightContext);
    const {passengersAdultes , setPassengersAdultes} = useContext(flightContext);
    const {passengersChild, setPassengersChild} = useContext(flightContext);
    const {flightClass, setFlightClass} = useContext(flightContext);
    const {setPassAdultes} = useContext(myReservationContext);
    const {setPassChild} = useContext(myReservationContext);
    const {setClassChoice} = useContext(myReservationContext);
    const [isScreenSmall , setIsScreenSmall] = useState(false);

    var styleTableText = {
       background:"#ac0068",fontWeight:'bolder',fontSize:'18px'
    }
     var styleTableText2 = {
             background:"#ac0068",fontWeight:'bolder',fontSize:'12px'
      }

    const checkScreenSize = () => {
      if (window.innerWidth < 450)
      {
          setIsScreenSmall(true)
          console.log("true");
      }
  }

    useEffect( () => {
       setPassAdultes(passengersAdultes);
       setPassChild(passengersChild);
       setClassChoice(flightClass)
       checkScreenSize()
    },[])

  
 

 

  return (
    <TableContainer component={Paper} style={{ width:'80%' }}>
      <Table aria-label="customized table">
        <TableHead >
          <TableRow >
            <StyledTableCell style={isScreenSmall ? styleTableText2 : styleTableText}><LocationOnIcon className='me-2 mb-1' />
              { isScreenSmall ? ("") : ("From - To") }
            </StyledTableCell>
            <StyledTableCell style={isScreenSmall ? styleTableText2 : styleTableText}><LocalAirportIcon className='me-2 mb-1' />
             { isScreenSmall ? ("") : ("Trip") }
            </StyledTableCell>
            <StyledTableCell style={isScreenSmall ? styleTableText2 : styleTableText}><FlightTakeoffIcon className='me-2 mb-1' />
                { isScreenSmall ? ("") : ("Date Depart") }
            </StyledTableCell>
            <StyledTableCell style={isScreenSmall ? styleTableText2 : styleTableText}><FlightLandIcon className='me-2 mb-1' />
             { isScreenSmall ? ("") : ("Date Arrive") }
            </StyledTableCell>
            <StyledTableCell style={isScreenSmall ? styleTableText2 : styleTableText}><FlightClassIcon className='me-2 mb-1' />
            { isScreenSmall ? ("") : ("Passengers(Adults/Childs) ") }
            </StyledTableCell>
            <StyledTableCell style={isScreenSmall ? styleTableText2 : styleTableText}><AirplaneTicketIcon className='me-2 mb-1'/>
             { isScreenSmall ? ("") : ("Class") }
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
               {fromInput}<IoIosAirplane className='mx-2' /> {toInput}
              </StyledTableCell>
              <StyledTableCell>{tripInput}</StyledTableCell>
              <StyledTableCell>{dateDepa}</StyledTableCell>
              <StyledTableCell>{dateRetur}</StyledTableCell>
              <StyledTableCell>Adultes:{passengersAdultes} <span className='mx-3'></span> Childs:{passengersChild}</StyledTableCell>
              <StyledTableCell>{flightClass}</StyledTableCell>
            </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
