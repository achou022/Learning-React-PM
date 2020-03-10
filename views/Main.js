import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

export default () => {
    const [products, setProduct]=useState([]);
    useEffect(()=> {
        axios.get("http://localhost:5000/api/product")
            .then(res => setProduct(res.data.products))
            .catch(error => console.log("Error:", error))
    }, [products]);

    return (
        <div>
            <ProductForm/>
            <ProductList products={products}/>
        </div>
    )
}