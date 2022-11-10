import React, { useState } from 'react';

const Admin = () => {

    const [user, setUser] = useState({});

    const handleAddUser = event => {
        event.preventDefault();
        console.log(user);

        fetch('https://food-server-iota.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
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
        const newUser = { ...user }
        newUser[field] = value;
        setUser(newUser);
    }
    return (
        <div className='mx-auto'>

            <h2>Please add a new User</h2>
            <form onSubmit={handleAddUser}>
                <input onBlur={handleInputBlur} type="text" name='name' placeholder='Name' className="input input-bordered w-full m-4" required />
                <br />
                <input onBlur={handleInputBlur} type="text" name="img" placeholder='Photo Url' className="input input-bordered w-full m-4" required />
                <br />
                <input onBlur={handleInputBlur} type="text" name="price" id="" placeholder='Amount' className="input input-bordered w-full m-4" required />
                <br />
                <input onBlur={handleInputBlur} type="text" name="service_id" id="" placeholder='Like 01 , 02' className="input input-bordered w-full m-4" required />
                <br />
                <textarea onBlur={handleInputBlur} type="text" name="details" id="" placeholder='Details' className="input input-bordered w-full h-24 m-4" required />
                <br />
                <button type="submit" className='btn btn-success m-4'>Update</button>
            </form>

        </div>
    );
};

export default Admin;