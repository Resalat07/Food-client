import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ReviewTable = ({ rvw, handleDelete, }) => {
    const { customer, review, email, serviceName, _id, price, service } = rvw;


    const [orderSer, setOrderSer] = useState({})
    useEffect(() => {
        fetch(`https://food-server-iota.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setOrderSer(data))
    }, [service])
    return (


        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost btn-xs'><span className='text-orange-500'>X</span></button>
                </label>
            </th>

            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {
                                orderSer?.img &&
                                <img src={orderSer.img} alt="Avatar Tailwind CSS Component" />
                            }

                        </div>
                    </div>

                </div>
            </td>
            <td>
                <div>
                    <div className="font-bold">{customer}</div>

                </div>

            </td>
            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">{price}</span>
            </td>
            <td>{email}</td>
            <td>{review}</td>
            <th>
                <Link to={`/update/${_id}`}><button className="btn bg-orange-500 btn-xs border-none text-white">Update</button></Link>

            </th>
        </tr>


    );
};

export default ReviewTable;