import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from '../Service/Service';

const AllProducts = () => {



    const [count, setCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(5);
    const [services, setService] = useState([])
    useEffect(() => {
        fetch(`https://food-server-iota.vercel.app/services?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setCount(data.count)
                setService(data.services)
            })
    }, [page, size])
    // const {services ,count}= useLoaderData()
    // console.log(count)




    const pages = Math.ceil(count / size)




    return (
        <div>
            <div className='text-center mb-3'>
                <p className="text-2xl font-bold text-orange-600">Order your food</p>


            </div>
            <div className='grid gap-y-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>


            <div className=' flex justify-center p-6'>
                <div>
                    {
                        [...Array(pages).keys()].map(number => <button key={number} className=' btn m-3 bg-orange-500 text-white' onClick={() => setPage(number)}>
                            {number + 1}

                        </button>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllProducts;