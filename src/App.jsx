import './App.css';
import { useContext } from 'react';
import {Routes , Route} from 'react-router-dom'
import {flightContext} from './components/appContext/myAppContext';
import Home from './components/home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Search from './components/Search';
import NotFound404 from './components/NotFound404';
import Login from './components/auth/Login';
import Register2 from './components/auth/Register2';
import { myAuthContext } from './components/appContext/AuthContext';
import { UserDashboard } from './components/UserDashboard';
import { FlightsRes } from './components/FlightsRes';
import ReservConfirmation from './components/ReservatioComp/ReservConfirmation';
import ReservationPayment from './components/ReservatioComp/ReservationPayment';
import ReserCreated from './components/ReservatioComp/ReserCreated';
import { myReservationContext } from './components/appContext/ReservationContext';
import CheckFlightStat from './components/CheckFlightStat';


function App() {

  const {navOpen , setNavOpen} = useContext(flightContext);
  const {isAuthincated} = useContext(myAuthContext);
  const {reservationStatus} = useContext(myReservationContext)

  return (
    <div className={navOpen ? 'app_shadow App' : 'App'} >
        <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/search' element={<Search />} />
              <Route path='/signin' element={<Login />} />
              <Route path='/signup' element={<Register2 />} />
              <Route path='/reservation' element={<FlightsRes />} />
              <Route path='/reservation/:id' element={<ReservConfirmation />} />
              <Route path='/reservation/:id/payments' element={<ReservationPayment />} />
              <Route path='/flightstatus' element={<CheckFlightStat />} />  
              {
                 reservationStatus == 'Reservation success' ? (<Route path='/reservationinformations' element={<ReserCreated />} /> ) : ('')
              }
              {
                 isAuthincated ? (<Route path='/dashboard' element={ <UserDashboard/> } />) : ('') 
              }
              <Route path='/*' element={<NotFound404 />} />
        </Routes>

    </div>
  );
}

export default App;
