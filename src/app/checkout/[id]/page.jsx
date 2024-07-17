'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { getServiceDetails } from '@/services/getServiceData';
import { useSession } from 'next-auth/react';


const CheckoutPage = ({ params }) => {
    const [service, setService] = useState({})
    const { data } = useSession()

    const loadService = async () => {
        const details = await getServiceDetails(params.id);
        setService(details);
    };

    const handleForm = async(event) => {
        event.preventDefault();
    }

    useEffect(() => {
        loadService()
    }, [params])

    return (
        <div>
            <div style={{ background: `linear-gradient(90deg, #151515 0%, rgba(21, 21, 21, 0.00) 100%)` }} className='relative w-10/12 mx-auto rounded-xl'>
                <Image src='/assets/images/checkout/checkout.png' alt='checkout image' width={1000} height={200} className='w-full  my-10  object-cover object-center h-[300px] rounded-xl' />
                <h2 className='absolute text-4xl text-white font-bold top-1/2 left-16 '>Check Out</h2>
            </div>
            {/* form */}
            <div className='w-10/12 mx-auto bg-[#F3F3F3] p-24 rounded-lg mb-10'>
                <form onSubmit={handleForm}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Your Name</label>
                            <input id="username"
                                name='name'
                                defaultValue={data?.user?.name}
                                required
                                type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Date</label>
                            <input 
                                defaultValue={new Date().getDate()}
                                name='date'
                                required
                                type="date"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="password">Your Email</label>
                            required<input id="password" 
                            type="email"
                                defaultValue={data?.user?.email}
                                name='email'
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="passwordConfirmation">Due Amount</label>
                            required<input id="passwordConfirmation" 
                            type="number"
                                defaultValue={service?.price}
                                name='price'
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="password">Phone Number</label>
                            required<input id="password" 
                            type="number"
                                placeholder='enter your phone number'
                                name='phone'
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="passwordConfirmation">Present Address</label>
                            required<input id="passwordConfirmation" 
                            type="text"
                                placeholder='enter your address'
                                name='address'
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                    </div>
                    <div className="flex justify-center mt-10">
                        <button className="px-8 btn btn-primary">Order Confirm</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default CheckoutPage;