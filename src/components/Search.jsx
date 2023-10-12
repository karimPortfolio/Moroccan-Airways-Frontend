import React  , {useContext} from 'react';
import NavbarDesk from './homeComponents/navbar/navbarDes';
import Navs from './homeComponents/navbar/Navs';
import Header from './homeComponents/header';
import 'bootstrap/dist/css/bootstrap.css';
import {flightContext} from './appContext/myAppContext';
import SearchIcon from '@mui/icons-material/Search';
import MatchedReser from './searchComp/MatchedReser';
import { AllCompFooter } from './homeComponents/footer/AllCompFooter';


function Search() {

  const {searchedCity ,setSearchedCity} = useContext(flightContext);


  return (
    <>
        <Header />
        <div className='pt-5'>
            <div className="searchPageIntro d-flex justify-content-center align-items-center">
                <h1 className='mt-5 text-white'><SearchIcon  className='mb-2 searchIco'/> Search Results</h1>
            </div>
            <div className='searchPageSection d-flex justify-content-center justify-content-md-start ps-md-5 ms-sm-5'>
                <h5 className='ms-md-5 text-start'>Your search: <span className='text-black'>{searchedCity}</span> </h5>
            </div>
            <div className="mt-5">
               <MatchedReser />
            </div>
            <AllCompFooter />
        </div>
    </>
  )
}

export default Search