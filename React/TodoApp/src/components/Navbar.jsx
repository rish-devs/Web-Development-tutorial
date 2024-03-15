import React from 'react'


const Navbar = () => {
    // console.log('navbar rendering...')
    return (
        <>
            <nav className="flex bg-slate-700 text-white py-2 items-center justify-center ">
                <ul className="flex gap-8 mx-9 ">
                    <li className='cursor-pointer hover:font-bold transition-all duration-75 '>Home</li>
                    <li className=' '>
                        <div className="logo">
                            <span className=' font-bold text-xl mx-8'>iTask</span>
                        </div>
                    </li>
                    <li className='cursor-pointer hover:font-bold transition-all duration-75 '>Your Tasks</li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
