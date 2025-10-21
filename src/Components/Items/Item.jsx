import React from "react";
import './Item.css'; // Corrected from './Item.className'

const Item = (props) => {
    return (
        <div className='item'>
            <img src={props.image} alt={props.name} />
            <p>{props.name}</p>
            <div className="item-price">
                ${props.price}
            </div>
        </div>
    );
}

export default Item;