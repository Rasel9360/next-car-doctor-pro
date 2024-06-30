import FacilityCart from '@/components/Cart/FacilityCart';
import { getServiceData, getServiceDetails } from '@/services/getServiceData';
import Image from 'next/image';
import React from 'react';
import { FaArrowRight,  } from 'react-icons/fa';
import { FiFileText } from "react-icons/fi";

const ServiceDetailsPage = async ({ params }) => {

    const details = await getServiceDetails(params.id);
    const { _id, title, img, price, description, facility } = details;

    const services = await getServiceData();
    // console.log(services);

    return (
        <div>
            <div style={{ background: `linear-gradient(90deg, #151515 0%, rgba(21, 21, 21, 0.00) 100%)` }} className='relative w-10/12 mx-auto rounded-xl'>
                <Image src='/assets/images/checkout/checkout.png' alt='checkout image' width={1000} height={200} className='w-full  my-10  object-cover object-center' />
                <h2 className='absolute text-4xl text-white font-bold top-1/2 left-16 '>Service Details</h2>
            </div>

            <div className='w-10/12 mx-auto mt-24  grid grid-cols-1 lg:grid-cols-3 gap-6'>
                <div className='col-span-2'>
                    <div className='space-y-7'>
                        <Image src={img} width={500} height={400} alt='service photo'
                            className='w-full h-[400px] object-cover object-center rounded-xl'
                        />
                        <h2 className='text-3xl font-bold'>{title}</h2>
                        <p className='text-justify'>{description}</p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
                        {
                            facility.map((item, idx) => <FacilityCart key={idx} item={item} />)
                        }
                    </div>
                    <div className='space-y-7 mt-7'>
                        <p className='text-justify'>{description.slice(0, 400)}</p>
                        <h2 className='text-3xl font-bold'>3 Simple Steps to Process</h2>
                        <p className='text-justify'>{description.slice(0, 400)}</p>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-6 my-7  '>
                        <div className='space-y-3 border-2 rounded-lg flex flex-col justify-center items-center text-center p-8'>
                            <div className='w-16 h-16 rounded-full flex justify-center items-center bg-[#FF3811] bg-opacity-20'>
                                <div className='w-10 h-10 rounded-full flex justify-center items-center bg-[#FF3811] p-2'>
                                    <p className='text-xl font-bold text-white'>01</p>
                                </div>
                            </div>
                            <h5 className='text-xl font-bold'>Step One</h5>
                            <p>It uses a dictionary of over 200 .</p>
                        </div>
                        <div className='space-y-3 border-2 rounded-lg flex flex-col justify-center items-center text-center p-8'>
                            <div className='w-16 h-16 rounded-full flex justify-center items-center bg-[#FF3811] bg-opacity-20'>
                                <div className='w-10 h-10 rounded-full flex justify-center items-center bg-[#FF3811] p-2'>
                                    <p className='text-xl font-bold text-white'>02</p>
                                </div>
                            </div>
                            <h5 className='text-xl font-bold'>Step Two</h5>
                            <p>It uses a dictionary of over 200 .</p>
                        </div>
                        <div className='space-y-3 border-2 rounded-lg flex flex-col justify-center items-center text-center p-8'>
                            <div className='w-16 h-16 rounded-full flex justify-center items-center bg-[#FF3811] bg-opacity-20'>
                                <div className='w-10 h-10 rounded-full flex justify-center items-center bg-[#FF3811] p-2'>
                                    <p className='text-xl font-bold text-white'>03</p>
                                </div>
                            </div>
                            <h5 className='text-xl font-bold'>Step Three</h5>
                            <p>It uses a dictionary of over 200 .</p>
                        </div>
                    </div>
                </div>


                <div>
                    {/* Service category */}
                    <div className='bg-[#F3F3F3] p-10 rounded-xl'>
                        <h2 className="text-xl font-bold">Service</h2>
                        {
                            services.map(service => (
                                <div key={service._id}>
                                    <div className='bg-base-100 p-3 mt-5 rounded-lg font-semibold flex justify-between items-center'>
                                        <p className=''>{service?.title}</p>
                                        <FaArrowRight className='text-[#FF3811]' />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    {/* company details */}
                    <div className='bg-[#151515] mt-7 p-12 rounded-xl text-white'>
                        <h3 className='text-2xl font-bold '>Download</h3>
                        <div className='flex justify-between items-center my-7'>
                            <div className='flex items-center gap-3'>
                                <FiFileText  className='text-2xl'/>
                                <div>
                                    <h1 className='text-lg font-bold'>Our Brochure</h1>
                                    <p className='text-sm text-[#A2A2A2]'>Download</p>
                                </div>
                            </div>
                            <button className='btn btn-primary'><FaArrowRight /></button>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-3'>
                                <FiFileText  className='text-2xl'/>
                                <div>
                                    <h1 className='text-lg font-bold'>Company Details</h1>
                                    <p className='text-sm text-[#A2A2A2]'>Download</p>
                                </div>
                            </div>
                            <button className='btn btn-primary'><FaArrowRight /></button>
                        </div>
                    </div>
                    {/* get quote */}
                    <div className='bg-[#151515] mt-7 p-12 rounded-xl'>
                        <div className='flex flex-col justify-center items-center text-center text-white font-bold'>
                            <Image src='/assets/logo.png' alt='logo' width={100} height={100} />
                            <h2 className=' text-2xl mt-2 mb-5'>Car Doctor</h2>
                            <p className='text-xl '>Need Help? We Are Here
                                To Help You</p>
                        </div>

                        <div className='relative bg-base-100 p-10 rounded-xl mt-7 text-xl font-bold text-center'>
                            <h2><span className='text-primary'>Car Doctor</span> Special</h2>
                            <p className='text-[16px]'>Save up to  <span className='text-primary'>60% off</span></p>

                        </div>
                        <h4 className='absolute bg-primary py-4 px-7 rounded-lg text-white font-bold -translate-y-7 translate-x-[50%]'>Get A Quote</h4>
                    </div>
                    {/* proceed button */}
                    <div>
                        <h3 className='text-4xl font-bold my-7'>Price ${price}</h3>
                        <button className='btn btn-primary w-full'>Proceed Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailsPage