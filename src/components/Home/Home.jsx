import React from 'react';
import carPng from "../../assets/coolCar.png";

const Home = () => {
    return (
        <div className='dark:bg-black dark:text-white duration-300'>
            <div className="container min-h-[620px]">
                <div className='grid place-items-center grid-cols-1 sm-:grid-cols-2'>
                    <img src={carPng} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Home
