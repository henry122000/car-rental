import React from 'react';
import carPng from "../../assets/coolCar.png";

const Home = () => {
    return (
        <div className='dark:bg-black dark:text-white duration-300 relative -z-20'>
            <div className="container min-h-[620px] flex">
                <div className='grid place-items-center grid-cols-1 sm:grid-cols-2'>
                    <div data-aos="zoom-in" data-aos-duration="1000" className='order-1 sm:order-2'>
                        <img src={carPng} alt='' className='relative -z-10 max-h-[600px] sm:scale-125'/>
                    </div>
                    <div className='order-2 sm:order-1 space-y-5 sm:pr-32'>
                        <p data-aos="fade-up" data-aos-delay="600"
                        className='text-primary text-2xl font-serif'>Keys to Freedom, Roads to Adventure!</p>
                        <h1 data-aos="fade-right" data-aos-duration="1000"
                        className='text-5xl lg:text-7xl font-semibold font-serif'>Car Rental</h1>
                        <p data-aos="fade-left" data-aos-duration="1000" className='font-serif'>Unlock your next journey with a few clicks. From sporty coupes to family-friendly SUVs, 
                            the open road is calling—you just need the perfect ride.</p>
                            <button data-aos="fade-up" data-aos-delay="600"
                            className='btn bg-primary 
                            text-white px-6 py-2 
                            rounded-md hover:bg-primary/80 duration-300'>Let's Start!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
