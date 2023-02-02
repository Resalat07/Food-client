import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Service = ({ service }) => {


    const { photo,name,  _id } = service;

    return (





        <motion.div
        initial={{
            y: +300,

        }}
        whileInView={{
            opacity: 1,
            y: 0
        }}
        
        viewport={{ once: true }}



        whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}

        
        className="card card-compact w-80 bg-gray-800 shadow-xl mx-auto">
            <figure className=' h-52'>
                <PhotoProvider speed={() => 800}
                    easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}>

                    <PhotoView src={photo} key={_id}>

                        <img src={photo} alt="" />

                    </PhotoView>
                </PhotoProvider>



            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                
                
                <div className="card-actions justify-start">
                <Link to={`/productDetails/${_id}`}><button className="btn bg-orange-500  text-white"> Show Details < AiOutlineArrowRight className='m-2' />
                    </button></Link>
                </div>
            </div>
        </motion.div>




    );
};

export default Service;