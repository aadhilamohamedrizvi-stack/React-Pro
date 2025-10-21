import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";

const Product = () => {
    const { all_products } = useContext(ShopContext);
const {productId} = useParams();
const product = all_products.find()

    return (
        <div>
            {/* You can now use all_products here */}
            {all_products && all_products.map(product => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>${product.price}</p>
                </div>
            ))}
        </div>
    )
}

export default Product;