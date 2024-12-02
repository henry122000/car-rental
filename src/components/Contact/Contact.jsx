import React from 'react'

const Contact = () => {
  return (
    <div id="contact" data-aos="zoom-in" className='dark:bg-black dark:text-white py-14'>
      <div className="container">
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 bg-gray-800 py-8 px-6'>
            <div className='col-span-2 space-y-3'>
                <h1 className="text-3xl sm:text-4xl font-bold text-white">
                    Contact us now for your next adventure!
                </h1>
                <p className='text-gray-400'>Something</p>
            </div>
            <div className='grid place-items-center'>
                <a href= "#" className='inline-block font-semibold py-2 px-6 bg-primary
                text-white rounded-lg tracking-wider uppercase hover:bg-primary/80 duration-300'>
                    Contact
                </a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
