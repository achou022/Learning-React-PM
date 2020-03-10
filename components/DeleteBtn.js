import React from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';
import { navigate } from '@reach/router';

export default props => {
    const deleteHandler = productID => {
        axios.delete('http://localhost:5000/api/product/delete/'+productID)
            .then(res=>{
                navigate('/product');
                console.log(res)})
            .catch(err=>console.log(err))
    }

    return (
        <Button onClick={e=>deleteHandler(props.product._id)} style={{color:'white', background:'red'}}>Delete</Button>
    )
}