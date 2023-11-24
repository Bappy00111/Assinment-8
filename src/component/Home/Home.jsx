import React, { useEffect, useState } from 'react';
import SingelProduct from '../singelProduct/singelProduct';
import CardDetel from '../CardDetel/CardDetel';

const Home = () => {
    const [products,setProducts] = useState([])
    
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='grid md:grid-cols-[4fr,2fr] gap-5 mt-5'>
            <div>
                {
                    products.map(product => <SingelProduct
                    {...product}
                    ></SingelProduct>)
                }
            </div>
            <div>
                <CardDetel></CardDetel>
            </div>
        </div>
    );
};

export default Home;