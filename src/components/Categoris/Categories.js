import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css'

const Categories = () => {
    return (
        <div className=' grid lg:grid-cols-2 sm:grid-cols-1 gap-6 '>
            <div class="column">
                <div class="carda">
                    <div class="content">
                        <div class="front">
                            <img class="profile" className=' h-56' src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/fruit_and_veg-fcb7b38.jpg?quality=90&resize=556,505" alt="" />
                            <h2 className=' text-xl text-white font-semibold p-3'>Vegetarian</h2>
                        </div>
                        <div class="back from-bottom">
                            <h2 className=' text-xl text-white font-semibold pt-3'>Vegetarian</h2>

                            <br />
                            <p class="des">
                                "Vegetarian food leaves a deep impression on our nature. If the whole world adopts vegetarianism, it can change the destiny of humankind"
                            </p>

                            <Link to="/veg" className='btn bg-orange-600 border-none text-white'>Show Items</Link>

                        </div>
                    </div>
                </div>
            </div>


            <div class="column">
                <div class="carda">
                    <div class="content">
                        <div class="front">
                            <img class="profile" className='h-56 ' src="https://manmatters.com/blog/content/images/2022/03/Untitled-design---2022-03-07T175530.109_11zon.jpeg" alt="" />
                            <h2 className=' text-xl text-white font-semibold p-3'>Non Vegetarian</h2>
                        </div>
                        <div class="back from-bottom">
                        <h2 className=' text-xl text-white font-semibold pt-3'>Non Vegetarian</h2>
                            
                            <p class="des">
                            "Eating healthy nutritious food is the simple and the right solution to get rid of excess body weight effortlessly and become slim and healthy forever." 
                            </p>
                            <Link to="/nonVeg" className='btn bg-orange-600 border-none text-white'>Show Items</Link>

                        </div>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="carda">
                    <div class="content">
                        <div class="front">
                            <img class="profile" className=' h-56' src="https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=face&w=2215&h=1108&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F39%2F2012%2F06%2F20222319%2FBM_004730_sq.jpg" alt="" />
                            <h2 className=' text-xl text-white font-semibold p-3'>Desserts</h2>
                        </div>
                        <div class="back from-bottom">
                        <h2 className=' text-xl text-white font-semibold pt-3'>Desserts</h2>
                            <p class="des">
                            "Dessert is probably the most important stage of the meal, since it will be the last thing your guests remember before they pass out all over the table"
                            </p>
                            <Link to="/dessert" className='btn bg-orange-600 border-none text-white'>Show Items</Link>


                        </div>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="carda">
                    <div class="content">
                        <div class="front">
                            <img class="profile" className=' h-56' src="https://media.istockphoto.com/id/1253099922/photo/assortment-of-fresh-fruits-and-vegetables-juices-in-rainbow-colors.jpg?b=1&s=170667a&w=0&k=20&c=GO3TiW3f8Oh0JQlkjLJcLs2mMvQjJcy10hMNhYuMNIg=" alt="" />
                            <h2 className=' text-xl text-white font-semibold p-3'>Drinks</h2>
                        </div>
                        <div class="back from-bottom">
                        <h2 className=' text-xl text-white font-semibold pt-3'>Drinks</h2>
                            
                            <p class="des">
                            "Juice up your day with juices made with all-natural ingredients, fruits, and vegetables for a healthier way of life."
                            </p>
                            <Link to="/drinks" className='btn bg-orange-600 border-none text-white'>Show Items</Link>


                        </div>
                    </div>
                </div>
            </div>
        </div>







    );
};

export default Categories;