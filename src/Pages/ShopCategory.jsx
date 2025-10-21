import React, { useContext } from "react";
import './css/ShopCategory.css'
import { ShopContext } from "../Context/ShopContext";
import dropdown from '../Components/Assets/dropdown.png'
import Item from '../Components/Items/Item'

const ShopCategory = (props) => {
    const {all_products} = useContext(ShopContext);
    return (
        <div className='shop-category'>
     <img src="{props.men}" alt=""  />
     <img src="{props.women}" alt=""  />
     <div className="shopcategory-indexSort">
        <p>
            <span>Showing 1-12</span> out of 15 products
        </p>
        <div className="shopcategory-sort">
           Sort by <img src={dropdown} alt=""/>
        </div>
     </div>
     <div className="shopcategory-products">
        {all_products.map((item,i)=>{
            if (props.category===item.category) {
                return <Item Key={i} id={1} name={item.name} image={item.image} price={item.price} />
        }
        else{
            return null;
        }
        })}
     </div>
        </div>
    )
}
export default ShopCategory;
