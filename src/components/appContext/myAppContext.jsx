import axios from 'axios';
import React, { useState , createContext, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';

export const flightContext = createContext();

function MyAppContext(props) {

  const [navOpen , setNavOpen] = useState(false)

  const [searchedCity , setSearchedCity] = useState('');

  const [allReservations , setAllReservations] = useState([]);

  const  [allMatchedCitys , setAllMatchedCitys]=useState([]);

  const [loading , setLoading] = useState(true);

  const [matchedResNeeds ,setMatchedResNeeds ] = useState([]);

  // reservation inputs
  const [fromInput , setFromInput] = useState('');
  const [toInput , setToInput] = useState('');
  const [tripInput , setTripInput] = useState('');
  const [dateDepa , setDateDepa] = useState('dd/mm/yyyy');
  const [dateRetur , setDateRetur] = useState('dd/mm/yyyy');
  const [passengersAdultes , setPassengersAdultes] = useState(1);
  const [passengersChild, setPassengersChild] = useState(0);
  const [flightClass, setFlightClass] = useState('');
  const [flightStatus , setFlightStatus] = useState([]);
  const [flightStatEmail , setFlightStatEmail] = useState('');
  const [flightStatName , setFlightStatName] = useState('');

  

  //check flight status
  const [flightFound , setFlightFound] = useState('');

  const navigate = useNavigate();

  const handleNavOpen = status => {
       setNavOpen(status);
  }



  //get reservations flights 
     useEffect( () => {
        if (searchedCity !== '')
        {
            const flights_url = "https://moroccan-flights.000webhostapp.com/api/flights";
            axios.get(flights_url)
             .then(res => {
                 if (res.ok)
                 {
                   setAllReservations(res.data);
                 }
             })
        }

        if (fromInput !== '' && toInput !== '' && tripInput !== '' && dateDepa !== 'dd/mm/yyyy' && parseInt(passengersAdultes) > 0)
        {
           const flights_url = "https://moroccan-flights.000webhostapp.com/api/flights";
           axios.get(flights_url)
            .then(res => {
                if (res.ok)
                {
                    setAllReservations(res.data);
                }
            })
        }
  
     },[searchedCity , fromInput ,flightClass]);

     //handle matched reservation with user needs
     useEffect( () => {
          if (fromInput !== '' && toInput !== '' && tripInput !== '' && dateDepa !== 'dd/mm/yyyy' )
          {
               if (allReservations.length > 0)
               {
                    const matchedRes = allReservations.find(res => {
                         if (res.from == fromInput && res.to == toInput)
                         {
                              return res;
                         }
                    })

                    matchedResNeeds.push(matchedRes);
               }
          }
     },[allReservations])

     const checkFlightStatu = () => {
          const userData = new FormData();
          userData.append("email",flightStatEmail);
          userData.append("name",flightStatName);
          console.log(...userData);
          const url3 = 'https://moroccan-flights.000webhostapp.com/api/reservations/show';
          axios.post(url3 , userData)
          .then(res => {
               if (res.ok)
               {
                   setFlightFound(res.data);
               }
          })
          .catch(err => console.log(err))
          setTimeout( () => {
               navigate('/flightstatus' , {replace:true} );
          },1000);
          
     }

   //handle skelet load

     useEffect( () => {
          setLoading(true);
          setTimeout( () => {
               setLoading()
          },4000)
          
     },[])

     //filter the searched flights

     const filterFlights = () => {
          const matchedRes = allReservations.filter(
               (res) => {
                    if (res.from.toLowerCase().includes(searchedCity.toLowerCase()) || res.to.toLowerCase().includes(searchedCity.toLowerCase()))
                    {
                        return res;
                    }
                    else{
                        return '';
                    }
               }
           )
           setAllMatchedCitys(matchedRes);
     }

  const values = {
          handleNavOpen , navOpen , setNavOpen ,
          searchedCity ,setSearchedCity , allMatchedCitys,setAllMatchedCitys ,
          allReservations ,setAllReservations, loading,fromInput , setFromInput
          ,toInput , setToInput, dateDepa , setDateDepa,dateRetur , setDateRetur,
          passengersAdultes , setPassengersAdultes,passengersChild, setPassengersChild,
          flightClass, setFlightClass,tripInput , setTripInput ,matchedResNeeds ,
          setFlightStatEmail, setFlightStatName,flightStatus,checkFlightStatu ,
          filterFlights,flightFound,
  }

  
  return (

        <flightContext.Provider value = {values}>
            {props.children}
        </flightContext.Provider>
  )
}

export default MyAppContext
