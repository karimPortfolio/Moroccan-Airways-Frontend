import React, { useContext } from 'react'
import { myAuthContext } from '../appContext/AuthContext'
import { flightContext } from '../appContext/myAppContext';
import Skeleton from '@mui/material/Skeleton';
import { Link } from 'react-router-dom';

export default function DashboardHome() {
    const {loading} = useContext(flightContext);
    const {numBooks} = useContext(myAuthContext);
    const {totalMoneySpends} = useContext(myAuthContext);
    const name = window.localStorage.getItem("user-name");

  return (
    <div className='pt-4 dashboardHome'>
          <div>
                <div className='d-flex justify-content-center'>
                     {
                       loading  ? (<Skeleton variant="rectangular" className="mx-4" style={{ width:"100%" }} height={40} />) : (<h2 className='text-start welcoming_text ms-3 ms-sm-4 w-100'>Welcome <span>{name}</span> </h2>)
                     }
                </div>
                <div className='d-flex justify-content-center'>
                     {
                       loading  ? (<Skeleton variant="rectangular" className="mx-4" style={{ width:"100%" }} height={40} />) : (<p className='text-start ms-3 ms-sm-4 w-100'>Your dashboard analytics </p>)
                     }
                </div>
                <div className="dashboard-analytics px-3 px-sm-4 row w-100 m-0 mt-4 justify-content-between">
                     {
                        loading ? (
                                    <Skeleton variant="rectangular" className="col-md-5 col-lg-3" style={{ width:"100%" }} height={110} />
                        ) : (
                              <div className="col-md-5 cards col-lg-3">
                                    <div className='d-flex justify-content-start flex-column'>
                                        <h5 className="text-start">Total Booking's</h5>
                                        <p className="text-start mb-1">{numBooks}</p>
                                        <Link to="" className="text-start">View</Link>
                                    </div>
                              </div>
                        )
                     }
                     {
                        loading ? (
                                    <Skeleton variant="rectangular" className="mt-4 col-md-5 col-lg-3" style={{ width:"100%" }} height={110} />
                        ) : (
                             <div className="mt-4 mt-md-0 col-md-5 cards col-lg-3">
                                  <div className='d-flex justify-content-start flex-column'>
                                      <h5 className="text-start">Money spending</h5>
                                      <p className="text-start mb-1">${totalMoneySpends}</p>
                                      <Link to="" className="text-start">View</Link>
                                  </div>
                            </div>
                        )
                     }
                     {
                        loading ? (
                                    <Skeleton variant="rectangular" className="col-md-5 mt-4 col-lg-3" style={{ width:"100%" }} height={110} />
                        ) : (
                              <div className="mt-4 mt-lg-0 col-md-5 cards col-lg-3">
                                    <div className='d-flex justify-content-start flex-column'>
                                        <h5 className="text-start">Canceled booking's</h5>
                                        <p className="text-start mb-1">0</p>
                                        <Link to="" className="text-start">View</Link>
                                    </div>
                              </div>
                        )
                     }
                     
                </div>
                <div className="dashboardAds d-flex justify-content-start align-items-start flex-column py-5 ps-3 pe-2 ps-md-4 pe-md-0">
                     {
                        loading ? (<Skeleton variant="rectangular" className="me-5" style={{ width:"96%" }} height={300} />) : (
                          <div className="first_ad d-flex justify-content-center align-items-start flex-column ps-sm-4">
                             <h5 className='text-start ms-md-3 mb-0 mb-md-2'>Join Privilege Club</h5>
                             <p className='text-start ms-md-3 my-3'>Earn Avios and use them towards shopping at Morocco Airways shops for Free food, upgrades, extra baggage, and more exclusive benefits.</p>
                             <button  className='btn btn-danger ms-md-3'>Join now</button>
                          </div>)
                     }
                </div>
          </div>
    
    </div>
  )
}
