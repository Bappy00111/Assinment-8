import React from 'react';

const CardDetel = ({time,productTitle}) => {
    console.log(productTitle);
    // console.log(id);
    return (
        <div className='mt-5 sticky top-0'>
            <h3 className='text-xl font-bold bg-slate-100 p-5 mb-5 text-center'>Spent time on read : {time}min</h3>
            <div className='bg-slate-200 p-3'>
                <h3 className='font-bold text-lg mb-5'>Bookmarked Blogs : 8</h3>
                <p className='p-3 bg-white font-bold'>{productTitle}</p>
            </div>
        </div>
    );
};

export default CardDetel;