import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <div className="hero  text-slate-800 mb-28">
    <div className="hero-content flex-col gap-20 lg:flex-row">
        <div className='lg:w-1/2 relative'>
            <Image width={1200} height={1200} alt='Person image' src={'/assets/images/about_us/person.jpg'} className="w-full rounded-lg shadow-2xl" />
            <Image width={1000} height={1000} alt='Part image' src={'/assets/images/about_us/parts.jpg'} className="w-1/2 absolute -right-14 top-64 rounded-lg border-8 border-white shadow-2xl" />
        </div>
        <div className='lg:w-1/2 space-y-5 p-4'>
            <h3 className='text-xl text-orange-500 font-bold'>About Us</h3>
            <h1 className="text-4xl font-bold">We are qualified & of experience in this field</h1>
            <p className="pb-6 text-justify">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            <p className=" text-justify">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            <button className="btn btn-primary">Get More Info</button>
        </div>
    </div>
</div>
  );
};

export default About;