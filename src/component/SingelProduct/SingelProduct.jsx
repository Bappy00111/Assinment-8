import React from 'react';

const SingelProduct = (props) => {
    console.log(props);

    const { coverImg, profileImg, profileName, relesDate, timeSpen, title } = props;

    return (
        <div className="card card-compact w-full bg-base-100  mb-10">
            <figure><img className='rounded-xl' src={coverImg} alt="Shoes" /></figure>
            <div className='flex justify-between items-center'>
                <div className="flex gap-3 items-center mt-5">
                    <img className='w-[60px] h-[60px] rounded-full' src={profileImg} alt="" />
                    <div>
                        <p className='font-bold'>{profileName}</p>
                        <p>{relesDate}</p>
                    </div>
                </div>
                <div>
                    <p className='flex gap-2'>{timeSpen}
                        min read
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                            </svg>

                        </span>
                    </p>
                </div>
            </div>
            <p className='mt-5 md:text-3xl font-bold'>{title}</p>
            <p className='mt-5 text-gray-500'>#beginners #programming</p>
        </div>
    );
};

export default SingelProduct;