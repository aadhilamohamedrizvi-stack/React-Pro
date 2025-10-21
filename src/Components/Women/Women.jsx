import React from "react";
import './Women.css'
import data_product from '../Assets/data'
import Item from "../Items/Item";

const Women = () => {
    // Filter only women's products from the data
    const womenProducts = data_product.filter(item => item.category === "women");
    
    return (
        <div className='women'>
            <h1>WOMEN</h1>
            <img 
                    src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&auto=format&fit=crop" 
                    alt="Women Fashion" />
            <hr />
            



            
            
            <div className="women-item">
                {womenProducts.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} />
                })}
            </div>
        </div>
    )
}

export default Women;