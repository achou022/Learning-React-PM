import React, { useState } from 'react';
import axios from 'axios';
import Form from './Form';

export default () => {
    const [product, setProduct] = useState({
        title:'',
        price:0,
        desc:''
    })
    const submitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/product",{
            title:product.title,
            price:product.price,
            desc:product.desc
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
        setProduct({
            title:'',
            price:0,
            desc:''
        })
    }
    return (
        <>
            <h3>Product Manager</h3>
            <form onSubmit={submitHandler}>
                <Form product={product} setProduct={setProduct} btn={'Create'}/>
            </form>
        </>
    )
}