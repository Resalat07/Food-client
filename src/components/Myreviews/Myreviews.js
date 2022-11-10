import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import ReviewTable from '../ReviewTable/ReviewTable';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Myreviews = () => {
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
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
        // const prossed = window.confirm("Are you want to delete this? ")
        // if (prossed) {
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
        // }

        return toast
    }




    return (
        <div>



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
};

export default Myreviews;