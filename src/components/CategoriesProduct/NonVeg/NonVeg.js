import React, { useEffect, useState } from 'react';
import { ClimbingBoxLoader } from 'react-spinners';

import { AiOutlineArrowRight } from 'react-icons/ai';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NonVeg = () => {

    const [loading, setLoading] = useState(true)
    
    const [services, setService] = useState([])
    const [search, setSearch] = useState('')
    
    useEffect(() => {
        fetch(`https://food-server-iota.vercel.app/services?`)
            .then(res => res.json())
            .then(data => {
                
                setService(data.services)
                setLoading(false)
            })
    }, [])

    return (
        <div>
            <div>
            <div className=' flex justify-center '>
            <div className='text-center mb-6 '>
                <p className="text-2xl font-bold text-orange-600">Make your food</p>

                <div className="form-control m-6">
                    <div className="input-group">
                        <input type="text" placeholder="Search…" className="input rounded input-bordered w-96"  onChange={e=>{setSearch(e.target.value)}}/>
                        
                    </div>
                </div>


            </div>
            </div>

            {
                loading ?

                    <div className=' flex justify-center pt-5'>
                        <ClimbingBoxLoader
                            color="#de7c15"
                            size={31}
                        />
                    </div>

                    :


                    <div className='grid gap-y-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        {
                            services.filter((val)=>{
                                return search.toLowerCase()===''? val : val.name.toLowerCase().includes(search)
                            }).map(service =>service.category_name !== 'Vegetarian' && service.category_name !=="Dessert" && service.category_name !=="Drinks" && <motion.div initial={{
                                y: +300,
                    
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}
                            
                            viewport={{ once: true }}
                    
                    
                    
                            whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 2.9 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 17 }}className="card card-compact w-80 bg-gray-800 shadow-xl mx-auto">
                            <figure className=' h-52'>
                                <PhotoProvider speed={() => 800}
                                    easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}>
                
                                    <PhotoView src={service.photo} key={service._id}>
                
                                        <img src={service.photo} alt="" />
                
                                    </PhotoView>
                                </PhotoProvider>
                
                
                
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{service.name}</h2>
                                
                                <div className="card-actions justify-start">
                                <Link to={`/productDetails/${service._id}`}><button className="btn bg-orange-500  text-white"> Show Details < AiOutlineArrowRight className='m-2' />
                                    </button></Link>
                                </div>
                            </div>
                        </motion.div>)
                        }
                    </div>


            }




        </div>
        </div>
    );
};

export default NonVeg;