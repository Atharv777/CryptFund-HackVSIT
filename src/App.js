import React from 'react'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './components/Home'
import Create from './components/Create'
import Campaigns from './components/Campaigns'
import MyCampaigns from './components/MyCampaigns'
import MyContributions from './components/MyContributions'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";


function Layout({ element }) {
    return (
        <>
            <Header />
            {element}
            <Footer />
        </>
    )
}


export default function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout element={<Home />} />,
        },
        {
            path: "/create",
            element: <Layout element={<Create />} />,
        },
        {
            path: "/campaigns",
            element: <Layout element={<Campaigns />} />,
        },
        {
            path: "/my-campaigns",
            element: <Layout element={<MyCampaigns />} />,
        },
        {
            path: "/my-contributions",
            element: <Layout element={<MyContributions />} />,
        },
    ]);

    return (
        <div className="w-full min-h-[100vh] h-full relative flex flex-col">

            <RouterProvider router={router} />

        </div>
    )
}