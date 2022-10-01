import React from 'react'

import Toroid from "../assets/toroid.svg"

import { Link } from 'react-router-dom'

export default function Home() {

    return (
        <div className="poppins w-full px-1.5 md:px-[70px] mt-32 mb-[100px] relative">

            <div className="flex flex-row justify-between items-start mb-[400px]">
                <div className="z-20">
                    <h2 className="poppins font-semibold text-[55px] text-white md:w-[600px] w-full cursor-default">Web3 CrowdFunding platform is here</h2>

                    <div className=" w-fit border-2 mt-5 border-[#143027] bg-greenDark/[0.5] transition shadow-primary hover:shadow-secondary hover:scale-105 flex flex-row items-start px-[20px] py-[12.5px] rounded-3xl cursor-pointer">
                        <Link to="/create" className="poppins font-bold text-[15px] text-[#4AB090]">Start a campaign</Link>
                    </div>
                </div>

                <div className="w-[400px] h-full z-20">
                    <p className="poppins font-medium text-[30px] text-white text-center mb-2.5">Recent Campaign</p>

                    <div className="flex flex-col justify-center items-center p-0 gap-1.5 bg-greenDark w-[400px] h-[300px] rounded-3xl">
                        <p className="poppins font-bold text-[20px] text-accentColor/[0.4] cursor-default">No active campaigns found</p>
                        <p className="poppins font-regular text-[17px] text-[#3e4140] cursor-default">
                            <Link to="/create" className="underline cursor-pointer">Start</Link> your campaign now
                        </p>
                    </div>
                </div>
            </div>

            <p className="poppins font-semibold text-[30px] text-white text-center mb-[50px] z-20">Key features</p>

            <div className="flex flex-row justify-between items-center px-[50px] flex-wrap z-20">
                <div className="bg-greenDark rounded-3xl w-[350px] h-[200px] flex flex-col justify-center items-center p-0 px-[30px]">
                    <p className="poppins font-bold text-[20px] text-center text-accentColor/[0.75]">Simple fundraising with just one click</p>
                </div>
                <div className="bg-greenDark rounded-3xl w-[350px] h-[200px] flex flex-col justify-center items-center p-0 px-[30px]">
                    <p className="poppins font-bold text-[20px] text-center text-accentColor/[0.75]">Raise funds for any use case</p>
                </div>
                <div className="bg-greenDark rounded-3xl w-[350px] h-[200px] flex flex-col justify-center items-center p-0 px-[30px]">
                    <p className="poppins font-bold text-[20px] text-center text-accentColor/[0.75]">Fully decentralized zero fees platform</p>
                </div>
            </div>

            <img src={Toroid} className="absolute left-0 top-[100px] xl:top-[50px] w-[150vw] z-10" />

        </div>
    )
}
