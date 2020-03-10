import React, { useEffect, useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';
import Form from '../components/Form';

export default props => {
    const { id } = props;
    const [product, setProduct] = useState({});
    
    useEffect(() => {
        axios.get('http://localhost:5000/api/product/' + id)
            .then(res => {
                setProduct(res.data);
            })
    }, [])
    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:5000/api/product/' + id + '/edit', product)
            .then(res => {console.log(res)
                navigate('/product/'+id)
            })
            .catch(err=>{
                console.log(err)
                navigate('/product')});
    }
    return (
        <div>
            <h1>Update Product</h1>
            <form onSubmit={updateProduct}>
                <Form product={product} setProduct={setProduct} btn={'Update'}/>
            </form>
        </div>
    )
}
