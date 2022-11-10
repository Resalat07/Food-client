import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import ReviewTable from '../ReviewTable/ReviewTable';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Myreviews = () => {
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    const len = reviews.length
    useEffect(() => {
        fetch(`https://food-server-iota.vercel.app/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('food-token')}`
            }
        })
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [user?.email])


    const handleDelete = (id) => {
        
        fetch(`https://food-server-iota.vercel.app/reviews/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    toast.success('Review delete successfully', {
                        position: "top-center",
                        autoClose: 1986,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    const remaining = reviews.filter(rve => rve._id !== id)
                    setReviews(remaining)
                }
            })
       

        return toast
    }

    if(len === 0){
        return(<div className=''>
            <p className=' text-5xl text-orange-500 font-semibold text-center'>No review</p>
            <div className='flex justify-center m-6'>
            <Link to='/allProducts' className='btn bg-orange-500 text-white '>Add Some</Link>
            </div>
            
        </div>)
        
    }
    



    else{
        return (
            <div>
                <div>
                
                </div>
                
    
    
    
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
    
                        <thead>
                            <tr>
                                <th>
                                    <label>
    
                                    </label>
                                </th>
                                <th>Img</th>
                                <th>Name</th>
                                <th>Service item</th>
                                <th>email</th>
                                <th>Review</th>
                                <th></th>
                            </tr>
                        </thead>
    
                        <tbody>
                            {
                                reviews.map(rvw => <ReviewTable
                                    handleDelete={handleDelete}
                                    key={rvw._id}
                                    rvw={rvw}
                                ></ReviewTable>)
                            }
    
    
                        </tbody>
    
    
    
                    </table>
                </div>
    
            </div>
        );
    }
};

export default Myreviews;