import React, { useContext, useEffect , useState } from 'react'
import { flightContext } from '../appContext/myAppContext';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import {Link , useNavigate} from 'react-router-dom'

function MatchedReser() {

    const [searchOn , setSearchOn] = useState(false);
    const {searchedCity ,setSearchedCity} = useContext(flightContext);
    const [loadApi , setLoadApi] = useState(false);
    const [searchValue , setSearchValue] = useState('');
    const {allReservations} = useContext(flightContext);
    const {allMatchedCitys,setAllMatchedCitys} = useContext(flightContext);
    const [emptySearchVal , setEmptySearchVal]  = useState(false);

   const navigate = useNavigate();

    useEffect ( () => {
          setLoadApi(true);
          setTimeout( () => {
              setLoadApi(false);
              if (searchValue !== '')
           {
                const matchedRes = allReservations.filter(
                    (res) => {
                         if (res.from.toLowerCase().includes(searchValue.toLowerCase()) || res.to.toLowerCase().includes(searchValue.toLowerCase()))
                         {
                             return res;
                         }
                         else{
                             return '';
                         }
                    }
                )
                setAllMatchedCitys(matchedRes);
                setSearchOn(false);
                setSearchedCity(searchValue);
                setEmptySearchVal(false);
           }
           else{
               setEmptySearchVal(true);
           }
          },5000);
    },[searchedCity]);


  return (
    <div className='searchReservResult d-flex justify-content-center align-items-center flex-column px-3 px-lg-0'>
        
        {
          
            loadApi ? (
                <CircularProgress color="secondary" className='mt-5' />
            ) : (
              allMatchedCitys.length !== 0  ? (
                searchedCity !== '' ? (
                  allMatchedCitys.map(
                          city => {
                              return(
                                  <div key={city.id} className="m-3 cards shadow">
                                        <div className='d-flex justify-content-start'>
                                            <h5 className='text-start'><span>From:</span> {city.from} </h5>
                                            <h5 className='text-start ms-5'><span>To:</span> {city.to} </h5>
                                        </div>
                                        <div className='d-flex justify-content-start flex-column flex-sm-row'>
                                            <p className='text-start'><span>Places available:</span> {city.placesRemain} </p>
                                            <p className='text-start ms-0 ms-sm-3 ms-lg-4'><span>Date depart:</span> {city.dateDepart} </p>
                                        </div>
                                        <div className="d-flex">
                                            <p className='text-start'><span>Price Economy:</span> {city.priceEconomy}$</p>
                                            <p className='text-start ms-4'><span>Price Premium:</span> {city.pricePremuim}$</p>
                                        </div>
                                        <div className="d-flex">
                                        <Link to={'/reservation/'+city.id} className='text-decoration-none'><Button variant="contained" style={{ background:'#ac0068' }}>Book now</Button></Link>
                                        </div>
                                  </div>
                              )
                          }
                  )
                ) : ('')
              ) : (
                <h5 className='mt-5'>No reservations found for <span>{searchedCity}</span> </h5>
              )

            )
        
        }
    </div>
  )
}

export default MatchedReser