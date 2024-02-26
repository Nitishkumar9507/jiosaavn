import React from 'react';
import Navbar from './Navbar';

const TwoVerticalDivisions = () => {
    return (
        <div className="flex flex-col h-screen">
            <div className='h-[10%] '>
            <Navbar />
            </div>
            <div className='h-[76%] bg-blue-300 '>
                <div className="flex h-full ">
                    {/* First Division (20% width) */}
                    <div className="w-2/12 flex-none bg-blue-500 overflow-y-auto p-4">
                    <h2 className="text-white">First Division</h2>
                    <div className="bgred"></div>
                    <div className="bgred"></div>
                    <div className="bgred"></div>
                    <div className="bgred"></div>
                    <div className="bgred"></div>
                    <div className="bgred"></div>
                    <div className="bgred"></div>
                    <div className="bgred"></div>
                </div>

                    {/* Second Division (80% width) */}
                    <div className="flex-1 bg-green-500 p-4">
                        <h2 className="text-white">Second Division</h2>
                        {/* <div className="h-2 bg-white my-2"></div> */}
                        {/* <p className="text-white">More content goes here...</p> */}
                    </div>
                </div>
            </div>
            <div className='bottomdiv h-[14%] bg-gray-300 min-h-20 w-full flex gap-1'>
                <div className="songdetail bg-red-200 h-full w-1/3"></div>
                <div className="songcontrolsCenter bg-red-200 h-full w-1/3"></div>
                <div className="songcontrolsRight bg-red-200 h-full w-1/3"></div>
            </div>
        </div>
    );
};

export default TwoVerticalDivisions;
