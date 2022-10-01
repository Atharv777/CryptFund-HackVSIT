import React from 'react'

import '@rainbow-me/rainbowkit/styles.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';

import { Link } from 'react-router-dom';

export default function Header() {



    return (
        <div className="w-full h-[75px] poppins bg-greenDark/[0.5] backdrop-blur-sm shadow-lg rounded-b-3xl flex flex-row justify-between items-center px-1.5 md:px-[70px]">

            <Link to="/">
                <div className="flex flex-row justify-center items-center p-0">
                    <p className="poppins flex-none font-semibold text-xl text-3xl text-white">Crypt</p>
                    <p className="poppins flex-none font-semibold text-xl text-3xl text-accentColor">Fund</p>
                </div>
            </Link>

            <div className="flex flex-row justify-center items-center p-0 flex-none gap-7">
                <Link to="/campaigns" className="poppins font-medium text-xs text-lightGray">Campaigns</Link>
                <Link to="/my-campaigns" className="poppins font-medium text-xs text-lightGray">My Campaigns</Link>
                <Link to="/my-donations" className="poppins font-medium text-xs text-lightGray">My donations</Link>
            </div>

            <ConnectButton
                showBalance={{ smallScreen: false, largeScreen: true }}
                accountStatus={{ smallScreen: "address", largeScreen: "address" }} />
        </div>
    )
}
