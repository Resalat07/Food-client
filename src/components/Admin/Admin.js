import React, { useState } from 'react';

const Admin = () => {

    // const [user, setUser] = useState({});

    // const handleAddUser = event => {
    //     event.preventDefault();
    //     console.log(user);

    const handleSubmit = event => {

        event.preventDefault();
        const form = event.target;
        
        const category = form.category.value;
        const name = form.name.value;
       
      
        
        const photo = form.photo.value;
        
        const ingredients = form.ingredients.value;
        const details =form.details.value;
        // [3, 4, 5].map((value, i) => console.log(value))
        const productAdd = {
            
            category_name: category,
            name,
           
            photo,
            ingredients,
            details
            
        }





        fetch('https://food-server-iota.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productAdd)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('User added successfully');
                    event.target.reset();
                }
            })
    }

    // const handleInputBlur = event => {
    //     const field = event.target.name;
    //     const value = event.target.value;
    //     console.log();
    //     const newUser = { ...user }
    //     newUser[field] = value;
    //     setUser(newUser);
    // }
    return (
        <div className='mx-auto'>

            <h2 className=' text-xl'>Please add a new Recipe</h2>
            {/* <form onSubmit={handleAddUser}>
                <input onBlur={handleInputBlur} type="text" name='name' placeholder='Name' className="input input-bordered w-96 m-4" required />
                <br />
                <select onBlur={handleInputBlur}  type="text" name='category' className="select select-bordered w-96">
                    <option disabled selected>Who shot first?</option>
                    <option value='han'>Han Solo</option>
                    <option value={'dd'}>Greedo</option>
                </select>
                <br />
                <input onBlur={handleInputBlur} type="text" name="img" placeholder='Photo Url' className="input input-bordered w-96 m-4" required />
                <br />
                <input onBlur={handleInputBlur} type="text" name="ingredients" id="" placeholder='Ingredients' className="input input-bordered w-96 h-24 m-4" required />
                <br />

                <textarea onBlur={handleInputBlur} type="text" name="details" id="" placeholder='Details' className="input input-bordered w-full h-24 m-4" required />
                <br />
                <button type="submit" className='btn btn-success m-4'>Add Product</button>
            </form> */}

            <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 mt-10'>
                
                <select name="category" className="select select-bordered w-96">

                    <option value="Nonvegetarian">Non Vegetarian</option>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Dessert">Dessert</option>
                    <option value="Drinks">Drinks</option>

                </select>
                
                <input name="name" type="text" placeholder=" Name" className="input w-96 input-bordered" />
                
                <input name="photo" type="text" placeholder="Your Recipe Image" className="input w-96 input-bordered" />
              
                <textarea name="ingredients" type="text" placeholder="Your Ingredients" className="input w-96 h-28 input-bordered" />
                <textarea name="details" type="text" placeholder="Details" className="input w-96 h-28 input-bordered" />
                <br />
                
                <input className='btn bg-orange-700 w-full' type="submit" value="Submit" />
            </form>


        </div>
    );
};

export default Admin;