import React, { useEffect, useState ,useRef } from "react";
import Slider from "react-slick";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import img1 from "../../../../images/flightWorkers1.jpeg";
import img2 from "../../../../images/plane2.jpeg";
import img3 from "../../../../images/flightFood1.jpeg";
import img4 from "../../../../images/destinations.jpeg";
import EastIcon from '@mui/icons-material/East';
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

export default function AboutusCarousel()  {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

  const sliderRow = useRef(null)
  

    const carouselContent = [
        {img:img1 , title:'Quality services' , content:'Our flights give you the best services and comfortable travel.' , footer:'Find more'}, 
        {img:img2 , title:'Quality planes' , content:'Our flights have the best planes the Airbus A320 and A321 Neo LR.' , footer:'Find more'}, 
        {img:img3 , title:'Quality experience' , content:'Our flights give you the best ever experience in your travel.' , footer:'Find more'}, 
        {img:img4 , title:'45 country' , content:'Our plans visit more than 45 countries in all the world join us now.' , footer:'Find more'}
    ]


    const settings = {
      dots: true,
      infinite: true,
      autoplay:false,
      speed: 800,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      customPaging: i => (
        <div
          className="dots-not-active"
        >
        </div>
      ),
      responsive: [
        {
          breakpoint: 1090,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    };


    return (
      <div>
        <div className="d-flex justify-content-lg-space-between w-100 ab_carousel_btns">
            <button className="aboutus_carousel_btn first_cars_btn d-flex justify-content-center align-items-center" onClick={() => sliderRow.current.slickPrev()}> <BsArrowLeft /> </button>
            <button className="aboutus_carousel_btn second_cars_btn d-flex ms-auto justify-content-center align-items-center" onClick={() => sliderRow.current.slickNext()}> <BsArrowRight /> </button>
        </div>
        <Slider ref={sliderRow} {...settings} className='d-flex ' >
             {carouselContent.map( (item , index) => {
                 return (
                        <div key={index} class="card aboutusCards p-1 p-sm-4  border-white" style={{cursor:'grab !important',width:'80px'}}>
                              <img src={item.img} class="card-img-top shadow-sm rounded-0" style={{height:'260px'}} alt="..." />
                              <div class="card-body shadow pb-1 d-flex justify-content-start flex-column">
                                <h5 class="card-title text-start">{item.title}</h5>
                                <p class="card-text text-start"> {item.content} </p>
                                <a href="#" class="text-start d-flex justify-content-start">{item.footer} <p className="find_more_arrow ms-1"><ArrowForwardIosIcon style={{ fontSize:'15px' }} className='aboutusArrow' /><EastIcon className='aboutusArrowV2' /></p></a>
                              </div>
                        </div>
                 )
             } )}
        </Slider>

        
      </div>
    );
}
