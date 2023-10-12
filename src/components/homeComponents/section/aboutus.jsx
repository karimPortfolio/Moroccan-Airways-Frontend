import React, { useEffect , useState } from 'react'
import AboutusAD from './aboutusComp/AboutusAD';
import AboutusCarousel from './aboutusComp/aboutusCarousel';

function Aboutus() {

     const [scrollReach , setScrollReach] = useState(false);

     window.onscroll = () => {
          if (window.scrollY > 320)
          {
               setTimeout( () => {
                    setScrollReach(true);
               },300)
          }
     }

  return (
    <>
         <div className=''>
             <div className="mx-3 px-lg-5 mx-md-5 py-5">
                 <div className=" aboutus_title1">
                      <h1 className='text-start'>Why choosing us ?</h1>
                 </div>
                 <div className="mt-2">
                      <h5 className='text-start aboutus_title2'  >QUALITY FLIGHTS</h5>
                 </div>
                 <div className='mt-4'>
                       <AboutusCarousel />
                 </div>
             </div>
             <div className='py-5'>
                      <AboutusAD />
             </div>
         </div>
    </>
  )
}

export default Aboutus