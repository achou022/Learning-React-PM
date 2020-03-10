import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import DeleteBtn from '../components/DeleteBtn';


export default props => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:5000/api/product/" + props.id)
            .then(res => setProduct(res.data))
    }, [])

    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: ${product.price}</p>
            <p>Description: {product.desc}</p>
            <Link to={"/product/" + product._id + "/edit"} style={{color:'skyblue'}}>
                Edit {' '}
            </Link>
            | 
            <Link to={'/product/'} style={{color:'skyblue'}}>
                {' '}Home
            </Link>
            <br/>
            <DeleteBtn product={product}/>
        </div>
    )
}
