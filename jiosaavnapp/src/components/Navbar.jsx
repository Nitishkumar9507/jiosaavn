import React from 'react'

function Navbar() {
    return (
        <div className='bg-gray-300 flex gap-2 p-1 h-full min-h-16 '>
            <div className="navdiv flex gap-1 w-1/4">
                <div className=" logo w-5/12 bg-blue-400 h-full"></div>
                <div className="w-7/12 font-semibold list-none justify-between items-center flex h-full">

                    <li>Music</li>
                    <li>Podcasts</li>
                    <li>Go Pro</li>

                </div>
            </div>

            <div className="navdiv w-2/4">
                <div className="flex items-center w-full h-full p-4 rounded-full">
                    <input
                        type="text"
                        className="flex-1 px-4 py-2 rounded-full outline-none"
                        placeholder="Search..."
                    />
                    <button className="ml-4 px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 focus:outline-none">
                        Search
                    </button>
                </div>
            </div>

            <div className="navdiv w-1/4">
                <div className="font-semibold list-none justify-around items-center flex h-full">

                    <li>Music Languages</li>
                    <li>Log In</li>
                    <li>Sign Up</li>

                </div>
            </div>
        </div>
    )
}

export default Navbar