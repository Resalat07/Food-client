import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Products = () => {
    const [services, setService] = useState([])
    useEffect(() => {
        fetch('https://food-server-iota.vercel.app/services/count')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>





            <div >
                <div className='text-center mb-9'>
                    <p className="text-2xl font-bold text-orange-600">Foods Ares</p>


                </div>
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>











        </div>
    );
};

export default Products;