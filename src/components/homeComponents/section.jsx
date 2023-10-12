import React from 'react'
import Cookiespopup from './Cookiespopup'
import LandingPage from './landingPage/landingPage'
import ReservationBox from './landingPage/ReservationBox'
import ContactUs from './messgesBar/contactUs'
import Aboutus from './section/aboutus'
import Offers from './section/offers'
import Testimonials from './section/Testimonials'

function Section() {
  return (
     <section>
         <Cookiespopup />
         <LandingPage />
         <ContactUs />
         <ReservationBox />
         <Aboutus />
         <Offers />
         <Testimonials />
     </section>
  )
}

export default Section