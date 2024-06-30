import React from 'react';

const FacilityCart = ({item}) => {

    const {name, details} = item

    return (
        <div className='p-10 bg-[#F3F3F3] rounded-[10px] border-t-2 border-[#FF3811]'>
            <h4 className='text-xl font-bold'>{name}</h4>
            <p>{details}</p>
        </div>
    );
};

export default FacilityCart;