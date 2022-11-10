import Lottie from 'lottie-react'
import food from '../../image/food.json';
import cook from '../../image/cook.svg';
import deli from '../../image/order.svg';
import eat from '../../image/eats.svg';

import React from 'react';
import Products from '../Products/Products';
import { Link } from 'react-router-dom';





const Home = () => {
    return (
        <div className=' d-flex justify-center align-middle'>



            <div class="grid lg:grid-cols-2 md:grid-cols-2 xs:grid-cols-12 order-first  gap-4">
                <div className='mt-9'>
                    <h1 className=' text-6xl text-gray-50 font-semibold p-6 '>Feel The Taste OF <span className=' text-orange-600'>Homemade</span> <br /> Foods..</h1>
                    <div className='p-6'>
                        <button className="btn text-white bg-orange-500 mt-4 "><Link to='/allProducts'>Order Now</Link></button>
                    </div>
                </div>

                <div className=' '>
                    <Lottie animationData={food} loop={true} />


                </div>

            </div>

            




            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 m-6 '>
                <div >
                    <div className="card  bg-violet-800 shadow-xl ">
                        <figure className="px-10 pt-10">
                            <img src={cook} alt="Shoes" className="rounded-xl w-28 " />
                        </figure>
                        <div className="card-body items-center text-center">

                            <p>We deliver the fresh Foods</p>

                        </div>
                    </div>

                </div>
                <div>
                    <div className="card bg-violet-800 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={eat} alt="Shoes" className="rounded-xl w-44" />
                        </figure>
                        <div className="card-body items-center text-center">

                            <p>Cooking delicious food</p>

                        </div>
                    </div>

                </div>
                <div>
                    <div className="card  bg-violet-800 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={deli} alt="Shoes" className="rounded-xl w-24" />
                        </figure>
                        <div className="card-body items-center text-center">

                            <p>Order Your favorite food now</p>

                        </div>
                    </div>

                </div>
            </div>



            <div className='mt-6'>
                <Products></Products>
            </div>
            <div className=' flex justify-center p-6'>
                <Link to='/allProducts'><button className='btn bg-orange-500 text-white'>Show All Items</button></Link>
            </div>








        </div>
    );
};

export default Home;