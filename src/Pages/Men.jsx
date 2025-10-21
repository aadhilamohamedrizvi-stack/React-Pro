import React from "react";
import './men.css'
import all_product from '../Assets/all_product';
import Item from "../Items/Item"; 

const Men = () => {
    return (
        <div className='men'>
<h1> MEN</h1>
<hr />

<div className="men-item">
    {all_product.map((item,i)=>{
        return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} />
    })}
</div>

        </div>
    )
}
export default men;


