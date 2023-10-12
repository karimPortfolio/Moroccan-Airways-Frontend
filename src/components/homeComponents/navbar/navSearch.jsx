import React, { useContext, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import LoadingButton from '@mui/lab/LoadingButton';
import { flightContext } from '../../appContext/myAppContext';
import {Link, NavLink, useNavigate} from 'react-router-dom';
import Alert from '@mui/material/Alert';

function NavSearch() {

   const [searchOn , setSearchOn] = useState(false);
   const [loading , setLoading] = useState(false);
   const {searchedCity ,setSearchedCity} = useContext(flightContext);
   const {allMatchedCitys,setAllMatchedCitys} = useContext(flightContext);
   const {allReservations} = useContext(flightContext);   
   const {filterFlights} = useContext(flightContext);
   const [emptySearchVal , setEmptySearchVal]  = useState(false);
   const navigate = useNavigate();

   const handleSearchOn = () => {
      setSearchOn(true);
   }
   const handleSearchOff = () => {
      setSearchOn(false);
   }

   const handleBtnLoading = () => {
       setLoading(true);
       setTimeout( () => {
           setLoading(false);
           if (searchedCity !== '')
           {
                navigate('/search', { replace: true });
                // const matchedRes = allReservations.filter(
                //     (res) => {
                //          if (res.from.toLowerCase().includes(searchedCity.toLowerCase()) || res.to.toLowerCase().includes(searchedCity.toLowerCase()))
                //          {
                //              return res;
                //          }
                //          else{
                //              return '';
                //          }
                //     }
                // )
                // setAllMatchedCitys(matchedRes);
                filterFlights();
                setSearchOn(false);
                setEmptySearchVal(false);
           }
           else{
               setEmptySearchVal(true);
           }
       },3000)
   }

  return (

    <div className='searchDes'>
          <a href="#" className="text-white" onClick={handleSearchOn}><SearchIcon /></a>
          <div className="searchBoxDesktop shadow" style={searchOn ? {display:'block'} : {display:'none'}}>
              <div className='d-flex justify-content-end pt-3 pe-4'>
                  <CloseIcon style={{fontSize:'35px' , cursor:'pointer'}} onClick ={handleSearchOff} />
              </div>
              <h3 className='mt-5' style={{ color:'#ac0068' }}>Search For Flight</h3>
              <div className='mt-4 mb-4 mt-sm-5 d-flex justify-content-center align-items-center flex-column flex-sm-row'>
                      <TextField
                        id="standard-multiline-flexible"
                        label="Example search: Tangier"
                        multiline
                        maxRows={4}
                        variant="standard"
                        className='w-50 searchInputField'
                        size='large'
                        style = {{fontSize:'20px'}}
                        onChange = {(e) => setSearchedCity(e.target.value)}
                      />
                       <Link to='/search' style={{ textDecoration:'none' }} id='searchLink' onClick={e=>e.preventDefault()}><LoadingButton onClick={handleBtnLoading} size='large' loading={loading} endIcon={<SearchIcon />} loadingPosition="end"  variant="contained" style={{background:'#ac0068' , color:'#FFFF'}} className ='ms-sm-5 mt-4 mt-sm-2 searchLoadingBtn' > <span>Search</span> </LoadingButton></Link>
                      
            </div>
            <div className={emptySearchVal ? 'd-flex justify-content-center mx-md-4 px-md-5 mt-4' : 'd-none mx-5 px-5'}>
                 <Alert severity="error" className='w-75 searshAlert'>You need to enter a city to search.</Alert>
            </div>
            <div className={emptySearchVal ? 'd-none' : 'd-block mt-4'}>
                 {searchedCity !== '' ? <p><span style={{ color:'#ac0068' }}>Search for:</span>{searchedCity}</p> : 'Please enter a city to search example:Tangier'}
            </div>
          </div>
    </div>

  )
}

export default NavSearch