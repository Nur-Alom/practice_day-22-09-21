import React from 'react';
import { addToStorage, removeDb } from '../../Utilities/storage';
import './Calculation.css'

const Calculation = (props) => {
    const { name, balance, email, _id } = props.man;
    const handelPurchase = id => {
        // Set to local Storage.
        // console.log(id);
        addToStorage(id);
    };

    const removeItem = id => {
        removeDb(id)
    }

    return (
        <div className='style'>
            <h1>Name: {name}</h1>
            <h3>Balance: {balance}</h3>
            <h4>Email: {email}</h4>
            <button onClick={() => handelPurchase(_id)}>Purchase</button>
            <button onClick={() => removeItem(_id)}>Remove </button>
        </div>
    );
};

export default Calculation;