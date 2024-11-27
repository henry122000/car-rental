import React from 'react'

const navLinks = [
    {
        id: 1,
        name: "HOME",
        link: "/#",
    },
    {
        id: 2,
        name: "CARS",
        link: "/#car",
    },
    {
        id: 3,
        name: "ABOUT",
        link: "/#about",
    },
    {
        id: 4,
        name: "BOOKING",
        link: "/#booking",
    },
]

const Navbar = () => {
    return (
        <nav className='shadow-md'>
            <div className='container'>
                <div className='flex justify-between items-center'>
                    <div>
                        <h1 className='text-3xl font-bold font-serif'>FlexiRide</h1>
                    </div>
                    <div className='hidden md:block'>
                        <ul className='flex items-center gap-8'>
                            {navLinks.map((data) => (
                                    <li key={data.id} className='py-4'>
                                        <a 
                                        href={data.link} className='py-2 
                                        hover:border-b-2 
                                        hover:text-primary 
                                        hover:border-primary
                                        transition-colors
                                        duration-500 text-lg
                                        font-medium
                                        '>{data.name}</a>
                                    </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
