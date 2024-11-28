import React from 'react';
import carPng from '../../assets/aboutCar.png'

const About = () => {
  return (
    <div className='dark:bg-dark dark:text-white 
    duration-300 sm:min-h-[600px] 
    sm:grid sm:place-items-center'>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
            <div>
            <img src={carPng} alt='Car in About Page' 
            className='sm:scale-105 sm:-translate-x-11 max-h-[300px]'/>
            </div>
            <div>
                <div className='space-y-5 sm:p-16 pb-6'>
                    <h1 className='text-3xl sm:text-4xl font-bold font-serif'>About us</h1>
                    <p>At FlexiRide, we believe that every journey should be as exciting as the destination. 
                        Founded with a passion for seamless travel and a commitment to exceptional customer service, 
                        we offer a wide range of vehicles tailored to your needs. From compact city cars to luxurious SUVs, 
                        our fleet is designed to deliver comfort, safety, and style—every mile of the way.</p>
                    <p>With transparent pricing, flexible rental options, and 24/7 support, we make car rental simple, 
                        affordable, and stress-free. Whether you're embarking on a business trip, family vacation, 
                        or spontaneous adventure, we’re here to help you find the perfect ride and create 
                        unforgettable memories on the road.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
