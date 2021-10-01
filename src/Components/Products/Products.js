import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap';

const Products = (props) => {
    const { img, name, price, seller, stock } = props.product;
    const { handleProductItem } = props
    return (
        <div className="row text-start border-bottom my-3 p-2">
            <div className="col-md-4">
                <img className="w-100" src={img} alt="" />
            </div>
            <div className="col-md-8">
                <h6>{name}</h6>
                <h6>Price: <mark>{price}</mark></h6>
                <p>Seller: {seller}</p>
                <p>Available: {stock}</p>
                <Button className="border-0" style={{ backgroundColor: "#FF9800" }} onClick={() => handleProductItem(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> Add Item</Button>
            </div>
        </div>
    );
};

export default Products;