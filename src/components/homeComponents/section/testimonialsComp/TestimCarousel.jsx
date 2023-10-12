import React, { useEffect, useState ,useRef } from "react";
import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";
import client1 from '../../../../images/clientsImgs/clientImg.jpeg'
import client2 from '../../../../images/clientsImgs/clientImg2.jpeg'
import client3 from '../../../../images/clientsImgs/clientImg5.jpeg'
import client4 from '../../../../images/clientsImgs/clientImg4.jpeg'
import client5 from '../../../../images/clientsImgs/clienImg3.jpeg'

export default function TestimCarousel()  {

  const sliderRow = useRef(null)
  

    const carouselContent = [
        {testimonials:'Great service i really enjoy every flight in your planes , quality service and also your discounts are amazing.',name:'Josephina Hadley',member:'Member Since 2022',Image:client1}, 
        {testimonials:'Great service i really enjoy every flight in your planes , quality service and also your discounts are amazing.',name:'Sherley Andy',member:'Member Since 2019',Image:client2}, 
        {testimonials:'Great service i really enjoy every flight in your planes , quality service and also your discounts are amazing.',name:'Kevin Hiram',member:'Member Since 2016',Image:client3}, 
        {testimonials:'Great service i really enjoy every flight in your planes , quality service and also your discounts are amazing.',name:'Bryn Cleveland',member:'Member Since 2021',Image:client4}
    ]


    const settings = {
      dots: true,
      infinite: true,
      autoplay:true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
    //   nextArrow: <SampleNextArrow />,
    //   prevArrow: <SamplePrevArrow />,
      customPaging: i => (
        <div className="dots-active-border">
               <div
                  className="dots-not-active2"
                >
                </div>
            </div>
      )
    };


    return (
      <div className="mx-lg-5 px-lg-5">
        <div className="testemonials_Quote_ico">
           <FaQuoteLeft />
        </div>
        <Slider ref={sliderRow} {...settings} className='d-flex mx-1 mx-sm-5 mt-4' >
             {carouselContent.map( (item , index) => {
                 return (
                        <div key={index} class="testimonials_content ">
                              <p> "{item.testimonials}" </p>
                              <p className="mt-4"> {item.name} </p>
                              <p className=""> {item.member} </p>
                        </div>
                 )
             } )}
        </Slider>

        
      </div>
    );
}
