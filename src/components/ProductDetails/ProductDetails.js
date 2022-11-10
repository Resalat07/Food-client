import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const ProductDetails = () => {

    const { name, img, details, price, _id } = useLoaderData()
    const { user } = useContext(AuthContext)

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`https://food-server-iota.vercel.app/reviews/${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    console.log(reviews);

    const notify = () =>{
        return toast;
    }


    const handleReview = (e) => {
        e.preventDefault()
        const form = e.target;
        const usrName = form.yourName.value
        const email = user?.email || 'unregistered';
        const photos = user?.photoURL || 'unregistered'
        const review = form.review.value


        const order = {
            service: _id,
            serviceName: name,
            price,
            customer: usrName,
            email,
            review,
            photos
        }



        fetch('https://food-server-iota.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Review added successfully', {
                        position: "top-center",
                        autoClose: 1986,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                    form.reset()
                }
            })
            .catch(error => console.log(error))

    }
    return (
        <div className='p-6'>



            <div className="card  bg-base-100 shadow-xl">
                <figure><img src={img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-orange-500">{name}</h2>
                    <p>{details}</p>
                    <p className=' text-orange-500 font-semibold'>{price} TK.</p>
                    <div className="card-actions">
                        <button className="btn bg-orange-500 text-white">Reviews</button>
                        <button className="btn bg-orange-500 text-white">add to Cart</button>
                    </div>

                </div>
            </div>

            <div>
                <form onSubmit={handleReview}>
                    <input name="yourName" type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs m-3" required />
                    <input name='email' type="email" defaultValue={user?.email} readOnly className="input input-bordered w-full max-w-xs m-3" />
                    <br />


                    <textarea name='review' className="textarea textarea-bordered h-60 mt-3 w-full" placeholder="Your review"></textarea>

                    <br />


                    <input onClick={notify} type="submit" value='Review' className='btn bg-orange-500 text-white m-3' />
                    <ToastContainer
                    position="top-center"
                    autoClose={1986}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"/>



                </form>
            </div>
            <h2 className='text-center text-3xl text-orange-500 m-6 font-semibold'>Reviews</h2>
            <div className=' flex justify-center align-middle'>

                <div className=' grid gap-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>

                    {
                        reviews.map(review => <div key={review._id} className="card bg-indigo-900 shadow-xl m-6 bg-">
                            <div className="card-body">
                                <img src={review.photos} className=' h-14 w-14 rounded-full' alt="" />
                                <h2 className="card-title">{review.customer}</h2>
                                <p>{review.review}</p>

                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;