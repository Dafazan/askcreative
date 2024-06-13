import React from 'react'

function EventReg({ click }) {
    return (
        <div className="fixed z-50 inset-0 backdrop-blur-sm mx-auto w-full justify-center">

            <div className=" flex  justify-center mx-auto w-6/12 h-5/6 my-10 bg-white border-2 rounded-md">


                <div className="w-full">
                    <div className="flex justify-end m-2 " onClick={() => { click }}>

                        <svg width="25" height="25" viewBox="0 0 294 294" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="147" cy="147" r="147" fill="#FF0000" />
                            <path d="M74 75L147.25 147M220.5 219L147.25 147M147.25 147L220.5 75L74 219" stroke="white" stroke-width="38" />
                        </svg>
                    </div>
                    <div className="mx-10">

                        <div className="justify-center flex w-full">

                            <p className="font-bold text-2xl mx-auto mb-10 mt-5">Form Registration</p>
                        </div>
                        <div className="flex flex-col justify-center w-full">
                            <p>Name:</p>
                            <input type="text" className="bg-slate-200 border-gray-400 rounded-md" />
                        </div>
                        <div className="flex flex-col justify-center w-full mt-5">
                            <p>Email:</p>
                            <input type="text" className="bg-slate-200 border-gray-400 rounded-md" />
                        </div>
                        <div className="flex flex-col justify-center w-full mt-5">
                            <p>No. WhatsApp:</p>
                            <input type="text" className="bg-slate-200 border-gray-400 rounded-md" />
                        </div>
                        <div className="mt-5 flex flex-col justify-center">
                            <p className="">lorem</p>
                            <div className="flex justify-center items-center ">
                                <div className="relative z-20 bg-slate-200 rounded-md dark:bg-form-input  w-full mt-2">
                                    <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2">
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        ></svg>
                                    </span>

                                    <select
                                        className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-2   px-1 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-inputtext-black dark:text-white' 
                }`}
                                    >
                                        <option
                                            value="d"
                                            className="text-body dark:text-bodydark"
                                        >
                                            Select
                                        </option>
                                        <option
                                            value="N"
                                            className="text-body dark:text-bodydark"
                                        >
                                            Mahasiswa
                                        </option>
                                        <option
                                            value="O"
                                            className="text-body dark:text-bodydark"
                                        >
                                            Dosen
                                        </option>
                                        <option
                                            value="O"
                                            className="text-body dark:text-bodydark"
                                        >
                                            Umum
                                        </option>
                                    </select>


                                </div>
                            </div>
                        </div>

                        <button className="flex justify-center w-full bg-green-600 rounded-md py-2 text-white font-bold text-xl my-10">
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventReg