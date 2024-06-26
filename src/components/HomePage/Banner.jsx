import React from 'react';

const Banner = () => {
    return (
        <div className='my-16'>
            <div className="carousel w-full">
                {
                    banners.map((banner, index) => (
                        <div
                            style={{
                                backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(/assets/images/banner/${index + 1}.jpg)`,
                            }}
                            key={index}
                            id={`slide${index + 1}`}
                            className="carousel-item relative w-full  object-cover object-center bg-no-repeat h-[90vh] rounded-xl"
                        >

                            <div className='flex flex-col  justify-center text-white w-[35%] ml-24 space-y-5'>
                                <h1 className="text-6xl font-bold">{banner.title}</h1>
                                <p className="text-lg">{banner.description}</p>
                                <div>
                                <button className='btn btn-primary mr-3'>Discover More</button>
                                <button className='btn btn-outline text-white'>Latest Project</button>
                                </div>
                            </div>

                            <div className="absolute    flex bottom-12 right-12">
                                <a href={banner.next} className="btn btn-circle mr-5">❮</a>
                                <a href={banner.prev} className="btn btn-circle btn-primary">❯</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

const banners = [
    {
        title: "Affordable Price For Car Servicing",
        description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
        next: '#slide6',
        prev: '#slide2',
    },
    {
        title: "Affordable Price For Car Servicing",
        description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
        next: '#slide1',
        prev: '#slide3',
    },
    {
        title: "Affordable Price For Car Servicing",
        description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
        next: '#slide2',
        prev: '#slide4',
    },
    {
        title: "Affordable Price For Car Servicing",
        description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
        next: '#slide3',
        prev: '#slide5',
    },
    {
        title: "Affordable Price For Car Servicing",
        description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
        next: '#slide4',
        prev: '#slide6',
    },
    {
        title: "Affordable Price For Car Servicing",
        description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
        next: '#slide5',
        prev: '#slide1',
    },
]

export default Banner;