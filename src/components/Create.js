import React, { useState } from 'react'

export default function Create() {

    const [name, setName] = useState(null)
    const [desc, setDesc] = useState(null)
    const [target, setTarget] = useState(null)
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)

    return (
        <div className="poppins w-full px-1.5 md:px-[70px] mt-16 mb-[100px]">

            <p className="poppins font-medium text-[30px] text-white text-center mb-[50px]">Create a Campaign</p>

            <div className="w-full h-full p-[30px] bg-greenDark rounded-2xl flex flex-row justify-between items-start">

                <div className="w-full mr-[25px] flex flex-col gap-[30px]">
                    <div className="relative">
                        <p className="poppins font-light text-[12px] text-white mb-[5px]">Name:</p>
                        <input
                            className="bg-backgroundColor/[0.75] rounded-[10px] p-[10px] pr-[60px] w-full text-white outline-none focus:shadow-xl placeholder:text-[#4B4B4B]"
                            placeholder='John Doe - Medical & Financial support'
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <span className="absolute bottom-[5px] right-[7px] font-light text-[#4B4B4B] text-[12px]">
                            {name ? name.length : 0} / 100
                        </span>
                    </div>

                    <div className="relative">
                        <p className="poppins font-light text-[12px] text-white mb-[5px]">Description:</p>
                        <textarea
                            className="resize-none bg-backgroundColor/[0.75] rounded-[10px] p-[10px] w-full h-[150px] text-white outline-none focus:shadow-xl placeholder:text-[#4B4B4B]"
                            placeholder='John Doe is a 24 year old cancer patient .....'
                            type="text"
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                        />
                        <span className="absolute bottom-[5px] right-[7px] font-light text-[#4B4B4B] text-[12px]">
                            {desc ? desc.length : 0} / 500
                        </span>
                    </div>
                </div>

                <div className="w-full ml-[25px] flex flex-col gap-[30px]">
                    <div>
                        <p className="poppins font-light text-[12px] text-white mb-[5px]">Target donation ( in ETH ):</p>
                        <input
                            className="bg-backgroundColor/[0.75] rounded-[10px] p-[10px] w-full text-white outline-none focus:shadow-xl placeholder:text-[#4B4B4B]"
                            placeholder='100'
                            type="number"
                            value={target}
                            onChange={(e) => setTarget(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-row justify-between items-center">
                        <div className="w-full mr-[15px]">
                            <p className="poppins font-light text-[12px] text-white mb-[5px]">Start Date:</p>
                            <input
                                className="bg-backgroundColor/[0.75] rounded-[10px] p-[10px] w-full text-white outline-none focus:shadow-xl placeholder:text-[#4B4B4B]"
                                placeholder='dd - mm - yyyy'
                                type="date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                            />
                        </div>
                        <div className="w-full ml-[15px]">
                            <p className="poppins font-light text-[12px] text-white mb-[5px]">End Date:</p>
                            <input
                                className="bg-backgroundColor/[0.75] rounded-[10px] p-[10px] w-full text-white outline-none focus:shadow-xl placeholder:text-[#4B4B4B]"
                                placeholder='dd - mm - yyyy'
                                type="date"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                            />
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}
