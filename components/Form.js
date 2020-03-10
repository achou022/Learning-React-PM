import React from 'react';


export default props => {
    return(
        <>
            <label>Title:
                <input type="text" onChange = {e => props.setProduct({...props.product, title:e.target.value})} value={props.product.title}/>
            </label>
            <br/>
            <label>
                Price:
                <input type="number" onChange = {e => props.setProduct({...props.product, price:e.target.value})} value={props.product.price}/>
            </label>
            <br/>
            <label>
                Description:
                <input type="text" onChange = {e=> props.setProduct({...props.product, desc:e.target.value})} value={props.product.desc}/>
            </label>
            <br/>
            <button>{props.btn}</button>
            <br/>
        </>
    )
}