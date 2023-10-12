import React , {useContext} from 'react';
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


export default function UserReserInfoVmobile() {
  
    const {fromInput , setFromInput} = useContext(flightContext);
    const {toInput , setToInput} = useContext(flightContext); 
    const {tripInput , setTripInput} = useContext(flightContext);
    const {dateDepa , setDateDepa} = useContext(flightContext);
    const {dateRetur , setDateRetur} = useContext(flightContext);
    const {passengersAdultes , setPassengersAdultes} = useContext(flightContext);
    const {passengersChild, setPassengersChild} = useContext(flightContext);
    const {flightClass, setFlightClass} = useContext(flightContext);

    var styleTableText = {
         background:"#ac0068",fontWeight:'bolder',fontSize:'18px'
    }
 
    const checkScreenSize = () => {
        if (window.innerWidth < 450)
        {
            var styleTableText = {
               background:"#ac0068",fontWeight:'bolder',fontSize:'12px'
            }
        }
    }

  return (
     <>
    <TableContainer component={Paper} style={{ width:'80%' }}>
      <Table aria-label="customized table">
        <TableHead >
          <TableRow >
            <StyledTableCell style={styleTableText}><LocationOnIcon className='me-2 mb-1' /><span className='d-none d-sm-block'>From-To</span></StyledTableCell>
            <StyledTableCell style={styleTableText}><LocalAirportIcon className='me-2 mb-1' />Trip</StyledTableCell>
            <StyledTableCell style={styleTableText}><FlightTakeoffIcon className='me-2 mb-1' />D.Depart</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
               {fromInput}<IoIosAirplane className='mx-2' /> {toInput}
              </StyledTableCell>
              <StyledTableCell>{tripInput}</StyledTableCell>
              <StyledTableCell>{dateDepa}</StyledTableCell>
            </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>

    <TableContainer component={Paper} style={{ width:'80%' }} className='mt-4'>
      <Table aria-label="customized table">
        <TableHead >
          <TableRow >
          <StyledTableCell  StyledTableCell style={{ background:"#ac0068",fontWeight:'bolder',fontSize:'18px' }}><FlightLandIcon className='me-2 mb-1' />D.Arrive</StyledTableCell>
            <StyledTableCell style={{ background:"#ac0068",fontWeight:'bolder',fontSize:'18px' }}><FlightClassIcon className='me-2 mb-1' />Passengers</StyledTableCell>
            <StyledTableCell style={{ background:"#ac0068",fontWeight:'bolder',fontSize:'18px' }}><AirplaneTicketIcon className='me-2 mb-1'/>Class</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <StyledTableRow >
              <StyledTableCell>{dateRetur}</StyledTableCell>
              <StyledTableCell>Adultes:{passengersAdultes} <span className='mx-3'></span> Childs:{passengersChild}</StyledTableCell>
              <StyledTableCell>{flightClass}</StyledTableCell>
            </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  </>
  );
}
