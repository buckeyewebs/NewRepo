"use client";

import Slider from 'react-slick';
import { useRef } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

const Carousel = () => {
  const sliderRef = useRef<Slider | null>(null);

  const data = [
    { image: '/assets/svgs/Person1.svg', info: 'This is a customer quote. The customer is going to share their opinion about our product or service, hopefully it’s going to be a positive one. The social proof section is important when you want to increase trust of your company.' },
    { image: '/assets/svgs/Person2.svg', info: 'This is a customer quote. The customer is going to share their opinion about our product or service, hopefully it’s going to be a positive one. The social proof section is important when you want to increase trust of your company.' },
    { image: '/assets/svgs/Person3.svg', info: 'This is a customer quote. The customer is going to share their opinion about our product or service, hopefully it’s going to be a positive one. The social proof section is important when you want to increase trust of your company.' },
    { image: '/assets/svgs/Person4.svg', info: 'This is a customer quote. The customer is going to share their opinion about our product or service, hopefully it’s going to be a positive one. The social proof section is important when you want to increase trust of your company.' },
    // Add more items as needed
  ];

  const settings = {
    dots: false,  // Disable dots
    infinite: true,
    speed: 500,
    slidesToShow: 3,  // Show 3 items at a time
    slidesToScroll: 1,
    swipeToSlide: true,
    centerMode: true,   // Center the first slide
    initialSlide: 0,    // Start from the first slide
    touchMove: true,
    draggable: true,
    autoplay: true,     // Enable auto-play
    autoplaySpeed: 2000, // Move forward every 3 seconds (3000ms)
    pauseOnHover: true, // Pause on hover (optional)
    pauseOnFocus: true, // Pause on focus (optional)
  };

  return (
    <div className="relative w-[1120px] h-[682px] mx-auto mt-[97.5px]">
      {/* Slider Component */}
      <Slider ref={sliderRef} {...settings}>
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center p-4 relative">
            {/* Circular Image */}
            <div className="relative w-full flex justify-center">
              <div className="absolute top-[-10px] w-24 h-24 rounded-full overflow-hidden">
                <Image src={item.image} alt={`Customer ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            </div>
            {/* Info Box */}
            <div className="w-[306px] h-[373px] bg-[rgba(112,154,90,0.29)] border border-gray-200 rounded-md flex flex-col items-center justify-start mt-12 pt-12">
              <p className="w-full h-full px-6 pt-6 text-center text-justify">{item.info}</p>
            </div>
          </div>
        ))}
      </Slider>

      {/* Navigation Buttons */}
      <div className="absolute top-[270px] left-0 transform -translate-y-1/2 hidden lg:block">
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          className="bg-[rgba(112,154,90,1)] ml-[-25px] text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>

      <div className="absolute top-[260px] right-0 mr-[-25px] transform -translate-y-1/2 hidden lg:block">
        <button
          onClick={() => sliderRef.current?.slickNext()}
          className="bg-[rgba(112,154,90,1)] text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;