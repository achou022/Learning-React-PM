import React from 'react';
import { Link } from '@reach/router';
import DeleteBtn from './DeleteBtn';

export default props => {

    return (
        <div>
            <h3>All Products</h3>
            <table>
                <tr>
                    <th>Title</th>
                    <th>Price</th>
                </tr>
                {props.products.map((product, index)=>(
                        <tr key={index}>
                            <Link to={'/product/'+product._id}>
                                <td key={index} style={{color:'skyblue'}}>{product.title}</td> 
                            </Link>
                            <td>${product.price}</td>
                            <DeleteBtn product={product}/>
                        </tr>
                    ))}
            </table>
        </div>
    )
}