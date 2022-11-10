import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Update = () => {

    const storedRev = useLoaderData()
    console.log(storedRev)

    const [rev, setRev] = useState(storedRev);

    const handleAddUser = event => {
        event.preventDefault();
        console.log(rev);

        fetch(`https://food-server-resalat07.vercel.app/reviews/${storedRev._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(rev)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('User added successfully');
                    event.target.reset();
                }
            })
    }

    const handleInputBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = { ...rev }
        newUser[field] = value;
        setRev(newUser);
    }


    return (
        <div>
            {storedRev.customer}
            <form onSubmit={handleAddUser}>
                <textarea onBlur={handleInputBlur} type="text" name="review" id="" placeholder='Details' className="input input-bordered w-full h-24 m-4" required />
                <br />
                <button type="submit" className='btn btn-success m-4'>Add User</button>
            </form>

        </div>
    );
};

export default Update;