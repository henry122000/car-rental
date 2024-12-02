import React from 'react';
import maserati from "../../assets/maserati.png";
import lamborghiniUrus from "../../assets/lamborghiniUrus.png";
import laferrari from "../../assets/laferrari.png";

const CarListData = [
    {
        name: "Maserati GranTurismo",
        price: 1000,
        image: maserati,
        aosDelay: "0",
    },
    {
        name: "Lamborghini Urus",
        price: 1500,
        image: lamborghiniUrus,
        aosDelay: "500",
    },
    {
        name: "LaFerrari",
        price: 2000,
        image: laferrari,
        aosDelay: "1000",
    },
]
const CarList = () => {
    return (
        <div  id="cars" data-aos="fade-up" className='pb-24 pt-12 bg-white dark:bg-dark dark dark:text-white'>
            <div className="container">
                <h1 className='text-3xl ssm:text-4xl font-semibold font-serif mb-3'>Available Car</h1>
                <p data-aos="fade-up" className='text-sm pb-10'>Something</p>
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
                        {
                            CarListData.map((data) => {
                                return (
                                    <div key={data.name} data-aos="fade-up"
                                    data-aos-delay={data.aosDelay}
                                    className="space-y-3 border-2 border-gray-300 
                                    hover:border-primary p-3 rounded-xl relative group">
                                        <div className="w-full h-[150px]">
                                            <img className="w-full h-[160px] object-contain sm:translate-x-8
                                            group-hover:translate-x-16 duration-700"
                                            src={data.image} alt="" />
                                        </div>
                                        <div className="space-y-2">
                                            <h1 className="text-primary font-semibold">{data.name}</h1>
                                            <div className="flex justify-between intems-center text-xl font-semibold">
                                                <p>${data.price}/Day</p>
                                                <a href="#">Details</a>
                                            </div>
                                        </div>
                                        <p className="text-xl font-semibold absolute top-0 left-3">
                                            100Km
                                        </p>
                                    </div>
                                );
                            })}
                    </div>
                </div>
                <div className='grid place-content-center mt-8'>
                    <button data-aos="date-dwon"className='button-outline'>
                        Let's Start!
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CarList
