import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Update = () => {
    const { user } = useContext(AuthContext)
    const update = useLoaderData()

    const [updateRev, setUpdateRev] = useState(update)

    const handleReviewUpdate = (e) => {
        e.preventDefault()

        const form = e.target;

        const reviews = form.review.value

        const order = {

            reviews

        }

        setUpdateRev(order)
        console.log(updateRev)


        // fetch(`https://food-server-iota.vercel.app/reviews/${update._id}`, {
        //     method: 'PUT',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(updateRev)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.modifiedCount > 0) {
        //             alert('user updated')
        //             console.log(data);
        //         }

        //     })



    }



    return (
        <div>
            {update.name}

            <form onSubmit={handleReviewUpdate}>
                <input name="yourName" type="text" className="input input-bordered w-full max-w-xs m-3" defaultValue={update.customer} readOnly />


                <input name='email' type="email" defaultValue={user?.email} readOnly className="input input-bordered w-full max-w-xs m-3" />
                <br />


                <textarea name='review' className="textarea textarea-bordered h-60 mt-3 w-full" placeholder="Your review"></textarea>

                <br />

                <input type="submit" value='Review' className='btn bg-orange-500 text-white m-3' />



            </form>

        </div>
    );
};

export default Update;