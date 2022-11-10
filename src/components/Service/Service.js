import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {


    const { img, price, name, details, _id } = service;

    return (





        <div className="card card-compact w-80 bg-gray-800 shadow-xl mx-auto">
            <figure className=' h-52'>
                <PhotoProvider speed={() => 800}
                    easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}>

                    <PhotoView src={img} key={_id}>

                        <img src={img} alt="" />

                    </PhotoView>
                </PhotoProvider>



            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{details.slice(0, 100)}<span className=' text-orange-500'>...</span></p>
                <p className=' text-orange-500 font-semibold'>{price} TK</p>
                <div className="card-actions justify-start">
                <Link to={`/productDetails/${_id}`}><button className="btn bg-orange-500  text-white"> Show Details < AiOutlineArrowRight className='m-2' />
                    </button></Link>
                </div>
            </div>
        </div>




    );
};

export default Service;