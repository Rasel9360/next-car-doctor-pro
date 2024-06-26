import React from 'react';
import ServiceCart from '../Cart/ServiceCart';


const getServiceData = async () => {
    const res = await fetch('http://localhost:3000/services/api/get-all')
    const data = await res.json()
    // console.log(data);
    return data
}

const Services = async () => {

    const services = await getServiceData();
    console.log(services);

    return (
        <div>
            <div className='text-center space-y-3 mb-12'>
                <h5 className='text-primary text-xl font-bold'>Service</h5>
                <h2 className=' text-4xl font-bold'>Our Service Area</h2>
                <p className="w-1/2 mx-auto ">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10'>
                    {
                        services?.map(service => <ServiceCart key={service._id} service={service} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;