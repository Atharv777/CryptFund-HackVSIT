import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className="w-full h-[75px] poppins bg-greenDark/[0.5] backdrop-blur-sm shadow-lg rounded-t-3xl flex flex-row justify-between items-center px-1.5 md:px-[70px] mt-auto">

            <Link to="/">
                <div className="flex flex-row justify-center items-center p-0">
                    <p className="poppins flex-none font-semibold text-xl text-3xl text-white">Crypt</p>
                    <p className="poppins flex-none font-semibold text-xl text-3xl text-accentColor">Fund</p>
                </div>
            </Link>


            <p className="poppins font-normal tracking-widest text-[12px] text-lightGray">
                Built by <a href="https://twitter.com/Atharvvarshney7/" target="_blank" className="text-white underline">Atharv varshney</a>
            </p>

            <span></span>

        </div>
    )
}
