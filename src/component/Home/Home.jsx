import React, { useEffect, useState } from 'react';
import SingelProduct from '../singelProduct/singelProduct';
import CardDetel from '../CardDetel/CardDetel';

const Home = () => {
    const [products,setProducts] = useState([])
    const [time,setTime] = useState(0)
    const [productTitle,setProductTitle] = useState("")
    
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    


const handleBookmark = (props) => {
    // setProductTitleg(props.title);
const previousWatchTime = JSON.parse(localStorage.getItem('watchTime'))

if(previousWatchTime){
    const sum = previousWatchTime + props.timeSpen;
    localStorage.setItem("watchTime",JSON.stringify(sum))
    setTime(sum)
}else{
    localStorage.setItem("watchTime",JSON.stringify(props.timeSpen))
    setTime(props.timeSpen)
}

if(props.title){
    setProductTitle(props.title)
}
else{
    
   
}
}





    return (
        <div className='grid md:grid-cols-[4fr,2fr] gap-5 mt-5'>
            <div>
                {
                    products.map(product => <SingelProduct
                    {...product}
                    key = {product.id}
                    handleBookmark={handleBookmark}
                    ></SingelProduct>)
                }
            </div>
            <div>
                <CardDetel
                 time={time}
                 productTitle={productTitle}
                 ></CardDetel>
            </div>
        </div>
    );
};

export default Home;