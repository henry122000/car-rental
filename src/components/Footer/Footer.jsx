import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa'

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Cars",
        link: "/#cars",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
]

const Footer = () => {
  return (
    <div className='bg-gray-100 dark:bg-dark dark:text-white rounded-t 3xl'>
      <div className="container ">
        <div className='grid md:grid-cols-3 py-5'>
            <div className='py-8 px-4'>
                <h1 className='text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3'>
                    Car Rental
                </h1>
                <p>Something</p><br />
                <div className='flex items-center gap-3'>
                    <FaLocationArrow/>
                    <p>Vancouver, BC</p>
                </div>
                <div className='flex items-center gap-3'>
                    <FaMobileAlt/>
                    <p>+1 (123) 456-789</p>
                </div>
                <div className='flex items-center gap-3 mt-6'>
                    <a href='#'>
                        <FaInstagram className='text-3xl hover:text-primary duration-300'/>
                    </a>
                    <a href='#'>
                        <FaFacebook className='text-3xl hover:text-primary duration-300'/>
                    </a>
                    <a href='#'>
                        <FaLinkedin className='text-3xl hover:text-primary duration-300'/>
                    </a>
                </div>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                <div>
                    <div className='py-8 px-20'>
                        <h1 className='text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3'>
                            Go to
                        </h1>
                        <ul className='flex flex-col gap-3'>
                            {
                                FooterLinks.map((data) => {
                                    return (
                                        <li key={data.title}
                                        className='cursor-pointer hover:text-primary duration-300'>
                                            <span className='mr-2'>&#11162;</span>
                                            <a href={data.link}>{data.title}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
