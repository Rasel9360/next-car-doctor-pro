import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const ServiceCart = ({ service }) => {
    return (
        <div className="card card-compact bg-base-100 shadow border p-4 ">
            <figure>
                <Image src={service.img} alt={service?.title} width={500} height={500} className='h-[200px] object-cover object-center rounded-xl' />

            </figure>
            <div className="">
                <h2 className="card-title mt-5">{service?.title}</h2>
                <div className=" flex justify-between items-center">
                    <p className='text-lg text-primary font-semibold'>Price : ${service?.price}</p>
                    <Link href={`/services/${service._id}`}><button className="text-primary text-xl"><FaArrowRight /></button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCart;